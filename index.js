import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('root')
)