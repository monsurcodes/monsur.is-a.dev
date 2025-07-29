import React from 'react'
import InfoCard from './home_components/Info';
import Projects from './home_components/Projects';
import Contact from './home_components/Contact';
import Skills from './home_components/Skills';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <InfoCard />
            <Projects />
            <Contact />
            <Skills />
        </div>
    )
}

export default Home
