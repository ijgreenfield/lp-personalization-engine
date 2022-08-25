import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyLogoCloud = dynamic(async () => {
    return (await import('./LogoCloud')).default
  })

Builder.registerComponent(LazyLogoCloud, {
    name: 'Logo Cloud',
})