import React from 'react';

const Header: React.FC = () => {
    return (
    <header className='bg-gray-800 text-white p-4 fixed w-full top-0'>
        <div className='container mx-auto flex justify-between items-center'>
            <h1 className='text-xl font-bold'>My Portfolio</h1>
            <nav>
                <ul className='flex space-x-4'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}

export default Header;