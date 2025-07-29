import React from 'react'
import { Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className='flex flex-col sm:flex-row gap-2 border-t border-slate-700 bg-black py-6 px-10 sm:px-40 justify-between items-center'>
            <div className='flex flex-col gap-2'>
                <div className='text-green-600 text-2xl font-semibold hover:text-green-500 transition-colors duration-300'>
                    <a href="/">monsurcodes</a>
                </div>
                <div className='text-slate-300'>Developing chad projects since 2021</div>
            </div>

            <div className='flex flex-col sm:flex-row items-center gap-4 hover:text-white transition-colors duration-300'>
                <div>
                    <p className='text-slate-400 text-sm'>© 2025 Monsur Codes. All rights reserved.</p>
                </div>
                <a
                    href="https://github.com/monsurcodes/monsur.is-a.dev"
                    target='_blank'
                    rel='noopener noreferrer'
                    className='group'
                >
                    <div className='flex gap-2 bg-slate-900 border border-slate-700 px-4 py-2 text-slate-300 transition-colors duration-300 group-hover:text-white'>
                        <p>Source Code</p>
                        <Github />
                    </div>
                </a>
            </div>
        </footer>
    )
}

export default Footer
