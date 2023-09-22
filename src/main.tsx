import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './app/store'
import { Provider } from 'react-redux'
import Context from './context/context.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Context>
      <Provider store={store}>
        <App />
      </Provider>
    </Context>
  </React.StrictMode>,
)
