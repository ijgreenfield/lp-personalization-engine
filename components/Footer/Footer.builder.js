import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyFooter = dynamic(async () => {
    return (await import('./Footer')).default
  })

Builder.registerComponent(LazyFooter, {
    name: "Footer",
})