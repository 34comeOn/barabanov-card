"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"
import './style.css'

const navigationItems = [
    {
        title: 'Resume',
        path: '/resume'
    },
    {
        title: 'Projects',
        path: '/projects'
    },
    {
        title: 'About me',
        path: '/about_me'
    },
]

export default function Navigation() {
    const pathname = usePathname();

    return(
        <nav>
            <ul className="flex flex-row flex-start items-center">
                {navigationItems && navigationItems.map(({title, path}, index)=>{
                    return (
                        <>
                        {(index !== 0)?<div className="bar bg-slate-900 ml-3 mr-3"></div>: null}
                        <li key={index}>
                            <Link href={path} className={`${(pathname === path)? 'text-amber-500': null} text-lg font-thin hover:text-amber-500`}>
                            {/* <Link href={path} className={(pathname)'text-lg font-thin hover:text-amber-500'}> */}
                                {title}
                            </Link>
                        </li>
                        </>
                    )
                })}
            </ul>
        </nav>
    )
}