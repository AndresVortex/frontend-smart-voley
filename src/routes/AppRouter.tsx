
import { lazy, Suspense } from 'react';
import {  createBrowserRouter } from 'react-router-dom';

//Layout
import { LayoutContainter } from '../components/Layout/LayoutContainter';
const LayoutContainterLazy = lazy( () => import('../components/Layout/LayoutContainter'));
//Componentes
import { HomeScreen } from '../components/Home/HomeScreen';
import { LoginScreen } from '../components/Login/LoginScreen';
import { RegisterScreen } from '../components/Register/RegisterScreen';
import { NotFound } from '../components/Layout/NotFound';

const HomeScreenLazy = lazy( () => import(/* webpackChunkName: "Home" */ '../components/Home/HomeScreen'));
const LoginScreenLazy = lazy( () => import('../components/Login/LoginScreen'));
const RegisterScreenLazy = lazy( () => import('../components/Register/RegisterScreen'));
const NotFoundLazy = lazy( () => import('../components/Layout/NotFound'));

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <LayoutContainterLazy />,
    errorElement: <NotFoundLazy/>,
    children: [
      {
        index: true,
        element: <HomeScreenLazy />,
      },
      {
        path: '/login',
        element: <LoginScreenLazy />,
      },
      {
        path: '/register',
        element: <RegisterScreenLazy />,
      },
    ]

  },
  
  
]);

