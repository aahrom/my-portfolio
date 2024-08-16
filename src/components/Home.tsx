import React from 'react'


const Home: React.FC = () => {
    return(
        <section id="home" className='min-h-screen flex items-center justify-center bg-gray-900 text-white'>
            <div className='text-center'>
                <h2 className='text-4xl font-bold mb-4'>Hi, I'm Arreya</h2>
                <p className='text-xl mb-8'>A Passionate Web Developer</p>
                <a href="#about" className='px-6 py-3 bg-blue-500 text-white'>Learn More About Me</a>
            </div>
        </section>
    )
}

export default Home