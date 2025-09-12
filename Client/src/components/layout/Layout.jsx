import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = ({setIsCartOpen}) => {
    return (
        <div className='w-full min-h-screen flex flex-col'>
            <Navbar onCartclick={setIsCartOpen}/>
            <main className='flex-1 flex justify-center items-center'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout