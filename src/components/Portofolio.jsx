import React from 'react'
import FilmPages from '../assets/film-landingpage.png'
const Portofolio = () =>
{
    return (
        <div className='max-w-5xl container mx-auto px-5 py-3'>
            <div className='w-full py-3'>
                <h1 className='text-2xl font-semibold text-center md:text-left text-green-600'>Portofolio</h1>
                <div className='border-b-2 w-2/4 md:w-2/12'></div>
                <h3 className='text-xl font-normal py-1'>New Project</h3>
            </div>
            <div className=' md:grid md:grid-cols-2 flex flex-col h-screen gap-3'>
                <div className=''>
                    <figure className="bg-slate-100 shadow-md border hover:cursor-pointer overflow-hidden rounded-xl flex flex-col justify-center items-center">
                        <span className='font-semibold p-1'>Film List</span>
                        <img title='Film List' className="w-fit z-20 hover:z-0 object-cover hover:brightness-50 hover:blur-sm hover:ease-in hover:transition hover:delay-150" src={ FilmPages } alt="" width={ 384 } height={ 512 } />
                        <div className='absolute p-2 rounded-md text-white hover:block'>Show Demo</div>
                        <div className="pt-6 space-y-4 hidden md:block">
                            <blockquote className="text-lg flex flex-col px-3">
                                <p >
                                    “Submission Project for list film dicoding ”
                                </p>
                                <p>JS, CSS, HTML</p>
                            </blockquote>
                        </div>
                    </figure>
                </div>
                <div>
                    <figure className="bg-slate-100 shadow-md border hover:cursor-pointer overflow-hidden rounded-xl flex flex-col justify-center items-center">
                        <span className='font-semibold p-1'>Film List</span>
                        <img title='Film List' className="w-fit z-20 hover:z-0 object-cover hover:brightness-50 hover:blur-sm hover:ease-in hover:transition hover:delay-150" src={ FilmPages } alt="" width={ 384 } height={ 512 } />
                        <div className='absolute z-10 p-2 rounded-md text-white hover:block'>Show Demo</div>
                        <div className="pt-6 space-y-4 hidden md:block">
                            <blockquote className="text-lg flex flex-col px-3">
                                <p >
                                    “Submission Project for list film dicoding ”
                                </p>
                                <p>JS, CSS, HTML</p>
                            </blockquote>
                        </div>
                    </figure>
                </div>
                <div>
                    <figure className="bg-slate-100 shadow-md border hover:cursor-pointer overflow-hidden rounded-xl flex flex-col justify-center items-center">
                        <span className='font-semibold p-1'>Film List</span>
                        <img title='Film List' className="w-fit z-20 hover:z-0 object-cover hover:brightness-50 hover:blur-sm hover:ease-in hover:transition hover:delay-150" src={ FilmPages } alt="" width={ 384 } height={ 512 } />
                        <div className='absolute p-2 rounded-md text-white hover:block'>Show Demo</div>
                        <div className="pt-6 space-y-4 hidden md:block">
                            <blockquote className="text-lg flex flex-col px-3">
                                <p >
                                    “Submission Project for list film dicoding ”
                                </p>
                                <p>JS, CSS, HTML</p>
                            </blockquote>
                        </div>
                    </figure>
                </div>
                <div>
                    <figure className="bg-slate-100 shadow-md border hover:cursor-pointer overflow-hidden rounded-xl flex flex-col justify-center items-center">
                        <span className='font-semibold p-1'>Film List</span>
                        <img title='Film List' className="w-fit z-20 hover:z-0 object-cover hover:brightness-50 hover:blur-sm hover:ease-in hover:transition hover:delay-150" src={ FilmPages } alt="" width={ 384 } height={ 512 } />
                        <div className='absolute p-2 rounded-md text-white hover:block'>Show Demo</div>
                        <div className="pt-6 space-y-4 hidden md:block">
                            <blockquote className="text-lg flex flex-col px-3">
                                <p >
                                    “Submission Project for list film dicoding ”
                                </p>
                                <p>JS, CSS, HTML</p>
                            </blockquote>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

export default Portofolio