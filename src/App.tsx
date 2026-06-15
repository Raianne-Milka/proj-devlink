import { createBrowserRouter } from 'react-router-dom'
import { Login } from './pages/login'
import { Networks } from './pages/networks' 
import { Home } from './pages/home'
import { Admin } from './pages/admin'
import { ErrorPage } from './pages/error'

import { Private } from './routes/Private'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin/social',
    element: <Private><Networks/></Private>
  },
  {
    path: '/admin',
    element: <Private><Admin/></Private>
  },
  {
    path: "*",
    element: <ErrorPage/>
  }
])

export {router};