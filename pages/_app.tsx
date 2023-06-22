import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import Fonts from '@assets/styles/Fonts'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from '@components/Layout'


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
      <Layout>
        <GoogleAnalytics trackPageViews />
        <Fonts />
        <Component {...pageProps} />
        <script async type="text/javascript" src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB"></script>
      </Layout>
    </>
  )
}

