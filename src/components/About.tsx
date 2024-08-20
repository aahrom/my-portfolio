import React from 'react'
import meImage from './images/me.jpg'

const About: React.FC = () => {
    return(
        <section id="about" className='min-h-screen font-mono pt-24 p-8 bg-mindshaft text-white flex items-center justify-center'>
            <div className='container mx-auto'>
                <h2 className='text-3xl font-bold mb-6 text-center text-brass'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center justify-center'>
                    <img 
                    src={meImage}
                    alt="A description of yourself"
                    className='rounded-full w-48 h-48 mb-6 md:mb-0 md:mr-8'/>
                    <div>
                        <p className='text-lg text-jordyblue mb-4'>Hi! I am Arreya, a web developer dedicated to solving problems through the art of programming.  </p>
                        <p className='text-lg  text-jordyblue mb-4'>As a developer, I see my work as a direct extension of who I am. Each project I undertake is an opportunity to apply my problem-solving skills and creative mindset. I'm committed to crafting meaningful, purpose-driven solutions that not only meet technical requirements but also address real-world needs.</p>

                        <p className='text-lg  text-jordyblue'>Outside of work, you can find me cooking up a new recipe for loved ones, learning to sail, walking 10,000 steps a day, or at the cinema every weekend watching a new movie.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About