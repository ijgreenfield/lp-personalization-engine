import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazySoloHero = dynamic(async () => {
    return (await import('./SoloHero')).default
  })

Builder.registerComponent(LazySoloHero, {
    name: 'Solo Hero',
    inputs: [
        { name: 'Heading', type: 'text'},
        { name: 'Description', type: 'text'},
        { name: 'CTA', type: 'text'},
        { name: 'form', type: 'boolean'},
        { name: 'logos', type: 'boolean'}
      ]
})