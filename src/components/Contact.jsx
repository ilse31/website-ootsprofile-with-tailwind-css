import React from 'react'

const Contact = () =>
{
    return (
        <div className='max-w-5xl mx-auto px-5 mt-28 md:mt-0 mb-20'>
            <div className='border p-3 rounded-lg shadow-md'>
                <h2 className='text-2xl font-semibold text-green-600'>Contact</h2>
                <p>Whats your story ? Get in touch. Always available for freelancing if the right project comes along.me</p>
                <form className="container">
                    <div className='py-2 w-full flex flex-col'>
                        <label htmlFor="name" className='block py-2'>Name</label>
                        <input type="text" className='placeholder:italic px-3 py-1 focus:outline-green-600 focus:ring-inset focus:outline-none  focus:ring-offset-2 focus:ring-offset-green-200 border border-green-600 rounded-md' placeholder='Input Your Name' />
                    </div>
                    <div className='py-2 w-full flex flex-col'>
                        <label htmlFor="name" className='block py-2'>Email</label>
                        <input type="email" className='px-3 placeholder:italic py-1 focus:outline-green-600 focus:ring-inset focus:outline-none  focus:ring-offset-2 focus:ring-offset-green-200 border border-green-600 rounded-md' placeholder='Input Your Email' />
                    </div>
                    <div className='py-2 w-full flex flex-col'>
                        <label htmlFor="name" className='block py-2'>Email</label>
                        <textarea className='px-3 placeholder:italic py-1 focus:outline-green-600 focus:ring-inset focus:outline-none  focus:ring-offset-2 focus:ring-offset-green-200 border border-green-600 rounded-md' placeholder='Input Your Text' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact