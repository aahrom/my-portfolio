import React from 'react'
import {ReactTyped} from 'react-typed'


const Home: React.FC = () => {
    return(
        <section id="home" className='min-h-screen flex items-center bg-snow justify-center text-green-500 font-mono'>
            <div className='w-full max-w-2xl mx-auto'>
                {/*Terminal Header*/}
                <div className='bg-gray-800 p-3 rounded-t-lg flex items-center'>
                    <div className='flex space-x-2'>
                        <span className='bg-red-500 w-3 h-3 rounded-full'></span>
                        <span className='bg-yellow-500 w-3 h-3 rounded-full'></span>
                        <span className='bg-green-500 w-3 h-3 rounded-full'></span>
                    </div>
                    <div className='flex-1 text-center text-gray-400'>
                        terminal - [ahromarreya@portfolio]
                    </div>
                </div>

                {/*Terminal Body*/}
                <div className='bg-black p-10 rounded-b-lg shadow-lg space-y-2'>
                    <ReactTyped 
                    strings={[
                        "Welcome to my portfolio. Feel free to explore.",
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop></ReactTyped>
                    <ul className='flex flex-col space-y-2 underline'>
                    <a href='#about' className='hover:text-white'>About Me</a>
                    <a href="#projects" className='hover:text-white'>Projects</a>
                    <a href="#skills" className='hover:text-white'>Skills</a>
                    <a href="#contact" className='hover:text-white'>Contact</a>
                    </ul>

                </div>
            </div>
        </section>
    )
}

export default Home