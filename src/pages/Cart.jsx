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

function Cart() {
  const [count1, setCount1] = useState(3)
  const [count2, setCount2] = useState(1)
  const [count3, setCount3] = useState(2)
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

      <div className="mx-32 my-5 flex flex-col">
        <div className="flex flex-col gap-2 relative">
          <div className="flex gap-3 font-semibold">
            <NavLink to='/'>
              <p className=" cursor-pointer hover:text-orange-600">HOME</p>
            </NavLink>
            <img src={arrowIcon} alt="arrowIcon" className="w-3" />
            <p className="text-orange-600 cursor-pointer">My Shopping Cart</p>
          </div>

          <div className="border-[1px] border-slate-500 rounded-md flex flex-col">
            <div className="flex gap-40 my-2 border-b-slate-500  border-b-[1px] px-10 py-4">
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
            <div className="flex items-center gap-10 border-b-slate-500 py-2 border-b-[1px]">
              <div className="flex items-center px-4">
                <div>
                  <img src={lipstick} alt="lipstick-img" className="w-20" />
                </div>
                <div className="w-40">
                  <p className="text-gray-500 font-semibold">Avon True Matte Lipstick-Peach coral</p>
                  <p className="text-xs text-gray-500">Product Code: <span className="text-black font-semibold">560203</span></p>
                </div>
              </div>
              <div className="flex gap-32 items-center">
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

            <div className="flex items-center gap-10 border-b-slate-500 py-2 border-b-[1px]">
              <div className="flex items-center px-4">
                <div>
                  <img src={tp1} alt="product-img" className="w-20" />
                </div>
                <div className="w-40">
                  <p className="text-gray-500 font-semibold">Apple Iphone 15 Pro-Black</p>
                </div>
              </div>
              <div className="flex gap-32 items-center">
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
                <div className="w-40">
                  <p className="text-gray-500 font-semibold">Digital Kitchen Scale</p>
                </div>
              </div>
              <div className="flex gap-32 items-center">
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
          <img src={chatIcon} alt="chatIcon" className="w-14 absolute -bottom-4 -right-8 cursor-pointer" />
        </div>

        <div className="border-[1px] border-slate-500 rounded-md flex flex-col my-4  py-5 mx-64">
          <div>
            <div className=" border-slate-500 border-b-[1px]">
              <p className="font-semibold px-4 py-3">Cart Summary</p>
            </div>
            <div className="flex flex-col border-slate-500 border-b-[1px] py-3 gap-4 font-semibold">
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
                <button className="bg-black text-orange-500 px-3 py-2 rounded-md hover:bg-slate-900 hover:text-white ease-in-out transition-all duration-400">Continue shopping</button>
                <button className="bg-orange-500 text-black px-10 py-2 rounded-md hover:bg-orange-700 hover:text-white ease-in-out transition-all duration-400">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart