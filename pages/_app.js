import App from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './theme/globalStyles'
import Navbar from '../components/Navbar/Navbar.js'
import {Indexgrid, Nav, GridA, GridB, GridC, GridD, Main, Bottom} from '../components/grid/grid.js'


const theme = {
  colors: {
    primary: '#00eefe',
  },
}

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Indexgrid>
      <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Nav><Navbar/></Nav>
        <Component {...pageProps} />
      </ThemeProvider>
      </Indexgrid>
    )
  }
}


