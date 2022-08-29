import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyColumnHero = dynamic(async () => {
    return (await import('./ColumnHero')).default
  })

Builder.registerComponent(LazyColumnHero, {
    name: 'Column Hero',
    inputs: [
      { name: 'Heading', type: 'string'},
      { name: 'Subheading', type: 'string'},
      { name: 'Description', type: 'string'},
      { name: 'CTA', type: 'string'},
      { name: 'href', type: 'string'}
    ]
})