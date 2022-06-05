import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
const AboutMe = () =>
{
    return (
        <div className='max-w-5xl mx-auto px-5 py-3'>
            <div className='flex flex-col container items-center md:items-start'>
                <h3 className='text-2xl text-green-600 font-semibold'>Tentang Saya</h3>
                <div className='border-b-2 w-2/4 md:w-2/12'></div>
            </div>
            <div className="container w-full flex flex-col md:flex-row justify-between gap-5">
                <div className='flex flex-col w-full justify-start md:justify-start items-start'>
                    <h1 className='text-2xl font-normal '>Kiat Menjadi Fullstack Developer</h1>
                    <p className='text-lg text-left font-light leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate, corporis saepe illo numquam recusandae maiores quia repudiandae sapiente nam, nihil quo tempore minima neque, reprehenderit esse eos quos iure.</p>
                </div>
                <div className='flex flex-col w-full justify-start md:justify-start items-start'>
                    <h1 className='text-2xl font-normal'>My Social Media, Lets be friend</h1>
                    <p className='text-lg text-left font-light leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptate, corporis saepe illo numquam recusandae maiores quia repudiandae sapiente nam, nihil quo tempore minima neque, reprehenderit esse eos quos iure.</p>
                    <div className='flex gap-3'>
                        <FaFacebook className='bg-white text-3xl text-blue-700' />
                        <FaGithub className='bg-white text-3xl text-black' />
                        <FaLinkedin className='bg-white text-3xl text-blue-600' />
                        <FaInstagramSquare className='bg-white text-3xl text-red-600' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe