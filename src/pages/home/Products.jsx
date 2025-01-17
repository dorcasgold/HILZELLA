import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import imStock from '../../assets/icons/Instock.svg'
// Top Products
import tp1 from '../../assets/products/TP1.svg'
import tp2 from '../../assets/products/TP2.svg'
import tp3 from '../../assets/products/TP3.svg'
import tp4 from '../../assets/products/TP4.svg'
import p1 from '../../assets/products/P1.png'
import p2 from '../../assets/products/P2.svg'
import p3 from '../../assets/products/P3.svg'
import p4 from '../../assets/products/P4.svg'
import p5 from '../../assets/products/P5.svg'
import p6 from '../../assets/products/P6.svg'
import p7 from '../../assets/products/P7.svg'
import tb1 from '../../assets/products/Tb1.svg'
import tb2 from '../../assets/products/Tb2.svg'
import tb3 from '../../assets/products/Tb3.svg'
import tb5 from '../../assets/products/Tb5.svg'
import tb8 from '../../assets/products/Tb8.svg'
import banner from '../../assets/banner2.svg'

function Products() {
  return (
    <div className="lg:mx-44 overflow-x-hidden">
      <div className='md:hidden'>
        <img src={banner} alt="banner" />
      </div>
      <div className="flex flex-col gap-1">
        <div className="border-b-[1px] border-b-gray-500">
          <p className="lg:text-2xl text-lg font-semibold py-2 px-1">Top Products</p>
        </div>

        <div className="lg:flex w-full justify-between my-2 items-center grid grid-cols-2 gap-x-2 mx-1">
          <div className=' relative'>
            <p className='orange text-white px-2 border-black rounded border-2 py-1 text-xs text-center absolute z-50 translate-x-10 md:translate-x-36 lg:translate-x-0'>NEW</p>
            <div className='lg:w-28 w-14 group '>
              <LazyLoadImage
                alt="Product"
                src={tp1}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-14 md:translate-x-40 lg:translate-x-0'
              />
            </div>
            <div className='flex gap-1 py-1 md:translate-x-20 lg:translate-x-0'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='lg:text-sm md:text-lg font-medium'>Iphone 15 pro max</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$1199</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out  transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='lg:w-28 w-14 group'>
              <LazyLoadImage
                alt="Product"
                src={tp2}
                effect="blur"
                className='transition-transform translate-y-6 duration-500 ease-in transform group-hover:scale-110 translate-x-14 md:translate-x-40 lg:translate-x-5'
              />
            </div>
            <div className='flex gap-1 py-1 md:translate-x-20 lg:translate-x-0'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='lg:text-sm md:text-lg text-xs font-bold'>10 Inch Android 9 Tablet</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$1199</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200'>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='lg:w-28 w-16 group'>
              <LazyLoadImage
                alt="Product"
                src={tp3}
                effect="blur"
                className='transition-transform duration-500 translate-y-5 ease-in transform group-hover:scale-110 translate-x-14 md:translate-x-40 lg:translate-x-0'
              />
            </div>
            <div className='flex gap-1 py-1 md:translate-x-20 lg:translate-x-0'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='lg:text-sm md:text-lg font-medium'>Generic Tab 14</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$20</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='lg:w-28 w-16 group'>
              <LazyLoadImage
                alt="Product"
                src={tp4}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-y-5 translate-x-14 md:translate-x-40 lg:translate-x-8'
              />
            </div>
            <div className='flex gap-1 py-1 md:translate-x-20 lg:-translate-x-3'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='lg:text-sm md:text-lg text-xs font-medium'>Samsung Galaxy A05</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$89</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>

        </div>

        {/* Phones */}
        <div className="border-b-[1px] border-b-gray-500 translate-x-5 lg:translate-x-0">
          <p className="text-2xl font-semibold py-2">Phones</p>
        </div>

        <div className="lg:flex w-full justify-between my-2 items-center grid grid-cols-2 gap-x-2 mx-1">
          <div>
            <div className='w-28 group '>
              <LazyLoadImage
                alt="Product"
                src={p1}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-8 lg:translate-x-6 md:translate-x-24'
              />
            </div>
            <div className='flex gap-1 py-1 translate-x-2  md:translate-x-5 lg:translate-x-3'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Samsung Galaxy A35</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$1199</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={p2}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-8 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1 translate-x-2 md:translate-x-5 lg:translate-x-3'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Nokia 110</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$199</p>
              <p className='bg-black text-white px-[2.5rem] py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200'>Add to cart</p>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='w-28 group text-center'>
              <LazyLoadImage
                alt="Product"
                src={p3}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-8 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm sm:text-xs font-medium hidden md:block'>Samsung Galaxy S24 Plus</p>
              <p className='text-sm sm:text-xs font-medium md:hidden'>Samsung Galaxy S24</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$105</p>
              <p className='bg-black text-white py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={p4}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:-translate-x-2'
              />
            </div>
            <div className='flex gap-1 py-1 lg:-translate-x-5'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Bontel Boom 800</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$59</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>


        </div>

        <div className="lg:flex w-full justify-between my-2 items-center grid grid-cols-2 gap-x-2 mx-1">
          <div>
            <div className='w-28 group '>
              <LazyLoadImage
                alt="Product"
                src={tp4}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-8 md:translate-x-24 lg:translate-x-9 translate-y-5'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Samsung Galaxy A05</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$89</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div className=' relative'>
            <div className='w-28 group'>
              <p className='orange text-white px-2 border-black rounded border-2 py-1 text-xs text-center absolute z-50'>NEW</p>
              <LazyLoadImage
                alt="Product"
                src={p7}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Xiaomi Redmi A3</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$75</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200'>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={p6}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>10 Inch Android 9 Tablet</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$119</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={p5}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Iphone 15 pro max</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$89</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>

        </div>


        {/* Tablets */}
        <div className="border-b-[1px] border-b-gray-500">
          <p className="text-2xl font-semibold py-2">Tablets</p>
        </div>

        <div className="lg:flex w-full justify-between my-2 items-center grid grid-cols-2 gap-x-2 mx-1">
          <div>
            <div className='w-28 group '>
              <LazyLoadImage
                alt="Product"
                src={tb1}
                effect="blur"
                className='transition-transform  translate-y-8 duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Amazon Fire Hd 8 Tablet</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$199</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={tb2}
                effect="blur"
                className='transition-transform duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Apple iPad Wi-fi</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$199</p>
              <p className='bg-black text-white px-[2.5rem] py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200'>Add to cart</p>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className='w-28 group text-center'>
              <LazyLoadImage
                alt="Product"
                src={tb3}
                effect="blur"
                className='transition-transform  translate-y-5 duration-500 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Apple iPad Pro</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$105</p>
              <p className='bg-black text-white py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={tp2}
                effect="blur"
                className='transition-transform duration-500 ease-in translate-y-8 transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1 -translate-x-3'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>10 Inch Android 9 Tablet</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$119</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
        </div>

        <div className="lg:flex w-full justify-between my-2 items-center grid grid-cols-2 gap-x-2 mx-1">
          <div>
            <div className='w-28 group '>
              <LazyLoadImage
                alt="Product"
                src={tb3}
                effect="blur"
                className='transition-transform duration-500 translate-y-5 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Iphone 15 pro max</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$119</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={tb5}
                effect="blur"
                className='transition-transform duration-500 ease-in translate-y-4 transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Nokia T20Ta-1397</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$119</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200'>Add to cart</p>
            </div>
          </div>
          <div className=' relative'>
            <p className='orange text-white px-2 translate-y-5 border-black rounded border-2 py-1 text-xs text-center absolute z-50'>NEW</p>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={tb8}
                effect="blur"
                className='transition-transform duration-500 ease-in translate-y-8 transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>10 Inch Android 9 Tablet</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$119</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
          <div>
            <div className='w-28 group'>
              <LazyLoadImage
                alt="Product"
                src={tp3}
                effect="blur"
                className='transition-transform duration-500 translate-y-8 ease-in transform group-hover:scale-110 translate-x-4 md:translate-x-24 lg:-translate-x-4'
              />
            </div>
            <div className='flex gap-1 py-1 lg:-translate-x-8'>
              <img src={imStock} alt="imStock" className='w-4' />
              <p className='text-sm font-medium'>Generic Tab 14</p>
            </div>
            <div className=' text-center py-1'>
              <p className=' font-semibold'>$200</p>
              <p className='bg-black text-white px-2 py-2 cursor-pointer rounded-3xl hover:bg-orange-500 ease-in-out transition-all duration-200 '>Add to cart</p>
            </div>
          </div>
        </div>

        <div className='my-8 lg:flex flex-col gap-1 justify-center hidden'>
          <div>
            <p className=' font-medium text-center'>Subscribe to our Newsletters for updates on on our services and exclusive offers</p>
          </div>
          <div className='flex gap-1 justify-center'>
            <input type="email" required placeholder='Email Address' className='border-2 border-orange-600 px-4 py-2 w-[40rem]' />
            <button className='bg-orange-600 px-4 py-3 font-semibold'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products