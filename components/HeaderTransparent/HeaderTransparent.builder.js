import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyHeaderTrans = dynamic(async () => {
    return (await import('./HeaderTransparent')).default
  })

Builder.registerComponent(LazyHeaderTrans, {
    name: "Transparent Header",
})