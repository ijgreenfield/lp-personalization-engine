import type { AppProps } from 'next/app'
import { GoogleAnalytics } from "nextjs-google-analytics";
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import theme from '../assets/styles/theme'
import "../components/CtaSection/CtaSection.builder"
import "../components/FAQ/FAQ.builder"
import "../components/Footer/Footer.builder"
import "../components/Header/Header.builder"
import "../components/HeaderTransparent/HeaderTransparent.builder"
import "../components/Hero/Hero.builder"
import "../components/LogoCloud/LogoCloud.builder"
import "../components/ThreeColumn/ThreeColumn.builder"
import "../components/VideoHero/VideoHero.builder"
import "../components/FormHero/FormHero.builder"
import "../components/ColumnHero/ColumnHero.builder"
import "../components/ThreeColumnCards/ThreeColumnCards.builder"
import "../components/CTACard/CTACard.builder"
import Script from 'next/script'
import Fonts from '@assets/styles/Fonts'


builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider theme={theme}>
      <Head>
        <link rel="icon" href="/static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Heyday Skincare Offers</title>
      </Head>
      <Fonts />
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-42488621-18');
        `}
      </Script>
      <script type="text/javascript" async src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB"></script>
      <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1026552650761735');
      fbq('track', 'PageView');` }}
    />
    <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=1026552650761735&ev=PageView&noscript=1" />` }}
    />
    </ChakraProvider>
  )
}

