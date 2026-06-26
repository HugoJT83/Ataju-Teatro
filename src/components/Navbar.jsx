import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex justify-between gap-5 font-roxborough text-ataju-green text-xl'>
                <NavLink to="/About">Sobre Nosotros</NavLink>
                <NavLink to="/Plays">Obras</NavLink>
                <NavLink to="/Contact">Contáctanos</NavLink>
            </nav>
        </>
    )
}

export default Navbar