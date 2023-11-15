import { navigationItems } from "@/app/constants/constants";
import Link from "next/link";
import './style.css'

export default function Introduce() {
    return(
        <div className="flex flex-col ml-10 w-96">
            <h1 className="text-8xl mt-10 font-bold greeting">Hello</h1>
            <h3 className="text-3xl mt-10">A Bit About Me</h3>
            <p className="text-xl font-thin mt-5">
                I`m a web developer I`m a web developer I`m a web developerI`m a web developerI`m a web developerI`m a web deveI`m a web developer
            </p>
            <ul className="flex flex-row flex-start items-center mt-5 w">
                {navigationItems && navigationItems.map(({id, title, path, color})=>{
                    return (
                        <li key={id} >
                            <Link href={path} className='text-lg font-normal'>
                                <div className={`w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 block ${color} flex items-center justify-center rounded-full mr-4 border border-black hover:bg-transparent transition duration-500`}>
                                    {title}
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}