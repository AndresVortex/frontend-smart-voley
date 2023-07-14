import { useState } from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    const handleClickOpen = () => {
        setIsOpen(!isOpen)

    }

    
    return (
        <nav className="flex items-center justify-between w-full flex-wrap p-6 bg-secondaryColor dark:bg-blue-950 dark:text-white ">
            <div className="flex items-center flex-shrink-0 text-black dark:text-white mr-6 lg:mr-96">
                
                <h2>Smart Volley</h2>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={handleClickOpen}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-black-400"
                >
                    <svg
                        className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}
            >
                <div className="text-sm lg:flex-grow">
                    <NavLink to='/' className={({isActive})=> isActive ? 'linkActivate' : 'linkDisable'}>
                        Inicio
                    </NavLink>
                    <NavLink to='/contact' className={({isActive})=> isActive ? 'linkActivate' : 'linkDisable'}>
                        Contacto
                    </NavLink>
                    <NavLink to='/join' className={({isActive})=> isActive ? 'linkActivate' : 'linkDisable'}>
                        Unete a nosotros
                    </NavLink>
                   
                </div>
                <div>
                    {/* <button className="inline-flex items-center bg-amber-500 border-0 py-2 px-4 text-white">
                        Click Me
                    </button> */}
                     <NavLink to='/register' className={({isActive})=> isActive ? 'linkActivate' : 'linkDisable'}>
                        Registro
                    </NavLink>
                    <NavLink to='/login' className={({isActive})=> isActive ? 'linkActivate' : 'linkDisable'}>
                        Inicio de sesión
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}
