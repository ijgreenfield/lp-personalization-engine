import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyCTA = dynamic(async () => {
    return (await import('./CtaSection')).default
  })

Builder.registerComponent(LazyCTA, { 
name: 'CTA Section',
inputs: [
    { name: 'bgColor', type: "string"}
]
})