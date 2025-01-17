import { NavLink } from "react-router-dom";
import list from '../assets/icons/list.svg'
import search from '../assets/icons/icon.svg'
import personIcon from '../assets/icons/person.svg'
import shopIcon from '../assets/icons/Vector.svg'
import arrowIcon from '../assets/icons/arrow.svg'
import lipstick from '../assets/products/lipstick.svg'
import trash from '../assets/icons/trash.png'
import tp1 from '../assets/products/TP1.svg'
import scale from '../assets/products/scale.svg'
import chatIcon from '../assets/icons/Chat Bubble.svg'
import { useState } from "react";
import blackArrow from '../assets/icons/black-arrow.svg'

function Cart() {
  const [count1, setCount1] = useState(3)
  const [count2, setCount2] = useState(1)
  const [count3, setCount3] = useState(2)
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className='orange  lg:flex hidden px-4 w-full h-16'>
        <div className=' flex lg:mx-28 md:mx-0 gap-0 md:gap-4 items-center'>
          <div className='md:bg-black text-white flex justify-center items-center px-1 md:px-[26px] h-16'>
            <img src={list} alt="list-icon" className="block w-8" />
            <div className="hidden md:block">
              <p className='text-2xl font-semibold '>Categories</p>
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
      <div className="px-2 orange py-4 font-semibold flex flex-col gap-2 lg:hidden">
        <div className="flex gap-3 px-2">
          <NavLink to='/'>
            <img src={blackArrow} alt="arrowIcon" className="w-3" />
          </NavLink>
          <p>Continue shopping</p>
        </div>
        <div>
          <p className="px-6 text-3xl font-bold">My Cart</p>
        </div>
      </div>
      <div className="lg:mx-32 lg:my-5 flex flex-col">
        <div className="flex flex-col gap-2 relative">
          <div className="lg:flex gap-3 font-semibold hidden">
            <NavLink to='/'>
              <p className=" cursor-pointer hover:text-orange-600 px-3">HOME</p>
            </NavLink>
            <img src={arrowIcon} alt="arrowIcon" className="w-3" />
            <p className="text-orange-600 cursor-pointer">My Shopping Cart</p>
          </div>

          <div className="lg:border-[1px] border-b-4 border-slate-800 rounded-md flex flex-col">
            <div className="lg:flex hidden gap-40 my-2 border-b-slate-800 border-b-2 lg:border-b-[1px] px-10 py-4">
              <div>
                <p className="font-semibold">Item details</p>
              </div>
              <div>
                <p className="font-semibold">Quantity</p>
              </div>
              <div>
                <p className="font-semibold">Price</p>
              </div>
              <div>
                <p className="font-semibold">Total Price</p>
              </div>
            </div>
            <div className="flex text-base items-center gap-10 border-b-slate-800 py-2 border-b-4 lg:border-b-[1px]">
              <div className="flex items-center px-4">
                <div>
                  <img src={lipstick} alt="lipstick-img" className="w-20" />
                </div>
                <div className="lg:w-40 w-full">
                  <p className="lg:text-gray-500 text-black font-semibold">Avon True Matte Lipstick-Peach coral</p>
                  <p className="text-xs text-gray-500">Product Code: <span className="text-black font-semibold">560203</span></p>
                </div>
              </div>
              <div className="md:flex hidden gap-32 items-center">
                <div className="flex gap-2 items-center font-semibold rounded-lg">
                  <button className="gray rounded-tl-md rounded-bl-md  px-3 py-1" onClick={() => setCount1(count1 - 1)}>-</button>
                  <p>{count1}</p>
                  <button className="gray  rounded-tr-md rounded-br-md px-3 py-1" onClick={() => setCount1(count1 + 1)}>+</button>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" line-through text-gray-400">$100</p>
                  <p className="text-orange-500 font-medium">$75</p>
                </div>
                <div className="flex gap-32">
                  <div>
                    <p className="text-gray-500">$225</p>
                  </div>
                  <div>
                    <img src={trash} alt="trash" className="w-4 cursor-pointer" />
                  </div>
                </div>

              </div>

            </div>

            <div className="flex items-center gap-10 border-b-slate-800 py-2 border-b-4 lg:border-b-[1px]">
              <div className="flex items-center px-4">
                <div>
                  <img src={tp1} alt="product-img" className="w-20" />
                </div>
                <div className="lg:w-40 w-full">
                  <p className="lg:text-gray-500 text-black font-semibold">Apple Iphone 15 Pro-Black</p>
                </div>
              </div>
              <div className="gap-32 md:flex hidden items-center">
                <div className="flex gap-2 items-center font-semibold rounded-lg">
                  <button className="gray rounded-tl-md rounded-bl-md  px-3 py-1" onClick={() => setCount2(count2 - 1)}>-</button>
                  <p>{count2}</p>
                  <button className="gray  rounded-tr-md rounded-br-md px-3 py-1" onClick={() => setCount2(count2 + 1)}>+</button>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" line-through text-gray-400">$1500</p>
                  <p className="text-orange-500 font-medium">$1129</p>
                </div>
                <div className="flex gap-28">
                  <div>
                    <p className="text-gray-500">$1129</p>
                  </div>
                  <div>
                    <img src={trash} alt="trash" className="w-4 cursor-pointer" />
                  </div>
                </div>

              </div>

            </div>

            <div className="flex items-center gap-10 py-4">
              <div className="flex items-center gap-2 px-4">
                <div>
                  <img src={scale} alt="lipstick-img" className="w-20" />
                </div>
                <div className="lg:w-40 w-full">
                  <p className="lg:text-gray-500 text-black font-semibold">Digital Kitchen Scale</p>
                </div>
              </div>
              <div className="md:flex hidden gap-32 items-center">
                <div className="flex gap-2 items-center font-semibold rounded-lg">
                  <button className="gray rounded-tl-md rounded-bl-md  px-3 py-1" onClick={() => setCount3(count3 - 1)}>-</button>
                  <p>{count3}</p>
                  <button className="gray  rounded-tr-md rounded-br-md px-3 py-1" onClick={() => setCount3(count3 + 1)}>+</button>
                </div>
                <div className="flex gap-2 items-center">
                  <p className=" line-through text-gray-400">$150</p>
                  <p className="text-orange-500 font-medium">$100</p>
                </div>
                <div className="flex gap-28">
                  <div>
                    <p className="text-gray-500">$200</p>
                  </div>
                  <div>
                    <img src={trash} alt="trash" className="w-4 cursor-pointer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src={chatIcon} alt="chatIcon" className="w-14 absolute -bottom-4 lg:-right-8 -right-1 cursor-pointer hidden lg:flex" />
        </div>
        <div className="flex flex-col">
          <div className="border-[1px] border-slate-800 rounded-md flex flex-col my-4  py-5 lg:mx-64 mx-4">
            <div>
              <div className=" border-slate-800 border-b-4 lg:border-b-[1px]">
                <p className="font-semibold px-4 py-3">Cart Summary</p>
              </div>
              <div className="flex flex-col border-slate-800 border-b-[1px] py-3 gap-4 font-semibold">
                <div className="flex justify-between px-4">
                  <p >Subtotal</p>
                  <p >$1554</p>
                </div>
                <div className="flex justify-between px-4">
                  <p >Delivery charges</p>
                  <p >$20</p>
                </div>
              </div>
              <div className="flex flex-col py-3 gap-8 font-semibold">
                <div className="flex justify-between px-4">
                  <p >Total charges</p>
                  <p >$1574</p>
                </div>
                <div className="flex justify-center gap-3">
                  <button className="bg-black text-orange-500 px-3 hidden lg:block py-2 rounded-md hover:bg-slate-900 hover:text-white ease-in transition-colors duration-300">Continue shopping</button>
                  <NavLink to='/checkout'>
                    <button className="bg-orange-500 text-black px-10 py-2 rounded-md hidden lg:block  hover:text-white ease-in transition-colors duration-300">Checkout</button>
                    <button className="bg-black text-orange-500 px-10 py-2 rounded-md  block lg:hidden hover:text-white ease-in transition-colors duration-300">Checkout</button>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:flex flex-col gap-1 justify-center hidden mx-64'>
            <div>
              <p className="text-xs text-center font-semibold">Subscribe to our Newsletters for updates on on our services and exclusive offers</p>
            </div>
            <div className="flex gap-1">
              <input type="email" required placeholder='Email Address' className='border-2 border-orange-600 px-4 py-2 w-[40rem]' />
              <button className='bg-orange-600 px-4 py-3 font-semibold'>Subscribe</button>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart