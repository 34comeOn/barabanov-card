import { GithubOutlined, LinkedinOutlined, SendOutlined } from '@ant-design/icons'
import Link from 'next/link'
import Bar from '../../atoms/bar/bar'
import './style.css'

export default function Footer() {
    return(
        <footer className='w-full'>
            <Bar />
            <div>
                <ul className='flex flex-row justify-between items-center'>
                    <li className='flex flex-col'>
                        <strong className='mt-9 mb-2 text-lg'>Phone</strong>
                        <a href="tel:+79111614831" className='mb-2 font-light'>+7 911 1614831</a>
                    </li>
                    <li className='flex flex-col'>
                        <strong className='mt-9 mb-2 text-lg'>Email</strong>
                        <a href="mailto:barabanovm87@gmail.com" className='mb-2 font-light'>barabanovm87@gmail.com</a>
                    </li>
                    <li className='flex flex-col'>
                        <strong className='mt-9 mb-2 text-lg'>Find me</strong>
                        <ul className='flex flex-row justify-between items-center socials mb-2'>
                            <li>
                                <Link href='https://github.com/34comeOn' className=''>
                                    <GithubOutlined style={{ fontSize: '28px' }}/>
                                </Link>
                            </li>
                            <li>
                                <Link href='https://www.linkedin.com/in/mikhail-barabanov-4237b8235/' className=''>
                                    <LinkedinOutlined style={{ fontSize: '28px' }}/>
                                </Link>
                            </li>
                            <li className='socials__icon--telegram'>
                                <Link href='https://t.me/comeOn34'>
                                    <SendOutlined rotate={-45} style={{ fontSize: '28px' }}/>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p className='mt-9 mb-2 text-xs font-light'>2023 by Barabanov Mikhail.</p>
                    </li>
                </ul>
            </div>
        </footer>
    )
}