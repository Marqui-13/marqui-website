import React from 'react'
import { FaGithub, FaLinkedinIn, FaSeedling, FaCodepen } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600'></p>
                <h1>Hi, I'm <span className='text-[#15a8fd]'>Marqui</span></h1>
                <p className='py-4 text-gray-400 max-w-[70%] m-auto'>I'm a developer and a student focusing on Web3, Blockchain, Quantum, Creative Coding, & Responsive Full-Stack Development.</p>
                <div className='flex items-center justify-between max-w-[330] m-auto py-4'>
                    <a 
                        href='https://www.linkedin.com/in/marqui-orr-793115219'
                        target='_blank'
                        rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaLinkedinIn />
                    </div>
                    </a>

                    <a 
                        href='https://github.com/Marqui-13'
                        target='_blank'
                        rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaGithub />
                    </div>
                    </a>
  
                    <a 
                        href='https://app.radicle.xyz'
                        target='_blank'
                        rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaSeedling />
                    </div>
                    </a>

                    <a 
                        href='https://codepen.io/marqui-13'
                        target='_blank'
                        rel='noreferrer'
                    >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                        <FaCodepen />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main
