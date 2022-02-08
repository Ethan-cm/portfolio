import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles'

const theme = {
  colors: {
    primary: '#00eefe',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (

      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
      </ThemeProvider>

    )
  }
}


