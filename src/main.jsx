import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements
} from "react-router-dom"

const router = createBrowserRouter( createRoutesFromElements(
  <Route path="/" element={ <App/> }>
    {/* <Route path="o2" element={ <O2Container />} /> */}
    {/* <Route path="night-flight" element={ <NightFlightContainer />} /> */}
    {/* <Route path="znaju" element={ <ZnajuContainer />} /> */}
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
