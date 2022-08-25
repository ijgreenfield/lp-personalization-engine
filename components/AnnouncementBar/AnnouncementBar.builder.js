import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyAnnouncementBar = dynamic(async () => {
    return (await import('./AnnouncementBar')).default
  })

Builder.registerComponent(LazyAnnouncementBar, {
  name: 'Announecement Bar',
  inputs: [
    { name: 'announcement', type: 'string' },
    { name: 'bgColor', type: 'string'}
]
})