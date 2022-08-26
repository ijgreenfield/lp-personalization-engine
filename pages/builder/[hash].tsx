import { useRouter } from 'next/router'
import {
  BuilderComponent,
  builder,
  useIsPreviewing
} from '@builder.io/react'
import builderConfig from '../../config/builder'
import DefaultErrorPage from 'next/error'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { PersonalizedURL } from '@builder.io/personalization-utils'
import { useEffect } from 'react'

builder.init(builderConfig.apiKey)

export async function getStaticProps({ params } : GetStaticPropsContext<{ hash: string }>) {
  // hash structure is ${originalURL}::${hash}, splitting here, this would make revalidation possible
  const personlizedURL = PersonalizedURL.fromRewrite(params!.hash!.split('::')[0]);
  const attributes = personlizedURL.options.attributes;
  const page =
    (await builder
      .get('page', {
        apiKey: builderConfig.apiKey,
        userAttributes: attributes,
        cachebust: true
      })
      .promise()) || null

  return {
    props: {
      page,
      attributes: attributes,
      locale: attributes.locale || 'en-US'
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export default function Path({ page, attributes, locale }: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter()
  const isPreviewingInBuilder = useIsPreviewing()

  useEffect(() => {
    builder.setUserAttributes(attributes)
  }, [])

  if (router.isFallback) {
    return <h1>Loading...</h1>
  }

  const { title, description, image } = page?.data || {}
  return (
    <>
      {(isPreviewingInBuilder || page) ? (
        <>
        <BuilderComponent
          context={{ attributes }}
          data={{ attributes, locale }}
          model="page"
          content={page}
        />
      </>
      ) : (
        <DefaultErrorPage statusCode={404} />
      )}
    </>
  )
}
