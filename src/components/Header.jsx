import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logo_ataju_vectorizado.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <header className="text-ataju-green">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">

                    {/* Diseño para Desktop */}
                    <nav className='hidden md:flex flex-wrap items-center justify-center'>
                        <NavLink to={"/nosotros"} className="hover:text-gray-900 md:text-xl px-3 font-title hover:cursor-pointer border-r">
                            Sobre Nosotros
                        </NavLink>

                        <NavLink to={"/talleres"} className="hover:text-gray-900 md:text-xl px-3 font-title hover:cursor-pointer border-r">
                            Talleres
                        </NavLink>
                        <NavLink to={"/"} className="flex order-first sm:order-0 w-full px-7 md:w-fit font-medium justify-center items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 hover:cursor-pointer">
                            <img src={logo} className='w-25 h-25 md:w-30 md:h-30' />
                        </NavLink>
                        <NavLink to={"/obras"} className="hover:text-gray-900 md:text-xl px-3 font-title hover:cursor-pointer border-l">Nuestras Obras</NavLink>
                        <NavLink to={"/contacto"} className="hover:text-gray-900 md:text-xl px-3 font-title hover:cursor-pointer border-l">Contacto</NavLink>
                    </nav>

                    {/* Diseño para movil */}
                    <div className='md:hidden w-full flex justify-between'>
                        <NavLink to={"/"} className="hover:cursor-pointer">
                            <img src={logo} className='w-20 h-20 md:w-30 md:h-30' />
                        </NavLink>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='px-4'
                        >
                            {isOpen ?
                                <FontAwesomeIcon icon="fa-solid fa-angle-down" className="text-white bg-dark-ataju-green p-2 text-3xl rounded" />
                                :
                                <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white bg-ataju-green p-2 text-3xl rounded" />
                            }
                        </button>
                    </div>

                    {isOpen && (
                        <nav>

                        </nav>
                    )}
                </div>
            </header>
        </>
    )
}

export default Header