'use client'
import {motion as m} from 'framer-motion'
import { Carousel } from 'antd';
import './style.css'

const contentStyle: React.CSSProperties = {
    height: '260px',
    color: 'black',
    fontSize: '32px',
    fontStyle: 'italic',
    lineHeight: '60px',
    textAlign: 'center',
    background: 'transparent',
    width: '500px',
    margin: 'auto',
  };

export default function AboutMe() {
    return(
        <m.main 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration:0.75}}
        className='h-max w-full mb-auto flex flex-row items-center'>
        <div className='w-full text-center mr-auto ml-auto'>
            <h2 className="mt-20 font-semibold about-me__caption">About Me</h2>
            <ul>
                <li>
                    <h3>Values</h3>
                    <p>What is important for me</p>
                </li>
                <li>
                    <h3>Soft skills</h3>
                    <p>independence</p>
                </li>

            </ul>
            <div className='mt-20'>
            <Carousel effect="fade" autoplay={true} autoplaySpeed={6500} speed={400} dots={false}>
                <div>
                <p style={contentStyle}>&quot;Best quads Best quads Best quads Best quads Best quads Best quads Best quads Best quads&quot;</p>
                </div>
                <div>
                <h3 style={contentStyle}>Next best quads</h3>
                </div>
                <div>
                <h3 style={contentStyle}>And next best quads And next best quads And next best quads And next best quads And next best quads And next best quads</h3>
                </div>
                <div>
                <h3 style={contentStyle}>Never stop</h3>
                </div>
            </Carousel>
            </div>
        </div>
        </m.main>
    )
}