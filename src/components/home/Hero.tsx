import Image from 'next/image'
import Link from 'next/link';
import { Rye, Amatic_SC, Josefin_Sans, Reem_Kufi_Fun } from 'next/font/google'

const amatic_SC = Amatic_SC({weight: ['700'], preload: false });
const rye = Rye({weight: ['400'], preload: false });
const josefin = Josefin_Sans({weight: ['700'], preload: false });
const reemKufi = Reem_Kufi_Fun({weight: ['400'], preload: false });

export default function Hero() {
  return (
    <div className='grid grid-cols-2 px-[60px]'>
      <div className='mt-[200px]'>
        <p className={`text-start text-white text-[80px] ${josefin.className}`}>
          SOFTWARE ENGINEER
        </p>
      </div>
      <div>
        <div className=''>
          <p className={`text-end text-white ${reemKufi.className}`}>
            مهندس برمجيات
          </p>
        </div>
      </div>
    </div>
  )
}









