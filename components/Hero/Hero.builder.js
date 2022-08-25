import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyHero = dynamic(async () => {
    return (await import('./Hero')).default
  })

  Builder.registerComponent(LazyHero, {
    name: 'Hero',
    inputs: [
      { name: 'Heading', type: 'string'},
      { name: 'Subtext', type: 'string'},
      { name: 'bgImage', type: 'string'},
      { name: 'Cta', type: 'string'},
    ]
  })