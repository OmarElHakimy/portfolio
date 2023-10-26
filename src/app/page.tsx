import Image from 'next/image'
import Nav from '@/components/home/Nav'
import Hero from '@/components/home/Hero'

export default function Home() {
  return (
    <main>
      <div id="firstSection" className='h-[100vh]'>
        <Nav />
        <Hero />
      </div>
    </main>
  )
}
