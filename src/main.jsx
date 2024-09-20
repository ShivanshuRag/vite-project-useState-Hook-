import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import './index.css'
import BgColor from './BgColor.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <BgColor/>
  </StrictMode>,
)
