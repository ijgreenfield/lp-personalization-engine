import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyColumnHero = dynamic(async () => {
    return (await import('./ColumnHero')).default
  })

Builder.registerComponent(LazyColumnHero, {
    name: 'Column Hero',
})