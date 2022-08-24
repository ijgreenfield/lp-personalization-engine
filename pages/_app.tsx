import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import { Builder, BuilderComponent } from '@builder.io/react'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@assets/styles/Fonts'
import theme from '../assets/styles/theme'
import Footer from '@components/Footer'
import ThreeColumn from '@components/ThreeColumn'
import FAQ from '@components/FAQ'
import CTASection from '@components/CtaSection'
import SoloHero from '@components/SoloHero'
import VideoHero from '@components/VideoHero'
import LogoCloud from '@components/LogoCloud'
import Header from '@components/Header'
import HeaderTransparent from '@components/HeaderTransparent'
import MapSection from '@components/MapSection'


builder.init(builderConfig.apiKey)

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

Builder.registerComponent(VideoHero, { 
  name: 'Hero',
  inputs: [{ name: 'title', type: 'text' }, { name: 'paragraph', type: 'text'}]
})

Builder.registerComponent(ThreeColumn, { 
  name: 'Three Column Layout',
  inputs: [
    { name: 'Heading', type: 'string'},
    { name: 'Subtext', type: 'string'},
    { name: 'Img1', type: 'string'},
    { name: 'Img2', type: 'string'},
    { name: 'Img3', type: 'string'}
  ]
})

Builder.registerComponent(Footer, { 
  name: 'Footer',
})

Builder.registerComponent(CTASection, { 
  name: 'CTA Section',
  inputs: [
    { name: 'bgColor', type: "string"}
  ]
})

Builder.registerComponent(FAQ, { 
  name: 'FAQ Section',
})

Builder.registerComponent(SoloHero, { 
  name: 'Solo Hero',
  inputs: [
    { name: 'Heading', type: 'text'},
    { name: 'Description', type: 'text'},
    { name: 'CTA', type: 'text'},
    { name: 'form', type: 'boolean'},
    { name: 'logos', type: 'boolean'}
  ]
})

Builder.registerComponent(VideoHero, {
  name: 'Video Hero',
})

Builder.registerComponent(LogoCloud, {
  name: 'Logo Cloud',
})

Builder.registerComponent(Header, {
  name: 'Header w/ Button',
})

Builder.registerComponent(HeaderTransparent, {
  name: 'Transparent Header',
})

Builder.registerComponent(MapSection, {
  name: 'Map Section',
  inputs: [
    { name: 'address', type: 'text'},
    { name: 'phone', type: 'text'},
    { name: 'email', type: 'text'}
  ]
})