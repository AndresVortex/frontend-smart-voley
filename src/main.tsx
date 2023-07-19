import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routerApp } from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './store'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>} >

        <RouterProvider router={routerApp} />
      </Suspense>
    </Provider>
  </React.StrictMode>,
)
