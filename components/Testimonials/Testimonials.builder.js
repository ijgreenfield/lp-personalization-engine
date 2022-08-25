import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyTestimonials = dynamic(async () => {
    return (await import('./Testimonials')).default
  })

Builder.registerComponent(LazyTestimonials, {
    name: 'Testimonials',
})