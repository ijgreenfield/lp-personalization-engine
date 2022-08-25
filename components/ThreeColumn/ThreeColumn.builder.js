import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyThreeColumn = dynamic(async () => {
    return (await import('./ThreeColumn')).default
  })

Builder.registerComponent(LazyThreeColumn, {
    name: "Three Column Layout",
    inputs: [
        { name: 'Heading', type: 'string'},
        { name: 'Subtext', type: 'string'},
        { name: 'Img1', type: 'string'},
        { name: 'Img2', type: 'string'},
        { name: 'Img3', type: 'string'}
      ]
})