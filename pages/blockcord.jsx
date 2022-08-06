import Image from 'next/image';
import React from 'react';
import fillerImg from './../public/assets/projects/filler.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const blockcord = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={fillerImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Blockcord</h2>
          <h3>Next JS / Sanity / Gun JS </h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
             Blockcord is similar to Discord in regard to the UI/UX but uses Gun.js as a decentralized database node rather than Apache Cassandra's NoSQL database. Blockcord's features include: a stunning design, connection to the blockchain, metamask pairing, interaction with smart contracts, user account login/registration/authentication, sending/receiving messages using the blockchain and more. BlockCord is built with Next and is hosted on Netlify with blazing-fast load times.
          </p>
          <a
            href='https://github.com/Marqui-13'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://ndy.netlify.app'
            // target='_blank'
            // rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tech</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Next JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Tailwind CSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Sanity
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Gun JS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Netlify
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default blockcord;
