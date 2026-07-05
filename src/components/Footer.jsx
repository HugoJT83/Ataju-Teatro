import React from 'react'
import logo from '../assets/logo_ataju_vectorizado.svg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'

library.add(fas, far, fab)

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer className="text-gray-600 w-full">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <NavLink to={"/"} className="flex items-center md:justify-start justify-center text-gray-900 hover:cursor-pointer">
                        <img src={logo} alt="" className='w-25 h-25' />
                    </NavLink>
                    <p className="text-xl text-gray-500 font-title sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © {currentYear} ATAJÚ Teatro
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start text-4xl">
                        <a href='https://www.instagram.com/ataju_teatro' className="text-ataju-green hover:cursor-pointer">
                            <FontAwesomeIcon icon="fa-brands fa-instagram"></FontAwesomeIcon>
                        </a>
                        <a href='https://x.com/ataju_teatro' className="ml-3 text-ataju-green hover:cursor-pointer">
                            <FontAwesomeIcon icon="fa-brands fa-x-twitter"></FontAwesomeIcon>
                        </a>
                        <a href='https://youtube.com/@atajuteatro' className="ml-3 text-ataju-green hover:cursor-pointer">
                            <FontAwesomeIcon icon="fa-brands fa-youtube"></FontAwesomeIcon>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    )
}

export default Footer