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
      className='h-max flex flex-col-reverse sm:flex-row items-center'>
      <div className='m-4 sm:m-0'>
        <Image
          priority={true}
          src="/mikhail.jpg"
          width={500}
          height={500}
          alt="Mikhail photo"
          className='main-page__img relative'
        />
      </div>
      <Introduce />
    </m.main>
  )
}
