import dynamic from 'next/dynamic'
import { Builder } from "@builder.io/react";

const LazyKlaviyoForm = dynamic(async () => {
    return (await import('./KlaviyoForm')).default
  })

Builder.registerComponent(LazyKlaviyoForm, {
    name: "Klaviyo Form",
    inputs: [
        {name: "formId", type: "string"}
    ]
})