'use client'
import {motion as m} from 'framer-motion'
import ProjectSection from '../components/molecules/projectSection/projectSection'

export default function Projects() {
    return(
        <m.main 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration:0.75}}
        className='h-max w-full mb-auto flex flex-row items-center'>
        <div className='w-full text-center'>
            <h2 className="md:mt-20 font-semibold text-center tracking-[3px] mr-[650px] block text-4xl mt-14 lg:font-bold ">Projects</h2>
            <ProjectSection />
        </div>
        </m.main>
    )
}