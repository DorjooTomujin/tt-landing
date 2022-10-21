import {extendTheme} from '@chakra-ui/react'
const fonts = { mono: `'Menlo', monospace`}

const breakpoints = {
    sm: '500px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px'
}

const theme = extendTheme({
    breakpoints,
    styles: {
        global: {
            body: {
                color: '#3F1DA8'
            }
            
        }
    },
    colors: {
        main: {
            neon: '#00EBB1',
            purple: '#3F1DA8',
        }
    }
})

export default theme