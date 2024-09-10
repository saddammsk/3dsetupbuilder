'use client'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {


  function handleMenu(){
    document.querySelector('.menu').classList.toggle('active')
  }

  return (
    <header className='w-full absolute top-[49px] font-inter z-50'>
        <nav className='w-full min-h-[70px] max-w-[1104px] mx-auto px-3 xl:px-0'>
        <div className='w-full flex items-center justify-between'>

        
          <div className='flex items-center md:gap-4 gap-2 relative z-20'>
          <button onClick={handleMenu} className='xl:hidden block'>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 50 50">
          <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
          </svg>
          </button>
          <Link href='/'>
          <Image src='./img/brand-logo.svg' 
          className='md:w-auto w-32 h-auto'
          width={223} 
          height={30} 
          alt='logo'
          priority
          />
          </Link>
          </div>
         

            <div className="menu z-10 xl:w-auto xl:block xl:translate-y-0 -top-full -translate-y-full xl:relative xl:top-auto xl:shadow-none absolute shadow-xl xl:left-auto left-0 w-full xl:pt-0 pt-28 xl:pb-0 pb-6 xl:bg-transparent bg-white ">
              <ul className="flex items-center justify-center xl:gap-12 gap-4 xl:flex-row flex-col">
                <li>
                  <Link className='xl:text-xl font-medium text-gray-1 transition-all hover:text-black-1' href='/'>Home</Link>
                </li>
                <li>
                  <Link className='xl:text-xl font-medium text-gray-1 transition-all hover:text-black-1' href='/about'>How it works</Link>
                </li>
                <li>
                  <Link className='xl:text-xl font-medium text-gray-1 transition-all hover:text-black-1' href='/contact'>Sign up</Link>
                </li>
              </ul>
            </div>

            <div className='relative z-20'>
              <Link className='bg-black-1 transition-all hover:bg-gray-1 md:px-5 px-3 py-3.5 rounded-full text-white font-inter xl:text-base text-xs font-semibold' href='/'>Get Early Access</Link>
            </div>
          
        </div>
        </nav>
    </header>
  )
}

export default Navbar