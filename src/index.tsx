import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Main from './Main'
import store from './store'

const root = document.querySelector('#app')

const App = () => <h1>Slide </h1>

if (root) {
  ReactDOM.render((
    <Provider store={store}>
      <Main />
    </Provider>
  ), root)
} else {
  console.log('Failed to find the root node')
}