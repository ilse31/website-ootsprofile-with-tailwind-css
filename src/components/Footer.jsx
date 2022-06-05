import React from 'react'

const Footer = () =>
{
    return (
        <div className='bg-indigo-900 text-white'>
            <div className='max-w-5xl mx-auto px-5 py-3 h-72'>
                <div className="grid grid-cols-3 justify-between mt-5 gap-5">
                    <div>
                        <h2 className='text-xl font-semibold'>OOTS2022</h2>
                        <p>Hubungi Kami</p>
                        <p>oots2022@doscom.org</p>
                        <p>Jl. Imam Bonjol No.207, Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50131</p>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Feeds Category</h2>
                    </div>
                    <div>
                        <h2 className='text-xl font-semibold'>Usefull Links</h2>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer