import { NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import list from '../../assets/icons/list.svg'
import search from '../../assets/icons/icon.svg'
import personIcon from '../../assets/icons/person.svg'
import shopIcon from '../../assets/icons/Vector.svg'
import arrowIcon from '../../assets/icons/arrow.svg'
import tablet from '../../assets/products/tablet.svg'


function Categories() {
  return (
    <div className='flex flex-col gray'>
      <div className='orange md:px-4 w-full h-16 '>
        <div className=' flex lg:mx-28 md:mx-0 gap-0 md:gap-4 items-center'>
          <div className='md:bg-black text-white flex justify-center items-center px-1 md:px-[26px] h-16'>
            <img src={list} alt="list-icon" className="block w-8" />
            <div className="hidden md:block">
              <p className='text-base font-semibold '>Categories</p>
            </div>
          </div>
          <div className='flex gap-8 lg:gap-[20rem] md:gap-3'>
            <div className=' flex items-center'>
              <img src={search} alt="search" className='w-5 left-2 cursor-pointer translate-x-8 md:translate-x-12 lg:translate-x-36 z-50' />
              <input type="text" className='lg:translate-x-28 md:py-2 py-1 md:pl-14 px-7 rounded-2xl md:rounded-r-none md:rounded-l-2xl md:w-72 w-56 placeholder:text-sm  placeholder:pl-5 outline-none' placeholder='Enter your keyword' />
              <p className='bg-black h-10 w-9 rounded-r-2xl hidden md:block lg:translate-x-28'></p>
            </div>
            <div className='flex gap-14 items-center'>
              <div className='bg-white hidden md:block px-2 py-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in transform hover:bg-orange-600'>
                <img src={personIcon} alt="personIcon" />
              </div>
              <div className='bg-white relative px-2 py-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in transform hover:bg-orange-600'>
                <NavLink to="/cart">
                  <img src={shopIcon} alt="shopIcon" className='w-7' />
                </NavLink>
                <span className="absolute bg-green-700 text-white px-2 rounded-full top-0 -left-2">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:flex mx-32 hidden'>
        <div className='bg-white '>
          <div className='flex flex-col w-56'>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer'>
              <p>Smart Wristwatch</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-2  font-semibold text-orange-600 cursor-pointer flex gap-3 translate-x-3'>
              <p>Phones and Tablets</p>
              <img src={arrowIcon} alt="arrowIcon" className='w-3' />
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer'>
              <p>Computers</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer'>
              <p>Fashion</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer'>
              <p>Footwears</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer'>
              <p>Jewelry</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer '>
              <p>Accessories</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer '>
              <p>Furniture</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer '>
              <p>Beauty</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer '>
              <p>&#0;</p>
            </div>
          </div>
          <div></div>
        </div>

        <div>
          <LazyLoadImage
            alt="tablet"
            src={tablet}
            effect="blur"
          />
        </div>

      </div>

    </div>
  )
}

export default Categories