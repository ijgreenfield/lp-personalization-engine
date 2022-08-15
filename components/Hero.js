import { Builder, BuilderComponent } from '@builder.io/react'

export default function Hero(props) {
    return (
        <div>
            <h1>This is a hero component!</h1>
            <p>{props.title}</p>
        </div>
    )
}

Builder.registerComponent(Hero, { 
    name: 'Hero',
    inputs: [{ name: 'title', type: 'text' }]
  })