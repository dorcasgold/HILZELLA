import { NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import banner from '../assets/banner.svg'
import logo from '../assets/Hilzella.svg'

function Navbar() {
  return (
    <>
      <div className='h-6  hidden md:block'>
        <img src={banner} alt="banner" className="w-ful" />
      </div>
      <nav className="px-10 py-3 mt-10 hidden md:block">

        <div className="flex justify-between items-center lg:mx-28 mx-20 h-12">
          <div className='w-32'>
            <NavLink to="/">
              <LazyLoadImage
                alt="logo"
                src={logo}
                effect="blur"
              />
            </NavLink>
          </div>
          <div>
            <ul className='flex gap-28 text-lg font-medium'>
              <NavLink to='/'>
                <li className='cursor-pointer  hover:text-orange-600 '>HOME</li>
              </NavLink>
              <li className='cursor-pointer  hover:text-orange-600'>ABOUT</li>
              <li className='cursor-pointer  hover:text-orange-600'>BLOG</li>
              <li className='cursor-pointer  hover:text-orange-600'>SHOP</li>
              <li className='cursor-pointer  hover:text-orange-600'>CONTACT US</li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar