'use client'
import {motion as m} from 'framer-motion'

export default function ResumePage() {
    return(
            <m.main 
            initial={{opacity: 0 }}
            animate={{opacity: 1 }}
            transition={{duration:0.15}}
            className='h-max flex flex-row items-center'>
            <div >
                <h1 className="text-8xl mt-10 font-bold greeting">Hello</h1>

                <h1 className="text-8xl mt-10 font-bold greeting">Hello</h1>
                <h1 className="text-8xl mt-10 font-bold greeting">Hello</h1>
                <h1 className="text-8xl mt-10 font-bold greeting">Hello</h1>
            </div>
            </m.main>
    )
}