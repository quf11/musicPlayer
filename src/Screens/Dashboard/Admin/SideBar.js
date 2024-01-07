import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaHeart, FaListAlt, FaUsers } from 'react-icons/fa'
import { FiSettings } from 'react-icons/fi'
import { RiLockPasswordLine , RiMovie2Fill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'
import Layout from '../../../Layout/Layout'

function SideBar({children}) {

//   const active = 'bg-dry-gray text-subMain'
//   const hover = 'hover:text-white hover:bg-main'
//   const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-4'
//   const Hover = ({isActive}) => 
//     isActive ? `${active} ${inActive}` : `${inActive} ${hover}`;
  

    const active = 'rounded font-medium text-sm transitions flex gap-3 items-center p-4 bg-dryGry text-subMain'
    const hover = 'rounded font-medium text-sm transitions flex gap-3 items-center text-white p-4 hover:text-subMain hover:bg-main'

    const Hover = ({isActive}) =>
        isActive ? `${active}` : `${hover}`


  const SideLink = [
    {
      name:'Dashboard',
      link:'/dashboard',
      icon:BsFillGridFill
    },
    {
      name:'Music List',
      link:'/musiclist',
      icon:FaListAlt
    },
    {
      name:'Add Music',
      link:'/addmusic',
      icon:RiMovie2Fill
    },
    {
      name:'Categories',
      link:'/categories',
      icon:RiMovie2Fill
    },
    {
      name:'Users',
      link:'/users',
      icon:FaUsers
    },
    {
      name:'Update Profile',
      link:'/profile',
      icon:FiSettings
    },
    {
      name:'Change Password',
      link:'/password',
      icon:RiLockPasswordLine
    },
  ]
  return (
    <Layout>
      <div className='min-h-screen container mx-auto px-2'>
        <div className='xl:grid grid-cols-8 gap-10 md:py-12 py-6'>
          <div className='col-span-2 sticky bg-main border border-gray-800 p-6 rounded-md xl:mb-0 mb-5'>
            {
              //SideBar Links
              SideLink.map((link , index) => (
                <NavLink to={link.link} key={index} className={Hover}>
                  <link.icon/>
                  <p>{link.name}</p>
                </NavLink>
              ))
            }
          </div>
          <div 
          data-aos='fade-up'
          data-aos-duration='1000'
          data-aos-delay='10'
          data-aos-offset='100'
          className='col-span-6 rounded-md bg-main border border-gray-800 p-6'>
            {children}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default SideBar
