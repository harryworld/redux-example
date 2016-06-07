import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import exampleApp from './src/reducers'
import App from './src/components/App'

let store = createStore(exampleApp)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)