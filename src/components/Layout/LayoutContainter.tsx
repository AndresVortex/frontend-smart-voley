import React from 'react'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { Outlet } from 'react-router-dom'

export const LayoutContainter = () => {
  return (
    <>
    <Navbar/>
    <main>
    <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default LayoutContainter