import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../src/styles/themes/defaultThemes'
import { GlobalStyle } from '../src/styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeContextProvider } from './context/CoffeesContext'
import { coffeeData } from '../src/data'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CoffeeContextProvider>
          <Router />
        </CoffeeContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
