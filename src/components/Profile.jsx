import React from 'react'
import PhotoProfile from '../assets/pp.jpg'
const Profile = () =>
{
    return (
        <div className='max-w-6xl mx-auto px-5 py-3'>
            <div className="container w-full items-center md:justify-between justify-center h-screen flex flex-col-reverse md:flex-row">
                <div className='flex flex-col mt-3 md:mt-0 text-center md:text-left' >
                    <h4 className='text-xl font-medium text-green-600'>Hi Everyone, My Name is</h4>
                    <h5 className='text-5xl font-semibold'>Ilham Prasetya</h5>
                    <h4 className='text-lg font-normal '>Iam a Web Developer</h4>
                    <h4 className='text-base font-normal '>Iam Currently use Javascript</h4>
                    <div>
                        <button className='bg-green-600 w-44 mt-4 rounded-full text-white py-2 px-0 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-green-100 '>Download CV</button>
                    </div>
                </div>
                <div className='flex w-2/3 md:w-2/4 items-center justify-center'>
                    <div className=' rounded-3xl -z-20 bg-gray-700 w-full sm:w-2/3'>
                        <img src={ PhotoProfile } alt='profile' className='rounded-3xl overflow-hidden relative sm:bottom-14 sm:right-14 object-cover -z-10' />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Profile