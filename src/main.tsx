import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import App from './App'
import BasicAlerts from './alert/Alert-components'
import BasicAccordion from './expand/ExpandPanel'

const router = createBrowserRouter([
  {
    path: "/accrodian",
    element: <BasicAccordion></BasicAccordion>,
  },
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/alert",
    element: <BasicAlerts></BasicAlerts>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode> 
    <RouterProvider router={router} />
  </React.StrictMode>,
)
