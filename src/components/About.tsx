import React from 'react'
import meImage from './images/me.jpg'

const About: React.FC = () => {
    return(
        <section id="about" className='min-h-screen pt-24 p-8 bg-gray-100 text-gray-900 flex items-center justify-center'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold mb-6 text-center'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <img 
                    src={meImage}
                    alt="A description of yourself"
                    className='rounded-full w-48 h-48 mb-6 md:mb-0 md:mr-8'/>
                    <div>
                        <p className='text-lg mb-4'>Hi, I'm Arreya, a passionate web developer with expertise in fullstack development</p>
                        <p className='text-lg'>I love learning new technologies and applying them to solve real-world problems</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About