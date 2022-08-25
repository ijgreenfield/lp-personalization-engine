import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@assets/styles/Fonts'
import Head from 'next/head'
import theme from '../assets/styles/theme'
import "../components/CtaSection/CtaSection.builder"
import "../components/FAQ/FAQ.builder"
import "../components/Footer/Footer.builder"
import "../components/Header/Header.builder"
import "../components/HeaderTransparent/HeaderTransparent.builder"
import "../components/Hero/Hero.builder"
import "../components/LogoCloud/LogoCloud.builder"
import "../components/Testimonials/Testimonials.builder"
import "../components/ThreeColumn/ThreeColumn.builder"
import "../components/VideoHero/VideoHero.builder"


builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <script type="text/javascript" async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB"></script>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

