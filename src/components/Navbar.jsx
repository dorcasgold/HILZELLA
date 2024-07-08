import { NavLink } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import banner from '../assets/banner.svg'
import logo from '../assets/Hilzella.svg'

function Navbar() {
  return (
    <>
      <div className='h-6  hidden lg:block'>
        <img src={banner} alt="banner" className="w-ful" />
      </div>
      <nav className="px-10 py-3 mt-10 hidden lg:block">

        <div className="flex justify-between items-center mx-28 h-12">
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
            <ul className='flex gap-28 text-xl font-bold'>
              <NavLink to='/'>
                <li className='cursor-pointer  hover:text-orange-600 '>HOME</li>
              </NavLink>
              <li className='cursor-pointer  hover:text-orange-600'>ABOUT</li>
              <li className='cursor-pointer  hover:text-orange-600'>BLOG</li>
              <li className='cursor-pointer  hover:text-orange-600'>SHOP</li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar