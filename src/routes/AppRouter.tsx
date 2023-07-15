
import {  createBrowserRouter } from 'react-router-dom';
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { RegisterScreen } from '../components/Register/RegisterScreen';

import { NotFound } from '../components/Layout/NotFound';
import { LayoutContainter } from '../components/Layout/LayoutContainter';

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <LayoutContainter />,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: '/login',
        element: <LoginScreen />,
      },
      {
        path: '/register',
        element: <RegisterScreen />,
      },
    ]

  },
  
  
]);

