'use client'
import {motion as m} from 'framer-motion'
import { Carousel } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const contentStyle: React.CSSProperties = {
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'center',
    background: 'transparent',
    width: '75vw',
    maxWidth: '815px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };

export default function AboutMe() {
    return(
        <m.main 
        initial={{opacity: 0 }}
        animate={{opacity: 1 }}
        transition={{duration:0.75}}
        className='h-max w-full mb-auto flex flex-row items-center'>
        <div className='w-full text-center '>
            <h2 className="md:mt-20 font-semibold text-center tracking-[3px] mr-[630px]  block text-4xl mt-14 lg:font-bold whitespace-nowrap">About Me</h2>
        
            <ul className='m-auto mt-[40px] flex flex-col items-center max-w-[815px]'>
                    <h3 className='font-semibold text-xl md:text-2xl'>My values</h3>
                    <p className='text-center mt-4 md:text-xl' >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups</p>

            </ul>
            <MoreOutlined rotate={90} className='text-[32px] mt-16'/>
            <div className='mt-0 mb-8'>
                <Carousel effect="fade" autoplay={true} autoplaySpeed={4500} speed={400} dots={false}>
                    <div>
                    <p style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.&quot;</p>
                    </div>
                    <div>
                    <h3 style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Next Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.&quot;</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;And next Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.&quot;</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Never Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.&quot;</h3>
                    </div>
                </Carousel>
            </div>
        </div>
        </m.main>
    )
}