import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import Fonts from '@assets/styles/Fonts'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Script from 'next/script'


builder.init(builderConfig.apiKey)


export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      import('react-facebook-pixel')
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init('1026552650761735') // facebookPixelId
        ReactPixel.pageView()

        router.events.on('routeChangeComplete', () => {
          ReactPixel.pageView()
        })
      })
    }, 3000)
    }, [router.events])

  return (
    <>
      <Script  src="https://www.googletagmanager.com/gtag/js?id=UA-42488621-18"></Script>
      <Script
      id='google-analytics'
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag(‘js’, new Date());
          gtag(‘config’, ‘UA-42488621-18’);
        `,
        }}
    />
      <Fonts />
      <Component {...pageProps} />
      <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB"></script>
    </>
  )
}

