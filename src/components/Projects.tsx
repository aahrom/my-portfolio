import React from 'react'
import placeholderImage from './images/image.png'

const projects = [
    {
        title: 'Project One',
        description: 'A brief description of project',
        image: {placeholderImage},
        link: 'https://www.google.com/'
    },
    {
        title: 'Project Two',
        description: 'A brief description of project',
        image: {placeholderImage},
        link: 'https://www.google.com/'
    },
    {
        title: 'Project Three',
        description: 'A brief description of project',
        image: {placeholderImage},
        link: 'https://www.google.com/'
    },
    {
        title: 'Project Four',
        description: 'A brief description of project',
        image: {placeholderImage},
        link: 'https://www.google.com/'
    }
]

const Projects: React.FC =()=> {
    return(
    <section id="projects" className='min-h-screen pt-24 p-8 bg-gray-200 text-gray-900'>
        <div className='container mx-auto'>
            <h2 className='text-3xl font-bold mb-6 text-center'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {projects.map((project, index) => (
                    <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                        <img
                            src={placeholderImage}
                            alt={`${project.title} screenshot`}
                            className="mb-4 rounded">
                        </img>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer
                        "
                        className='text-blue-500 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500'>View Project</a>
                    </div>
                ))}
            </div>
        </div>
    </section>

    )
}


export default Projects