'use client'
import Image from 'next/image'
import {motion as m} from 'framer-motion'
import Introduce from './components/organizms/introduce/introduce'
import './style.css'

export default function Home() {
  return (
    <m.main 
      initial={{opacity: 0 }}
      animate={{opacity: 1 }}
      transition={{duration:0.85, ease: 'easeOut'}}
      className='h-max max-w-[380px] sm:max-w-[100%] flex flex-col-reverse sm:flex-row items-center'>
      <div className='sm:mt-[50px] m-0 sm:mr-4 sm:mb-auto md:max-w-[280px] lg:max-w-[100%] lg:m-0 mb-6'>
        <Image
          priority={true}
          src="/mikhail.jpg"
          width={450}
          height={450}
          alt="Mikhail photo"
          className='main-page__img relative'
        />
      </div>
      <Introduce />
    </m.main>
  )
}
