import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { PiMusicNotesSimpleDuotone } from 'react-icons/pi';
import { FaHeart } from 'react-icons/fa';
import { CgUser } from 'react-icons/cg';
import { FiSearch } from 'react-icons/fi';

function NavBar() {

  const hover =  'hover:text-subMain transitions text-white';
  const Hover =({isActive}) => (isActive ? 'text-subMain' : hover);

  return (
    <>
    <div className='bg-main sticky top-0 z-20 shadow-2xl'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
            {/* {logo} */}
            <div className='col-span-1/2 lg:block hidden'>
                <Link to='/'>
                    {/* <PiMusicNotesSimpleDuotone className='text-subMain w-full text-3xl'/> */}
                    <img src='/images/logo.png' alt='logo' className='w-full h-12 objact-contain' />
                </Link>
            </div>
            {/* search form */}
            <div className='col-span-3'>
                <div class="search flex">
                    <FiSearch className='search-bi'/>
                    <input type="text" placeholder="Search Music..."/>
                </div>
            </div>
            {/* menus */}
            <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex items-center'>
                <NavLink to='/' className={Hover}>
                    Home
                </NavLink>
                <NavLink to='/playlist' className={Hover}>
                    PlayList
                </NavLink>
                <NavLink to='/artists' className={Hover}>
                    Artist
                </NavLink>
                <NavLink to='/premium' className={Hover}>
                    Premium
                </NavLink>
                <NavLink to='/login' className={Hover}>
                    <CgUser className='w-8 h-8' />
                </NavLink>
            </div>
        </div>
    </div>
    </>
  )
}

export default NavBar
