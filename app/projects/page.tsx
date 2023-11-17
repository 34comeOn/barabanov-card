'use client'
import {motion as m} from 'framer-motion'
import ProjectSection from '../components/molecules/projectSection/projectSection'
import ResumeSection from '../components/molecules/resumeSection/resumeSection'
import './style.css'

export default function Projects() {
    return(
        <m.main 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration:0.75}}
        className='h-max w-full mb-auto flex flex-row items-center'>
        <div className='w-full text-center'>
            <h2 className="mt-20 font-semibold projects__caption">Projects</h2>
            <ProjectSection />
        </div>
        </m.main>
    )
}