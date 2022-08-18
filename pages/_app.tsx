import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import { Builder, BuilderComponent } from '@builder.io/react'
import VideoHero from '../components/Hero'

builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

Builder.registerComponent(VideoHero, { 
  name: 'Hero',
  inputs: [{ name: 'title', type: 'text' }, { name: 'paragraph', type: 'text'}]
})