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
                    <p className='text-center mt-4 md:text-xl' >I think that living for good means making our world a bit better. Of course, being part of a team makes changing it easier and more enjoyable. Success is built on the personal qualities of each teammate as small bricks. Relationships within a team determine a lot, whether the group wins or not.</p>

            </ul>
            <MoreOutlined rotate={90} className='text-[32px] mt-16'/>
            <div className='mt-0 mb-8'>
                <Carousel effect="fade" autoplay={true} autoplaySpeed={4700} speed={400} dots={false}>
                    <div>
                    <p style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;If code appears to be identical but develops in different ways, at different speeds, and for different reasons - it is not true duplication.&quot;</p>
                    </div>
                    <div>
                    <p style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Implementation of business rules should be the most independent code in the system ready for reuse&quot;</p>
                    </div>
                    <div>
                    <p style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Develop a strategy that does not allow the framework to influence the architecture&quot;</p>
                    </div>
                    <div>
                    <h3 style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Program at the interface level, not the implementation level. The code should depend on abstractions, not specific classes.&quot;</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;Do not comment bad code - rewrite it&quot;</h3>
                    </div>
                    <div>
                    <h3 style={contentStyle} className='text-lg xs:text-xl md:text-2xl'>&quot;For project &quot;health&quot; tests are equally important than product code.&quot;</h3>
                    </div>
                </Carousel>
            </div>
        </div>
        </m.main>
    )
}