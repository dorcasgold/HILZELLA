import { NavLink } from "react-router-dom";
import list from '../assets/icons/list.svg'
import search from '../assets/icons/icon.svg'
import personIcon from '../assets/icons/person.svg'
import shopIcon from '../assets/icons/Vector.svg'
import arrowIcon from '../assets/icons/arrow.svg'
import lipstick from '../assets/products/lipstick.svg'
import trash from '../assets/icons/trash.png'

function Cart() {
  return (
    <div className="flex flex-col">
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
              <div className='bg-white px-2 py-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in transform hover:bg-orange-600'>
                <img src={personIcon} alt="personIcon" />
              </div>
              <div className='bg-white px-2 py-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in transform hover:bg-orange-600'>
                <NavLink to="/cart">
                  <img src={shopIcon} alt="shopIcon" className='w-7' />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-32 my-5">
        <div className="flex flex-col gap-2">
          <div className="flex gap-3 font-semibold">
            <NavLink to='/'>
              <p className=" cursor-pointer hover:text-orange-600">HOME</p>
            </NavLink>
            <img src={arrowIcon} alt="arrowIcon" className="w-3" />
            <p className="text-orange-600 cursor-pointer">My Shopping Cart</p>
          </div>

          <div className="border-[1px] border-slate-500 rounded-md">
            <div className="flex justify-between my-2 mx-3 border-b-slate-500  border-b-[1px] px-2 py-4">
              <div>
                <p className="font-semibold">Item details</p>
              </div>
              <div>
                <p className="font-semibold">Quantity</p>
              </div>
              <div>
                <p className="font-semibold">Item details</p>
              </div>
              <div>
                <p className="font-semibold">Item details</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div>
                  <img src={lipstick} alt="lipstick-img" className="w-20" />
                </div>
                <div className="w-40">
                  <p className="text-gray-500 font-semibold">Avon True Matte Lipstick-Peach coral</p>
                  <p className="text-xs text-gray-500">Product Code: <span className="text-black font-semibold">560203</span></p>
                </div>
              </div>
              <div className="flex gap-2 items-center font-semibold rounded-lg">
                <button className="gray rounded-tl-md rounded-bl-md  px-3 py-1">-</button>
                <p>3</p>
                <button className="gray  rounded-tr-md rounded-br-md px-3 py-1">+</button>
              </div>
              <div className="flex gap-2 items-center">
                <p className=" line-through text-gray-400">$100</p>
                <p className="text-orange-500 font-medium">$75</p>
              </div>
              <div>
                <p className="text-gray-500">$225</p>
              </div>
              <div>
                <img src={trash} alt="trash" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart