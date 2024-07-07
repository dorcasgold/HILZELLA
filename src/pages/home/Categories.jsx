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
      <div className='orange px-4 w-full h-16 '>
        <div className='top flex mx-28 gap-4 items-center'>
          <div className='bg-black text-white flex justify-center items-center px-[26px] h-16'>
            <img src={list} alt="list-icon" />
            <p className='text-2xl font-semibold'>Categories</p>
          </div>
          <div className='flex gap-40'>
            <div className=' flex items-center'>
              <img src={search} alt="search" className='w-5 left-2 cursor-pointer translate-x-12' />
              <input type="text" className='py-2 pl-14 px-7 rounded-l-2xl w-72 placeholder:pl-5 outline-none' placeholder='Enter your keyword' />
              <p className='bg-black h-10 w-8 rounded-r-2xl'></p>
            </div>
            <div className='flex gap-24 items-center'>
              <div className='bg-white px-2 py-2 rounded-3xl cursor-pointer'>
                <img src={personIcon} alt="personIcon" />
              </div>
              <div className='bg-white px-2 py-2 rounded-3xl cursor-pointer'>
                <img src={shopIcon} alt="shopIcon" className='w-7' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex mx-32 '>
        <div className='bg-white '>
          <div className='flex flex-col w-56'>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-4 font-semibold hover:text-orange-600 cursor-pointer'>
              <p>Smart Wristwatch</p>
            </div>
            <div className='border-b-[1px] border-b-gray-500 py-3 px-2  font-semibold text-orange-600 cursor-pointer flex gap-5'>
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