import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import Fonts from '@assets/styles/Fonts'


builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Fonts />
      <Component {...pageProps} />
      {/*<script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
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
      />*/}
    </>
  )
}

