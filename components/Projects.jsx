import React from 'react'
import ProjectItem from './ProjectItem'
import propertyImg from '../public/assets/projects/property.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import cryptoImg from '../public/assets/projects/crypto.jpg'
import defiImg from '../public/assets/projects/defi.png'
import coinsearchImg from '../public/assets/projects/coinsearch.png'



const Projects = () => {
  return (
    <div id='projects' className='ml-0 w-full mt-20'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='text-xl text-center tracking-widest uppercase text-[#15a8fd]'>
                Projects
            </p>
            <h2 className='py-4 text-center'>What I've Built</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                {/* <ProjectItem 
                title='Homez' 
                backgroundImg={propertyImg} 
                projectUrl='/property' 
                /> */}
                {/* <ProjectItem 
                title='Webflix' 
                backgroundImg={netflixImg} 
                projectUrl='/netflix' 
                /> */}
                {/* <ProjectItem 
                title='Ness' 
                backgroundImg={twitchImg} 
                projectUrl='/twitch' 
                /> */}
                {/* <ProjectItem 
                title='Blockbase' 
                backgroundImg={cryptoImg} 
                projectUrl='/crypto' 
                /> */}
                <ProjectItem 
                title='DeFi' 
                backgroundImg={defiImg} 
                projectUrl='/defi' 
                />
                <ProjectItem 
                title='CoinSearch' 
                backgroundImg={coinsearchImg} 
                projectUrl='/coinsearch' 
                />
            </div>
        </div>
    </div>
  )
}

export default Projects