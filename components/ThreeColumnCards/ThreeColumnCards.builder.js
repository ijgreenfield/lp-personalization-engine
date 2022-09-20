import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyThreeColumnCards = dynamic(async () => {
    return (await import('./ThreeColumnCards')).default
  })

Builder.registerComponent(LazyThreeColumnCards, {
    name: 'Three Column Cards',
    inputs: [
      { name: 'offer1', type: 'string'},
      { name: 'offer2', type: 'string'},
      { name: 'offer3', type: 'string'}
    ]
})