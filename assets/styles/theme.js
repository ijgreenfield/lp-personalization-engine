import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: 'Tobias',
        body: 'Cadiz'
    },

    components: {
        Button: {
            baseStyle: {
                width: 'max-content',
                background: '#000'
            },

            variants: {
                'primary': {
                    bg: '#105368',
                    color: 'white',
                    border: '1px',
                    borderColor: '#105368',
                    _hover: {
                        bg: '#fff',
                        color: '#105368'
                    }
                }
            }
        }
    }
})

export default theme;