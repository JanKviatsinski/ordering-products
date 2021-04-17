import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router'
import { ThemeProvider } from 'styled-components'
import Provider from 'react-redux/lib/components/Provider'
import { App } from './App'
import { theme, GlobalStyle } from './theme/styledTheme'
import { store } from './store'
import { history } from './history'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <App />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
