import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyFormHero = dynamic(async () => {
    return (await import('./FormHero')).default
  })

  Builder.registerComponent(LazyFormHero, {
    name: 'Form Hero',
    inputs: [
      { name: 'Heading', type: 'string'},
      { name: 'Subtext', type: 'string'},
      { name: 'bgImage', type: 'string'},
      { name: 'Cta', type: 'string'},
    ]
  })