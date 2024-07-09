import { useState } from 'react';
import { NavLink } from "react-router-dom";
import list from '../assets/icons/list.svg'
import search from '../assets/icons/icon.svg'
import personIcon from '../assets/icons/person.svg'
import shopIcon from '../assets/icons/Vector.svg'
import arrowIcon from '../assets/icons/arrow.svg'
import chat from '../assets/icons/Chat Bubble.svg'
import card from '../assets/icons/card.svg'
import giftcard from '../assets/icons/Gift Card.svg'
import blackArrow from '../assets/icons/black-arrow.svg'
import touch from '../assets/icons/Touch ID.svg'

const data = {
  "United States": ["California", "Texas", "Florida", "New York", "Pennsylvania"],
  Nigeria: ["Lagos", "Abuja", "Rivers", "Kano", "Kaduna"],
  Canada: ["Ontario", "Quebec", "British Columbia", "Alberta", "Manitoba"],
  Australia: ["New South Wales", "Victoria", "Queensland", "Western Australia", "South Australia"],
  "United Kingdom": ["England", "Scotland", "Wales", "Northern Ireland"],
};

function Checkout() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedState(''); // Reset state when country changes
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div>
      <div className='orange lg:flex hidden px-4 w-full h-16 '>
        <div className='top flex lg:mx-28 gap-0 lg:gap-4 items-center'>
          <div className='lg:bg-black text-white flex justify-center items-center px-1 lg:px-[26px] h-16'>
            <img src={list} alt="list-icon" className="block w-8" />
            <div className="hidden lg:block">
              <p className='text-2xl font-semibold '>Categories</p>
            </div>
          </div>
          <div className='flex gap-8 lg:gap-40'>
            <div className=' flex items-center'>
              <img src={search} alt="search" className='w-5 left-2 cursor-pointer translate-x-8 lg:translate-x-12' />
              <input type="text" className='lg:py-2 py-1 lg:pl-14 px-7 rounded-2xl lg:rounded-r-none lg:rounded-l-2xl lg:w-72 w-56 placeholder:text-sm  placeholder:pl-5 outline-none' placeholder='Enter your keyword' />
              <p className='bg-black h-10 w-8 rounded-r-2xl hidden lg:block'></p>
            </div>
            <div className='flex gap-14 items-center'>
              <div className='bg-white hidden lg:block px-2 py-2 rounded-3xl cursor-pointer transition-all duration-300 ease-in transform hover:bg-orange-600'>
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
      <div className="lg:mx-32 flex flex-col mb-4 overflow-x-hidden">
        <div className="lg:flex hidden gap-3 font-semibold my-4">
          <NavLink to='/'>
            <p className=" cursor-pointer hover:text-orange-600">HOME</p>
          </NavLink>
          <img src={arrowIcon} alt="arrowIcon" className="w-3" />
          <p className="text-orange-600 cursor-pointer">Checkout</p>
        </div>
        <div className="px-2 orange py-4 font-semibold flex flex-col gap-2 lg:hidden">
          <div className="flex gap-3 px-2">
            <NavLink to='/'>
              <img src={blackArrow} alt="arrowIcon" className="w-3" />
            </NavLink>
            <p>Continue shopping</p>
          </div>
          <div>
            <p className="px-6 text-3xl font-bold">Checkout</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 mx-4 font-semibold">
          <div className='hidden lg:flex'>
            <p>ADD AN ADDRESS</p>
          </div>
          <div className="flex flex-col gap-2 'hidden lg:flex">
            <div>
              <p>Country/Region</p>
            </div>
            <div className="flex items-center">
              <div className="relative inline-block w-[56rem]">
                <select
                  name="Country"
                  id="Country"
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="block appearance-none w-full gray border cursor-pointer border-gray-300 text-gray-600 px-8 py-2 rounded-2xl leading-tight focus:outline-none focus:shadow-outline"
                >
                  <option value="" disabled>Select a country</option>
                  {Object.keys(data).map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M7 10l5 5 5-5H7z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {selectedCountry && (
            <div className="flex-col gap-2 flex">
              <div>
                <p>State</p>
              </div>
              <div className="flex items-center">
                <div className="relative inline-block w-[56rem]">
                  <select
                    name="State"
                    id="State"
                    value={selectedState}
                    onChange={handleStateChange}
                    className="block appearance-none w-full gray border cursor-pointer border-gray-300 text-gray-600 px-8 py-2 rounded-2xl leading-tight focus:outline-none focus:shadow-outline"
                  >
                    <option value="" disabled>Select a state</option>
                    {data[selectedCountry].map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-600">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M7 10l5 5 5-5H7z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col gap-2">
            <div>
              <p>Full name (First and Last name)</p>
            </div>
            <div>
              <input type="text" placeholder="Hailey Shipman" className="border-[1px] border-gray-500 px-3 py-2 w-[23rem] lg:w-[56rem] rounded-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p>Phone number</p>
            </div>
            <div>
              <input type="text" placeholder="+1 (346) 972-8012" className="border-[1px] border-gray-500 px-3 py-2 w-[23rem] lg:w-[56rem] rounded-2xl" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p>Address</p>
            </div>
            <div className="flex flex-col gap-1">
              <input type="text" placeholder="John Smith, 1234 Elm Street" className="border-[1px] border-gray-500 px-3 py-2 w-[23rem] lg:w-[56rem] rounded-2xl" />
              <input type="text" placeholder="Apt 46, Springfield, IL 62704, USA" className="border-[1px] border-gray-500 px-3 py-2 w-[23rem] lg:w-[56rem] rounded-2xl" />
            </div>
          </div>

          <div className="flex justify-between w-[56rem]">
            <div className="flex flex-col gap-3 left">
              <div className=" lg:flex gap-3 hidden">
                <div className="flex flex-col gap-1">
                  <p>City</p>
                  <input type="text" placeholder="Los Angeles" className="border-[1px] border-gray-500 py-1 rounded-md px-3 w-40" />
                </div>
                <div className="flex flex-col gap-1">
                  <p>ZIP Code</p>
                  <input type="text" placeholder="90012" className="border-[1px] border-gray-500 py-1 rounded-md px-3 w-40" />
                </div>
              </div>
              <div className='lg:flex hidden'>
                <div className="flex gap-1">
                  <input type="checkbox" className="w-10 cursor-pointer px-2 " />
                  <p>Make this my default address</p>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <p>PAYMENT INFORMATION</p>
                <div>
                  <p className='lg:block hidden'>Credit/Debit card</p>
                  <div className='flex items-center my-2'>
                    <div className="border-[1px] border-gray-500 rounded-md flex items-center px-2 h-8 rounded-r-none">
                      <img src={card} alt="card-logo" className='w-10 bg-black h-6 p-0' />
                    </div>
                    <div>
                      <input type="text" placeholder='**** **** **** 9947' className="border-[1px] border-gray-500 py-1 rounded-l-none rounded-md px-3 w-72 lg:w-44 outline-none" />
                    </div>
                  </div>
                  <div className='lg:hidden flex items-center'>
                    <div className="border-[1px] border-gray-500 rounded-md flex items-center px-2 h-8 rounded-r-none">
                      <img src={giftcard} alt="card-logo" className='w-10 bg-black h-6 p-0' />
                    </div>
                    <div>
                      <input type="text" placeholder='1 578 938 221' className="border-[1px] border-gray-500 py-1 rounded-l-none rounded-md px-3 w-72 lg:w-44 outline-none" />
                    </div>
                  </div>
                </div>
                <div className='lg:block hidden'>
                  <p>Gift card, voucher or promotional code</p>
                  <div className='flex items-center'>
                    <div className="border-[1px] border-gray-500 gray rounded-md flex items-center px-5 cursor-pointer h-8 rounded-r-none">
                      <button>+</button>
                    </div>
                    <div>
                      <input type="text" placeholder='YN007' className="border-[1px] border-gray-500 py-1 rounded-l-none rounded-md px-3 w-28 outline-none" />
                    </div>
                    <div className='ml-2'>
                      <button className='bg-black text-orange-600 px-4 py-1 rounded-md'>Apply</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='lg:flex hidden'>
              <img src={chat} alt="chat" className="w-11 cursor-pointer" />
            </div>
          </div>
          <div className='lg:flex hidden justify-center flex-col ml-20 gap-2'>
            <div className='mx-80 cursor-pointer'>
              <p className='bg-orange-600 px-3 w-32 py-2 rounded-md text-center'>Payment</p>
            </div>
            <p className='ml-14 hidden lg:flex'>Subscribe to our Newsletters for updates on on our services and exclusive offers</p>
            <div className="lg:flex gap-1 hidden">
              <input type="email" required placeholder='Email Address' className='border-2 border-orange-600 px-4 py-2 w-[40rem]' />
              <button className='bg-orange-600 px-4 py-3 font-semibold'>Subscribe</button>
            </div>
          </div>
          <div className='flex justify-center -translate-y-10'>
            <img src={touch} alt="touchId" className='w-40 cursor-pointer' />
          </div>
        </div>
      </div >
    </div >
  )
}

export default Checkout;
