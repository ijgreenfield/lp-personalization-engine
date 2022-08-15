import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import { ContextMenu } from '@builder.io/personalization-context-menu'
import '../assets/index.css'
import { Builder, BuilderComponent } from '@builder.io/react'
import Hero from '../components/Hero'

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

Builder.registerComponent(Hero, { 
  name: 'Hero',
  inputs: [{ name: 'title', type: 'text' }]
})