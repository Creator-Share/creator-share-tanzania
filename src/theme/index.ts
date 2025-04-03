const { extendTheme } = require('@chakra-ui/react')

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'black',
      },
    },
  },
})
