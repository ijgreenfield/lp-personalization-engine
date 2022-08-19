import type { AppProps } from 'next/app'
import { builder } from '@builder.io/react'
import builderConfig from '../config/builder'
import '../assets/index.css'
import { Builder, BuilderComponent } from '@builder.io/react'
import { ChakraProvider } from '@chakra-ui/react'
import Fonts from '@assets/styles/Fonts'
import VideoHero from '../components/Hero'
import theme from '../assets/styles/theme'
import Footer from '@components/Footer'
import ThreeColumn from '@components/ThreeColumn'
import FAQ from '@components/FAQ'
import CTASection from '@components/CtaSection'
import SoloHero from '@components/SoloHero'


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
})

Builder.registerComponent(Footer, { 
  name: 'Footer',
})

Builder.registerComponent(CTASection, { 
  name: 'CTA Section',
})

Builder.registerComponent(FAQ, { 
  name: 'FAQ Section',
})

Builder.registerComponent(SoloHero, { 
  name: 'Solo Hero',
})