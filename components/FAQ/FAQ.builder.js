import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyFAQ = dynamic(async () => {
    return (await import('./FAQ')).default
  })

Builder.registerComponent(LazyFAQ, {
    name: 'FAQ',
})
