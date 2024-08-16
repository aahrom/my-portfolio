import React from "react";

const skills = [
    'JavaScript',
    'React',
    'PHP',
    'TypeScript',
    'HTML',
    'CSS',
    'MySQL'
];

const Skills: React.FC = () => {
    return(
        <section id="skills" className="min-h-screen p-8 pt-24 bg-gray-100 text-gray-900">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
                <ul className="flex flex-wrap justify-center">
                    {skills.map((skill, index) => (
                        <li key={index} className="bg-gray-800 text-white px-4 py-2 m-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500">{skill}</li>
                    ))}                    
                </ul>
            </div>
        </section>
    )
}

export default Skills