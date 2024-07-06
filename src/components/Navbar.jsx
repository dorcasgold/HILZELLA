import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import logo from '../assets/HILZELLA.png'

function Navbar() {
  return (
    <>
      <div className='bg-black h-6'></div>
      <nav className="px-10 py-3">
        <div className="flex justify-between items-center mx-28 h-12">
          <div className='w-32'>
            <LazyLoadImage
              alt="logo"
              src={logo}
              effect="blur"
            />
          </div>
          <div>
            <ul className='flex gap-28 text-xl font-bold'>
              <li className='cursor-pointer'>HOME</li>
              <li className='cursor-pointer'>ABOUT</li>
              <li className='cursor-pointer'>BLOG</li>
              <li className='cursor-pointer'>SHOP</li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}

export default Navbar