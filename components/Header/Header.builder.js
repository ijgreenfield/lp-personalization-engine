import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyHeader = dynamic(async () => {
    return (await import('./Header')).default
  })

Builder.registerComponent(LazyHeader, {
    name: "Header w/ Button",
    inputs: [
      {name: 'logo', type: 'string'}
    ]
})