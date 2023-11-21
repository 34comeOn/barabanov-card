"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import './style.css'
import { navigationItems } from "@/app/constants/constants";
import { Fragment } from "react";

export default function Navigation() {
    const pathname = usePathname();

    return(
        <nav>
            <ul className="flex flex-row flex-start items-center">
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
        </nav>
    )
}