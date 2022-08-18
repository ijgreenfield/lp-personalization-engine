import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import {
  BuilderComponent,
  Builder,
  builder,
  useIsPreviewing
} from '@builder.io/react'
import builderConfig from '../../config/builder'
import DefaultErrorPage from 'next/error'
import Head from 'next/head'
import type { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { PersonalizedURL } from '@builder.io/personalization-utils'
import { useEffect } from 'react'
import '@builder.io/widgets/dist/lib/builder-widgets-async'
import Header from '@components/Header'

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
      <Head>
        {!page && <meta name="robots" content="noindex" />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          type: 'website',
          title,
          description,
          images: [
            {
              url: image,
              width: 800,
              height: 600,
              alt: title
            }
          ]
        }}
      />
      {(isPreviewingInBuilder || page) ? (
        <>
        <Header />
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
