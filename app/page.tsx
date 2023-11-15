import Image from 'next/image'
import Introduce from './components/organizms/introduce/introduce'
import './style.css'

export default function Home() {
  return (
    <main className='h-max flex flex-row items-center'>
      <div>
        <Image
          src="/mikhail.jpg"
          width={500}
          height={500}
          alt="Mikhail photo"
          className='main-page__img relative'
        />
      </div>
      <Introduce />
    </main>
  )
}
