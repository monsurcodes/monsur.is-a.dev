import React from 'react'
import { MapPin, Mail, Link } from 'lucide-react';

const InfoCard = () => {
    return (
        <div className="my-18 px-4 sm:px-8 md:px-24 lg:px-32 xl:px-44">
            <div
                id="about"
                className="flex flex-col md:flex-row items-center gap-8 bg-gradient-to-r from-slate-800 to-slate-900 py-8 px-4 sm:py-10 sm:px-8 md:px-12 lg:px-16 border border-slate-500"
            >
                <div className="flex flex-col gap-2 flex-1 w-full">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl bg-gradient-to-r from-green-400 to-green-800 bg-clip-text text-transparent animate-pulse font-bold text-center md:text-left">
                        Monsur Mazumder
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-center md:text-left">Hobby Developer</p>
                    <p className="text-slate-400 text-center md:text-left">
                        19 years-old programmer from India 🇮🇳, loves cats.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 w-full items-center sm:items-stretch sm:justify-start">
                        <div className="flex gap-2 items-center bg-slate-900 border border-slate-700 px-4 py-2 text-slate-300">
                            <MapPin className="w-5 h-5 text-slate-400" />
                            <p className="text-slate-400">Silchar, India</p>
                        </div>
                        <div className="flex gap-2 items-center bg-slate-900 border border-slate-700 px-4 py-2 text-slate-300 group hover:text-white cursor-pointer">
                            <Mail className="w-5 h-5 text-slate-400 group-hover:text-white" />
                            <p className="group-hover:text-white">
                                <Link href="mailto:monsurcodes@gmail.com">monsurcodes@gmail.com</Link>
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex-shrink-0 mb-4 md:mb-0">
                    <img
                        src="/pfp.jpg"
                        alt="My pfp"
                        className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-2 border-slate-700"
                    />
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
