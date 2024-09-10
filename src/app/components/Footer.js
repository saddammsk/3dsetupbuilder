import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full xl:min-h-[380px] relative xl:py-20 py-16 font-inter'>
      <div className="w-full h-[1px] top-1/2 mt-7 -translate-y-1/2 absolute bg-gray-7"></div>
      <div className="w-full max-w-[500px] mx-auto">
        <div className='w-full flex flex-col gap-8 items-center justify-center'>
        <Link href='/'>
          <Image src='./img/brand-logo.svg' 
          className='w-auto h-auto'
          width={223} 
          height={30} 
          alt='logo'
          priority
          />
          </Link>

          <ul className="flex items-center justify-center md:gap-12 gap-7">
                <li>
                  <Link className='xl:text-xl font-inter text-gray-1 transition-all hover:text-black-1' href='/'>Home</Link>
                </li>
                <li>
                  <Link className='xl:text-xl font-inter text-gray-1 transition-all hover:text-black-1' href='/about'>How it works</Link>
                </li>
                <li>
                  <Link className='xl:text-xl font-inter text-gray-1 transition-all hover:text-black-1' href='/contact'>Sign up</Link>
                </li>
              </ul>
        </div>
        <div className='w-full mt-20'>
            <p className='xl:text-xl md:text-base text-xs text-center text-gray-8'>© 2024 DeskSetupBuilder. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer