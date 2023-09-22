import type { AppProps } from "next/app";
import { builder } from "@builder.io/react";
import builderConfig from "../config/builder";
import "../assets/index.css";
import Fonts from "@assets/styles/Fonts";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Layout from "@components/Layout";

builder.init(builderConfig.apiKey);

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      import("react-facebook-pixel")
        .then((x) => x.default)
        .then((ReactPixel) => {
          ReactPixel.init("1026552650761735"); // facebookPixelId
          ReactPixel.pageView();

          router.events.on("routeChangeComplete", () => {
            ReactPixel.pageView();
          });
        });
    }, 3000);
  }, [router.events]);

  return (
    <>
      <Layout>
        <GoogleAnalytics trackPageViews />
        <Fonts />
        <Component {...pageProps} />
        <script
          async
          type="text/javascript"
          src="https://static.klaviyo.com/onsite/js/klaviyo.js?company_id=UFdULB"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=i+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('CJ0R7FBC77U3DHQFJ9J0');
              ttq.page();
            }(window, document, 'ttq');
          `,
          }}
        ></script>
      </Layout>
    </>
  );
}
