import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyCTACard = dynamic(async () => {
    return (await import('./CTACard')).default
  })

Builder.registerComponent(LazyCTACard, {
    name: 'CTA Card',
    inputs: [
        { name: 'bgColor', type: 'color' },
        { name: 'heading', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'cta', type: 'string' },
        { name: 'href', type: 'string' },
    ]
})