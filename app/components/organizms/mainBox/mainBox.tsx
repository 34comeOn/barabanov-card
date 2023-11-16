'use client'
import {AnimatePresence} from 'framer-motion'
import { usePathname } from 'next/navigation';

export default function MainBox({children}: {children: React.ReactNode}) {
    // const pathname = usePathname();
    return(
        <AnimatePresence mode='wait'>
        {/* <AnimatePresence key={pathname}> */}
            {children}
        </ AnimatePresence>
    )
}