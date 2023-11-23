import Link from "next/link"

export default function Logo() {
    return(
        <Link href={"/"}>
            <div className="flex flex-row flex-start items-center cursor-pointer hover:text-amber-500 transition duration-300 ">
                <div className='w-7 h-7 min-w-[27px] min-h-[27px] rounded-full bg-amber-500 mr-1 sm:mr-2'>
                </div>
                <strong style={{width: 'max-content'}}>
                    <span className='hidden xs:block text-lg sm:text-xl mr-1 sm:mr-2 font-medium'>
                        Barabanov Mikhail
                    </span>
                    <span className='xs:hidden text-lg sm:text-xl mr-1 sm:mr-2 font-medium'>
                        Barabanov Mike
                    </span>
                </strong>
                <span className='block mt-[3px] text-[14px] sm:text-lg font-thin mr-2'>
                    Developer    
                </span>
            </div>
        </Link>
    )
}