import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazySMSHero = dynamic(async () => {
    return (await import('./SMSHero')).default
  })

Builder.registerComponent(LazySMSHero, {
    name: 'SMS Hero',
})