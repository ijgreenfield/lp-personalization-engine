import { extendTheme, textDecoration } from "@chakra-ui/react"

const theme = extendTheme({
    fonts: {
        heading: 'Tobias',
        body: 'Cadiz'
    },

    components: {
        Button: {
            baseStyle: {
                width: 'max-content',
                textDecoration: 'underline',
                paddingTop: '12px',
                paddingBottom: '12px',
                paddingLeft: '16px',
                paddingRight: '16px',
            },

            variants: {
                'primary': {
                    bg: '#105368',
                    color: 'white',
                    border: '1px',
                    borderColor: '#105368',
                    fontFamily: 'Cadiz SemiBold',
                    _hover: {
                        bg: '#fff',
                        color: '#105368'
                    },
                    textDecoration: 'none'
                },

                'secondary': {
                    bg: '#fff',
                    color: '#000',
                    textDecoration: 'none',
                    fontFamily: 'Cadiz Semibold',
                    fontSize: '14px',
                }
            }
        }
    }
})

export default theme;