import React from "react";
import Image from 'next/image'

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 mb-80 mt-0">
      <div className="max-width[1240px] mx-auto">
        <p className="text-xl text-center tracking-widest uppercase text-[#15a8fd]">
          Skills
        </p>
        <h2 className="py-4 text-center ml-12">What I Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt={"HTML-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/html.png"
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
                <Image
                  alt={"CSS-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/css.png"
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
                <Image
                  alt={"Tailwind-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/tailwind.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt={"JavaScript-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/javascript.png"
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
                <Image
                  alt={"React-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/react.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt={"Next-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/nextjs.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt={"Node-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/node.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  alt={"Firebase-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/firebase.png"
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
                <Image
                  alt={"Solidity-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/solidity.png"
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
                <Image
                  alt={"Harhat-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/hardhat.png"
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
                <Image
                  alt={"OpenZepplin-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/openzepplin.png"
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
                <Image
                  alt={"IPFS-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/ipfs.png"
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
                <Image
                  alt={"Fleek-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/fleek.png.png"
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
                <Image
                  alt={"Netlify-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/netlify.png"
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
                <Image
                  alt={"Github-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/github.png"
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
                <Image
                  alt={"Moralis-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/moralis.png"
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
                <Image
                  alt={"Alchemy-Img"}
                  height={64}
                  width={64}
                  src="../public/assets/skills/alchemy.png"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Alchemy</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;

