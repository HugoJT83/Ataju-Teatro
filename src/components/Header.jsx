import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_ataju.svg'
import Navbar from './Navbar'
const Header = () => {
    return (
        <>
            <div className='w-full min-h-20 p-10 flex justify-between border-b-2 border-royal-gold'>
                <Link to={'/'} className='flex flex-col items-center gap-4'>
                    <img src={logo} className='h-30 w-30' />

                </Link>

                <div className='my-auto'>
                    <Navbar></Navbar>
                </div>
            </div>
        </>
    )
}

export default Header