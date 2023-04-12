import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ContextProvider } from './context/store'
import { initialState } from './context/initialState'
import { reducer } from './context/reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider state={initialState} reducer={reducer}>
      <App />
    </ContextProvider>
  </React.StrictMode>,
)
