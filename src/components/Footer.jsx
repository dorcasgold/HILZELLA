import { NavLink } from "react-router-dom";
import logo from '../assets/Logo.svg'
import phone from '../assets/icons/phone.svg'
import map from '../assets/icons/location.svg'
import mail from '../assets/icons/Mail.svg'
import InstagramIcon from '../assets/icons/Instagram.svg'
import FacebookIcon from '../assets/icons/Facebook.svg'
import TwitterIcon from '../assets/icons/Twitter.svg'
import TikTokIcon from '../assets/icons/TikTok.svg'
import home from '../assets/icons/home.svg'
import profile from '../assets/icons/profile.svg'
import chat from '../assets/icons/chat-ft.svg'
import cart from '../assets/icons/Vector.svg'

function Footer() {
  return (
    <footer className="lg:bg-black lg:px-5 py-14 text-white ">
      <div className=" items-center flex-col gap-2 mx-8 lg:flex hidden">
        <div className='grid grid-cols-4 gap-x-2 place-content-center'>
          <div className='flex items-center px-2'>
            <div>
              <img src={logo} alt="logo" className='w-40' />
            </div>
            <div className='flex flex-col gap-2'>
              <div>
                <p className='underline font-semibold'>Contact</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={phone} alt="phone-icon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>+234 817 9988 734</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={map} alt="phone-icon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>Computer village, Ikeja, Lagos</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={mail} alt="phone-icon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>Adhil_Ellen@gmail.com</p>
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <div className='flex flex-col gap-2'>
              <div>
                <p className=' underline font-semibold cursor-pointer'>Quick Links</p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className=' hover:text-orange-600 cursor-pointer'>About Us</p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className=' hover:text-orange-600 cursor-pointer'>Blog</p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className=' hover:text-orange-600 cursor-pointer'>Shop</p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className=' hover:text-orange-600 cursor-pointer'>Contact Us</p>
              </div>
            </div>
          </div>
          <div>
            <div className='flex flex-col gap-2'>
              <div>
                <p className=' underline font-semibold'>Follow Us On</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={InstagramIcon} alt="InstagramIcon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>Instagram</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={FacebookIcon} alt="FacebookIcon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>Facebook</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={TwitterIcon} alt="TwitterIcon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>Twitter</p>
              </div>
              <div className='flex gap-1 items-center'>
                <img src={TikTokIcon} alt="TikTokIcon" className=' w-4' />
                <p className='hover:text-orange-600 cursor-pointer'>TikTok</p>
              </div>
            </div>
          </div>
          <div className='flex '>
            <div className='flex flex-col gap-2'>
              <div>
                <p className=' underline font-semibold'>Policies</p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className='hover:text-orange-600 cursor-pointer'>Privacy policy</p>
              </div>
              <div className='flex gap-1 items-center'>
                <p className='hover:text-orange-600 cursor-pointer'>Terms of Service</p>
              </div>
            </div>
          </div>
        </div>

        <div className=' translate-y-10'>
          <p className="text-white">Hilzella © 2024 All rights reserved</p>
        </div>
      </div>

      <div className='flex lg:hidden justify-between border-[1px] border-gray-600 py-3 px-5'>
        <NavLink to='/'>
          <img src={home} alt="home-icon" className='w-8' />
        </NavLink>

        <img src={profile} alt="profile-icon" className='w-8' />
        <img src={chat} alt="chat-icon" className='w-8' />
        <NavLink to='/cart'>
          <img src={cart} alt="cart-icon" className='w-8' />
        </NavLink>
      </div>
    </footer>
  )
}

export default Footer