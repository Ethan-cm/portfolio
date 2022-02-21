import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles'
import Navbar from '../components/Navbar/Navbar.js'

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
        <Navbar/>
        <Component {...pageProps} />
      </ThemeProvider>

    )
  }
}


