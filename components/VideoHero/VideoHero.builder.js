import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyVideoHero = dynamic(async () => {
    return (await import('./VideoHero')).default
  })

Builder.registerComponent(LazyVideoHero, {
  name: 'VideoHero',
  inputs: [{ name: 'title', type: 'text' }, 
  { name: 'description', type: 'text'},
  { name: 'location', type: 'string'},
  { name: 'form_id', type: 'string'},
  { name: 'formHeading', type: 'string'}
]
})