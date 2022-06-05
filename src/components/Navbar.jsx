import React from 'react'
import { BsJustify } from "react-icons/bs";
const Navbar = () =>
{
    return (
        <div className='bg-white py-4 shadow-sm sticky top-0 z-50'>
            <div className='max-w-5xl mx-auto px-4 container'>
                <div className="flex flex-row justify-between items-center flex-wrap">
                    <a href="/" className='text-green-400 font-normal text-xl'>OOTS 2022</a>
                    <button onClick={ () => document.getElementById( 'navbar' ).classList.toggle( 'hidden' ) } className='focus:ring-1 p-2 ring-green-500 md:hidden rounded-md'>
                        <BsJustify />
                    </button>
                    <div id='navbar' className='flex gap-4 hidden text-base flex-col md:block md:w-auto w-full md:flex-row'>
                        <a href="/" className='text-gray-700 hover:text-gray-500 mx-2'>Profile</a>
                        <a href="/" className='text-gray-700 hover:text-gray-500 mx-2'>Project</a>
                        <a href="/" className='text-gray-700 hover:text-gray-500 mx-2'>Blog</a>
                        <a href="/" className='text-gray-700 hover:text-gray-500 mx-2'>Contact</a>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Navbar