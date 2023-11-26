'use client'
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useState } from "react";
import {motion as m} from 'framer-motion'

type Texpander = {
    children: React.ReactNode,
    height: string,
    isNecessaryToUse: boolean,
}

export default function Expander({children, height, isNecessaryToUse}:Texpander) {
    const [currentHeight, setHeight] = useState(height);
    const isCollapse = (currentHeight === height);

    return(
        <div className="flex flex-col">
            <m.div 
                initial={{height: currentHeight }}
                animate={{height: currentHeight }}
                transition={{duration: 0.4}}
            style={{marginBottom: '13px', overflow: 'hidden'}}>
                {children}
            </m.div>
            {isCollapse && isNecessaryToUse && <DownOutlined className="hover:text-[#D2992F]" onClick={()=> setHeight('max-content')}/>}
            {!isCollapse && isNecessaryToUse && <UpOutlined className="hover:text-[#D2992F]"  onClick={()=> setHeight(height)}/>}
        </div>
    )
}