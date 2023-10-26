import Image from 'next/image'
import Link from 'next/link';
import { Rye, Amatic_SC, Josefin_Sans, Reem_Kufi_Fun } from 'next/font/google'

const amatic_SC = Amatic_SC({weight: ['700'], preload: false });
const rye = Rye({weight: ['400'], preload: false });
const josefin = Josefin_Sans({weight: ['400'], preload: false });
const reemKufi = Reem_Kufi_Fun({weight: ['400'], preload: false });

export default function Nav() {
  return (
    <div className='lg:px-[24px] bg-yellow-800 bg-opacity-40'>
      <nav className='flex justify-between content-between lg:py-[20px] border-b-[1px] border-white'>
        <div className='flex text-white'>
          <Link href="/" className={`text-[16px] me-4 pe-4 pb-0 border-r-[2px] border-white ${rye.className}`}>OMAR EL HAKIMY</Link>
          {/* <p className={`text-[16px] text-white ${josefin.className}`}>SOFTWARE ENGINEER</p> */}
          <p className={`text-end text-[20px] ${reemKufi.className}`}>عمر الحاكمي </p>
        </div>
        <div className=''>
          <ul className={`flex justify-end text-[20px] text-white [&>li]:me-2 ${amatic_SC.className}`}>
            <li>
              <Link href="#">Works, </Link>
            </li>
            <li>
              <Link href="#">About, </Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
