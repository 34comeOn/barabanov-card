import { navigationItems } from "@/app/constants/constants";
import Link from "next/link";
import {motion as m} from 'framer-motion'
import { container, item } from "@/app/animation";

export default function Introduce() {
    return(
        <div className="flex flex-col lg:ml-12 md:max-w-[430px] w-full m-auto sm:mb-10 lg:w-96 mb-3">
            <h1 className="block text-4xl lg:text-8xl mt-14 font-semibold lg:font-bold lg:ml-[-4px] greeting">Hello</h1>
            <h3 className="text-xl font-semibold lg:text-3xl mt-4 lg:mt-10">A Bit About Me</h3>
            <p className="text-xl font-thin mt-1 lg:mt-5">
                I`m a web developer with over a 3 years of hands-on experience, family guy and just a happy person.
            </p>
            <m.ul 
            variants={container} 
            initial='hidden' 
            animate='show' 
            className="flex flex-row justify-between items-center mt-5 h-[110px] ml-auto sm:ml-0 mr-auto w-full max-w-[300px] sm:max-w-[380px]">
                {navigationItems && navigationItems.map(({id, title, path, color},index)=>{
                    return (
                        <m.li variants={item} key={id} >
                            <Link href={path} className='lg:text-lg font-semibold lg:font-normal'>
                                <div 
                                    className={`w-[87px] h-[87px] sm:w-28 sm:h-28 lg:w-[120px] lg:h-[120px] block ${color} flex items-center justify-center rounded-full ${(index === 0)? '':'ml-[7px]'} border border-black hover:bg-transparent transition duration-500`}>
                                    {title}
                                </div>
                            </Link>
                        </m.li>
                    )
                })}
            </m.ul>
        </div>
    )
}