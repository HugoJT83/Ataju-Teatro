import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_ataju_vectorizado.svg'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            {/* <div className='w-full min-h-20 p-10 flex justify-between border-b-2 border-royal-gold'>
                <Link to={'/'} className='flex flex-col items-center gap-4'>
                    <img src={logo} className='h-30 w-30' />

                </Link>

                <div className='my-auto'>
                    <Navbar></Navbar>
                </div>
            </div> */}
            <header className="text-ataju-green">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center">
                    <nav className='flex flex-wrap items-center justify-center'>
                        <a className="hover:text-gray-900 md:mx-7 mx-2 md:text-xl font-title hover:cursor-pointer pr-5 border-r">Sobre Nosotros</a>
                        <a className="flex order-first sm:order-0 w-full md:w-fit font-medium justify-center items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 hover:cursor-pointer">
                            <img src={logo} className='w-25 h-25 md:w-30 md:h-30' />
                        </a>
                        <a className="hover:text-gray-900 md:mx-7 md:text-xl mx-2 font-title hover:cursor-pointer md:pl-5 md:border-l">Nuestras Obras</a>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header