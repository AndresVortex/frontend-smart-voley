import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
    return (
        <nav className='bg-white border-gray-200 dark:bg-gray-900 flex justify-between' >
            <div className='max-w-screen-xl flex flex-wrap items-center justify-between p-4' >
                <NavLink className='text-center text-white' to={'/'}>
                    Smart Volley
                </NavLink>
                <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
            </div>
            <div className='hidden md:block xs:hidden w-full md:blck md:w-auto p-4' id='navbar-default' >
                <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                        <NavLink to='/login' className={({ isActive }) => isActive ? 'block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-sky-500 md:p-0 dark:text-white md:dark:text-sky-400' : 'block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'}> Inicio sesión </NavLink>
                    </li>
                    <li>
                        <NavLink to='/register' className={({ isActive }) => isActive ? 'block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-sky-500 md:p-0 dark:text-white md:dark:text-sky-400' : 'block py-2 pl-3 pr-4 text-white  rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500'} > Registro </NavLink>
                    </li>

                </ul>
            </div>
        </nav>
    )
}
