import Image from 'next/image'
import Form from '../components/Form';

export default function Home() {
  return (
    <>
    {/* sec 1 */}
    <section className="w-full pt-[200px] min-h-[781px] relative">
      <div className='absolute w-full h-full -z-10 top-0'>
        <Image src='/img/3d-banner-bg-img.png' 
        className='w-full h-auto'
        width={1104} 
        height={1000} 
        alt='bg image'
        />
      </div>
      <div className="w-full max-w-[1104px] mx-auto px-3 xl:px-0">
        <div className="w-full flex xl:flex-row flex-col gap-6">
          <div className="xl:w-2/3 md:w-4/5 w-full relative">
            <h1 className="xl:text-62px md:text-5xl text-3xl md:min-w-[600px] text-black-2 font-bold font-josefin uppercase mb-1">Plan Your Ideal Desk Setup with Our Builder</h1>
            <p className="xl:text-2xl md:text-lg text-gray-1 xl:max-w-[540px] pr-10">Save time, money, and ensure your dream setup matches your aesthetic—completely free.</p>
          
            <Image src='/img/banner-right-bg.png' 
            className='w-[1540px] absolute opacity-80 top-0 -z-10 -left-3/4 h-[501px]'
            width={1104} 
            height={1000} 
            alt='bg image'
            />
            <div className='w-full max-w-[490px] mt-6'>
              <Form/>
            </div>
          </div>
          <div className="xl:w-1/2">
          <Image src='/img/3d-banner-img.png' 
          className='xl:min-w-[900px] w-full h-auto'
          width={1054} 
          height={501} 
          alt='banner image'
          />
     
          </div>

        </div>

      </div>

    </section>

    {/* sec 2 */}
    <section className='w-full md:pt-[95px] pt-10 pb-[50px]'>
      <div className='w-full max-w-[1104px] mx-auto px-3 xl:px-0'>
        <div className='w-full max-w-[722px] mx-auto text-center pb-[98px]'>
            <h2 className='xl:text-5xl text-3xl  text-black-2 font-josefin font-bold uppercase tracking-tighter xl:mb-4 mb-2'>
            Effortlessly Design Your Ideal Desk Setup
            </h2>
            <p className='xl:text-xl md:text-lg text-gray-1 md:px-6'>From choosing your essentials to perfecting every detail, our tool makes it easy to design a desk setup that’s uniquely yours. Follow these steps to visualize, customize, and refine your workspace—before you make a purchase.</p>
        </div>
        <div className="w-full flex flex-col xl:gap-[100px] gap-20">

          <div className='w-full grid xl:grid-cols-2 justify-center xl:gap-8 gap-10'>
            <div className='flex flex-col justify-center items-center max-w-[500px] mx-auto'>
                <h2 className='xl:text-4xl text-2xl font-josefin text-black-2 mb-2 font-bold uppercase text-center'>Select Your Favorite Gaming Setup Essentials</h2>
                <p className='xl:text-xl md:text-lg text-gray-1 xl:text-start text-center'>Choose the core components that define your perfect gaming setup. From desks to peripherals, select the items that match your style and needs.</p>
            </div>
            <div className='relative'>
              <div className='w-[500px] h-[500px] rounded-full blur-[80px] bg-gray-4 absolute'></div>
                <ul className='relative space-y-6'>
                  <li className='bg-white gap-[22px] shadow-md md:shadow-none rounded-[28px] flex md:flex-row flex-col justify-center items-center md:p-7 p-5 w-fit mx-auto'>
                    <Image src='/img/led-img.png' 
                    className='md:w-auto w-[100px] h-auto'
                    width={100} 
                    height={57} 
                    alt='banner image'
                    />
                    <div className='max-w-[300px]'>
                    <h3 className='md:text-18px md:text-start text-center text-black-3 font-bold tracking-tighter mb-1.5'>28 inch monitor BLACK</h3>
                    <p className='line-clamp-2 text-base text-black-3'>This monitor comes with a super cool, stylish and stable LTPS stand, enabling you to adjust the monitor’s height and viewing angles to best suit your needs</p>
                    </div>
                    <button className='bg-green-1 transition-all hover:bg-green-500 rounded-full px-6 h-9 text-white text-base font-semibold '>
                      Added
                    </button>
                  </li>
                  <li className='bg-white gap-[22px] shadow-md md:shadow-none rounded-[28px] flex md:flex-row flex-col justify-center items-center md:p-7 p-5 w-fit mx-auto'>
                    <Image src='/img/table-img.png' 
                    className='md:w-auto w-[100px] h-auto'
                    width={100} 
                    height={57} 
                    alt='banner image'
                    />
                    <div className='max-w-[300px]'>
                    <h3 className='md:text-18px md:text-start text-center text-black-3 font-bold tracking-tighter mb-1.5'>Wooden Desk with Drawers</h3>
                    <p className='line-clamp-2 text-base text-black-3'>Mix and match your choice of table top and legs – or choose this ready-made combination. Strong and light-weight, made with a technique that uses less raw materials, reducing the impact on the environment.</p>
                    </div>
                    <button className='bg-green-1 transition-all hover:bg-green-500 rounded-full px-6 h-9 text-white text-base font-semibold '>
                      Added
                    </button>
                  </li>
                  <li className='bg-white gap-[22px] shadow-md md:shadow-none rounded-[28px] flex md:flex-row flex-col justify-center items-center md:p-7 p-5 w-fit mx-auto'>
                    <Image src='/img/keyboard-img.png' 
                    className='md:w-auto w-[100px] h-auto'
                    width={100} 
                    height={57} 
                    alt='banner image'
                    />
                    <div className='max-w-[300px]'>
                    <h3 className='md:text-18px md:text-start text-center text-black-3 font-bold tracking-tighter mb-1.5'>Gaming Keyboard</h3>
                    <p className='line-clamp-2 text-base text-black-3'>This 60% gaming keyboard omits the numpad, function row, and other auxiliary keys found in a full-sized keyboard, focusing primarily on the main</p>
                    </div>
                    <button className='bg-white border transition-all hover:bg-black hover:text-white border-black rounded-full px-6 h-9 text-black text-base font-semibold '>
                      Add
                    </button>
                  </li>
                </ul>
            </div>
          </div>

          <div className='w-full grid xl:grid-cols-2 justify-center xl:gap-8 gap-14'>
          
            <div className='relative xl:order-1 order-2'>
            <Image src='/img/computer-setup-img.png' 
              className='w-full h-auto'
              width={496.15} 
              height={295.9} 
              alt='no-image'
              />
            </div>

            <div className='flex flex-col justify-center items-center z-10 max-w-[451px] mx-auto xl:order-2 order-1'>
                <h2 className='xl:text-4xl text-2xl font-josefin text-black-2 mb-2 font-bold uppercase text-center'>See Your Selected Items Come to Life in 3D</h2>
                <p className='xl:text-xl md:text-lg text-gray-1 text-center'>Instantly see your selected items come to life in a dynamic 3D render. Get a real-time preview of how your setup will look before you commit.</p>
            </div>
          </div>

          <div className='w-full grid xl:grid-cols-2 justify-center gap-8'>
            <div className='flex flex-col justify-center items-center max-w-[500px] m-auto xl:order-1 order-1'>
                <h2 className='xl:text-4xl text-2xl font-josefin text-black-2 mb-2 font-bold uppercase text-center'>Arrange and Customize the Layout of Your Setup</h2>
                <p className='xl:text-xl md:text-lg text-gray-1 text-center'>Drag, drop, and position your selected items to create the optimal layout. Experiment with different configurations to find the perfect fit.</p>
            </div>
            <div className='relative flex items-center justify-center xl:order-2 order-2'>
              <Image src='/img/custom-pc-img.png' 
                    className='xl:w-full h-auto'
                    width={560.71} 
                    height={480} 
                    alt='no-image'
                    /> 
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* sec 3 */}
    <section className='w-full xl:pt-[116px] md:pt-16 pt-10 pb-[72px] relative'>
    <div className='absolute md:w-full h-full -z-30 xl:-top-1/3 w-[150%]'>
        <Image src='/img/3d-banner-bg-img.png' 
        className='w-full h-auto'
        width={1104} 
        height={1000} 
        alt='bg image'
        />
      </div>
      <div className='w-full max-w-[1104px] mx-auto px-3 xl:px-0'>
        <div className="w-full">
        <div className='w-full max-w-[922px] mx-auto text-center pb-10'>
            <h2 className='xl:text-5xl text-3xl text-black-2 font-josefin font-bold uppercase tracking-tighter mb-2'>
            Get Personalized Product Recommendations for Your Setup
            </h2>
            <p className='xl:text-xl md:text-lg text-gray-1 px-6 max-w-[627px] mx-auto'>Receive personalized product recommendations to complete your setup. We help you find the best items to achieve your desired look and functionality.</p>
        </div>
        <div className="w-full max-w-[948px] mx-auto">
          <div className='w-full flex md:flex-row flex-col md:items-start items-center gap-11'>
            <div className='bg-white rounded-3xl shadow-md pt-[22px] pb-8 px-6 max-w-[207.17px] relative'>
       
            <Image src='/img/product-style-line-left.png' 
              className='w-[189.77px] h-auto absolute -right-20 -z-10 top-1/2 -translate-y-1/2 md:block hidden'
              width={189.77} 
              height={25} 
              alt='no-image'
              />
        
            <div className='w-full flex  items-center justify-center'>
            <Image src='/img/speakers-img.png' 
              className='w-[110px] h-auto'
              width={110} 
              height={110} 
              alt='no-image'
              />
            </div>
      
              <h3 className='xl:text-base text-sm leading-tight text-black-4 font-poppins font-bold mt-7'>SPKPAL Computer Speakers RGB</h3>
              <p className='text-sm text-gray-5 my-2'>AudioEngine</p>
              <h4 className='text-17px text-black-5 font-poppins font-bold '>$269.00</h4>
            </div>

            <div className='md:flex items-center justify-center hidden' >
            <Image src='/img/photoroom.png' 
              className='w-[451px] h-auto relative -z-20'
              width={451} 
              height={267} 
              alt='no-image'
              />
            </div>

            <div className='bg-white rounded-3xl shadow-md pt-[22px] pb-8 px-6 max-w-[207.17px] relative'>
            <Image src='/img/product-style-line-right.png' 
              className='w-[189.77px] h-auto absolute -left-20 -z-10 top-1/2 -translate-y-1/2 md:block hidden'
              width={189.77} 
              height={25} 
              alt='no-image'
              />

            <div className='w-full flex items-center justify-center'>
            <Image src='/img/cpu-img.png' 
              className='w-[110px] h-auto'
              width={110} 
              height={110} 
              alt='no-image'
              />
            </div>
              <h3 className='xl:text-base text-sm leading-tight text-black-4 font-poppins font-bold mt-7'>AMD Gaming PC
              Configurator 4</h3>
              <p className='text-sm text-gray-5 my-2'>CyberPowerPC</p>
              <h4 className='text-17px text-black-5 font-poppins font-bold '>$2059.00</h4>
            </div>
            
          </div>
          <div className='w-full flex items-center justify-center mt-3'>
          <div className='bg-white rounded-3xl shadow-md pt-[22px] pb-8 px-6 max-w-[207.17px] relative'>
       
              <Image src='/img/product-style-line-top.png' 
                className='w-auto h-auto absolute left-1/2 -translate-x-1/2 -z-10 -top-1/3 md:block hidden'
                width={189.77} 
                height={25} 
                alt='no-image'
                />
          
              <div className='w-full flex items-center justify-center'>
              <Image src='/img/gaming-pc.png' 
                className='w-[110px] h-auto'
                width={110} 
                height={110} 
                alt='no-image'
                />
              </div>
        
                <h3 className='xl:text-base text-sm leading-tight text-black-4 font-poppins font-bold mt-7'>GIGABYTE M-Q Gaming Monitor</h3>
                <p className='text-sm text-gray-5 my-2'>GIGABYTE</p>
                <h4 className='text-17px text-black-5 font-poppins font-bold '>$229.00</h4>
              </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* sec 4 */}
     <section className='w-full xl:pt-28 xl:pb-16'>
      <div className="className='w-full max-w-[1092px] mx-auto py-8 px-3 xl:px-0">
        <div className="bg-img w-full border border-gray-6 rounded-3xl h-[419px] flex items-center justify-center bg-cover bg-center bg-no-repeat bg-white" style={{backgroundImage: `url('/img/contact-bg.png')`}}>
          <div className="w-full mx-auto max-w-[646.75px] px-6 ">
              <h2 className='text-center xl:text-56px md:text-3xl text-2xl font-josefin font-bold text-black-2 mb-2'>GET NOTIFIED WHEN WE LAUNCH</h2>
              <p className='xl:text-xl md:text-lg text-base text-center text-gray-1'>Stay in the loop with everything you need to know.</p>

              <div className='w-full max-w-[566.97px] mt-7'>
            <Form/>
            </div>
          </div>
          
        </div>
      </div>  
    </section>
    
    </>
  );
}
