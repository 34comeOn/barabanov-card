"use client"
import { Fragment, useState } from "react";
import { usePathname } from "next/navigation"
import Link from "next/link"
import { navigationItems } from "@/app/constants/constants";
import './style.css'
import { CloseOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

export default function Navigation() {
    const pathname = usePathname();
    const [isHidden, setIsHidden] = useState(false)

    return(
        <nav>
            <ul className="md:flex flex-row flex-start items-center hidden">
                {navigationItems && navigationItems.map(({id, title, path})=>{
                    return (
                        <Fragment key={id}>
                            {(id !== 1)?<div className="bar bg-slate-900 ml-3 mr-3"></div>: null}
                            <li >
                                <Link href={path} className={`text-lg hover:text-amber-500 transition duration-300 ${(pathname === path)? 'text-amber-500 font-light': ' font-thin'}`}>
                                    {title}
                                </Link>
                            </li>
                        </Fragment>
                    )
                })}
            </ul>
            <button className="block md:hidden z-20 relative">
                {isHidden? 
                    <CloseOutlined 
                    style={{fontSize: '26px'}} 
                    onClick={()=>setIsHidden(!isHidden)}
                    />
                    :
                    <MenuUnfoldOutlined 
                    style={{fontSize: '26px'}} 
                    onClick={()=>setIsHidden(!isHidden)}
                    />
                }
            </button>
            <div style={{backgroundColor: '#D6DBDC'}}  
            className={
                isHidden
                    ? `md:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center
                    w-full h-screen  md:bg-transparent text-center ease-in duration-300 z-10`
                    : `md:hidden absolute top-[-100%] left-0 right-0 bottom-0 flex justify-center items-center
                    w-full h-screen  md:bg-transparent text-center ease-in duration-300 z-10`
                }
            >
                <ul className="flex flex-col flex-start items-center md:hidden">
                    {navigationItems && navigationItems.map(({id, title, path})=>{
                        return (
                            <Fragment key={id}>
                                {(id !== 1)?<div className="hidden bar bg-slate-900 ml-3 mr-3"></div>: null}
                                <li >
                                    <Link 
                                    onClick={()=>setIsHidden(!isHidden)} 
                                    href={path} className={`text-4xl p-4 block md:text-lg hover:text-amber-500 transition duration-300 ${(pathname === path)? 'text-amber-500 font-light': ' font-thin'}`}>
                                        {title}
                                    </Link>
                                </li>
                            </Fragment>
                        )
                    })}
                </ul>
            </div>
        </nav>
    )
}