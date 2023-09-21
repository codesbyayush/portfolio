import Image from 'next/image';
import React from 'react'

type Props = {
    imgSrc: string;
    title: string;
    badges: Array<string>;
    shortDesc: string
}

const Project = ({title, imgSrc, badges, shortDesc}: Props) => {
  return (
    <>
    <article className='w-full md:h-full grid md:flex bg-black bg-opacity-10 hover:bg-opacity-40 mt-6 rounded-xl overflow-hidden p-4'>
      <Image
        src={imgSrc}
        height={500}
        width={900}
        alt='demoImage'
        className='w-full md:w-64 xl:w-72 md:h-full bg-skin-tech-used mb-4 md:mr-8 md:my-auto'
      />
      <div>
        <h3 className='text-lg uppercase'>{title}</h3>
        
        <p className='text-sm'>
          {shortDesc}
        </p>
        <div className='flex flex-wrap gap-4 py-4'>
        {badges.map(badge => 
        <button className='bg-skin-tech-used rounded-md px-2 py-1 text-skin-tech-used text-base bg-opacity-100 hover:bg-opacity-80' key={badge}>{badge}</button>
        )}
        </div>
      </div>
    </article>
    <div className='h-1 rounded-2xl w-full bg-skin-hover-sidebar-button'/>
    </>
  )
}

export default Project