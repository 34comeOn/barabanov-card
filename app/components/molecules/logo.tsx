import Link from "next/link"

export default function Logo() {
    return(
        <Link href={"/"}>
            <div className="flex flex-row flex-start cursor-pointer">
                <div className='w-7 h-7 rounded-full bg-amber-500 mr-2'>
                </div>
                <strong>
                    <span className='text-xl mr-2 font-medium'>
                        Barabanov Mikhail
                    </span>
                </strong>
                <span className='text-lg font-thin'>
                    Developer    
                </span>
            </div>
        </Link>
    )
}