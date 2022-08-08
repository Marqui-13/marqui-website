import React from "react";
import SkillItem from './SkillItem'
import htmlImg from '../public/assets/skills/html.png'
import cssImg from '../public/assets/skills/css.png'
import tailwindImg from '../public/assets/skills/tailwind.png'
import jsImg from '../public/assets/skills/javascript.png'
import threeImg from '../public/assets/skills/three.png'
import greensockImg from '../public/assets/skills/greensock.png'
import blenderImg from '../public/assets/skills/blender.png'
import reactImg from '../public/assets/skills/react.png'
import nextImg from '../public/assets/skills/nextjs.png'
import viteImg from '../public/assets/skills/vite.png'
import svelteImg from '../public/assets/skills/svelte.png'
import nodeImg from '../public/assets/skills/node.png'
import firebaseImg from '../public/assets/skills/firebase.png'
import solidityImg from '../public/assets/skills/solidity.png'
import hardhatImg from '../public/assets/skills/hardhat.png'
import ozImg from '../public/assets/skills/openzepplin.png'
import alchemyImg from '../public/assets/skills/alchemy.png'
import moralisImg from '../public/assets/skills/moralis.png'
import ipfsImg from '../public/assets/skills/ipfs.png'
import fleekImg from '../public/assets/skills/fleek.png.png'
import netlifyImg from '../public/assets/skills/netlify.png'
import githubImg from '../public/assets/skills/github.png'
import tensorflowImg from '../public/assets/skills/tensorflow.PNG'
import remixImg from '../public/assets/skills/remix.png'




const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mb-80 mt-30">
      <div className="max-width[1240px] mx-auto">
        <p className="text-xl text-center tracking-widest uppercase text-[#15a8fd]">
          Skills
        </p>
        <h2 className="py-4 text-center ml-12">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={htmlImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={cssImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={tailwindImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={jsImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={threeImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Three JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={greensockImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GreenSock</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={blenderImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Blender</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={reactImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={nextImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={viteImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vite</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={svelteImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Svelte</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={nodeImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node JS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={firebaseImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Firebase</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={solidityImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Solidity</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={hardhatImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Hardhat</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={ozImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>OpenZepplin</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={alchemyImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Alchemy</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={moralisImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Moralis</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={ipfsImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>IPFS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={fleekImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Fleek</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={netlifyImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Netlify</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={githubImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={tensorflowImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TensorFlow</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <SkillItem
                    img={remixImg} 
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Remix</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
