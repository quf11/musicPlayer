import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {

    const active = 'bg-dryGry text-subMain'
    const hover = 'hover:text-white hover:bg-main'
    const inActive = 'rounded font-medium text-sm transitions flex gap-3 items-center p-2'
    const inActive1 = 'rounded font-medium text-sm transitions flex gap-3 items-center text-subtitle p-2'
    const Hover = ({isActive}) =>
        isActive ? `${active} ${inActive}` : `${inActive1} ${hover}`

    const NavBarLink = [
        {
            name : 'Favorate',
            link : '/playlist/favorate'
        },
        {
            name : 'Recently',
            link : '/playlist/recently'
        },
        {
            name : 'Downloded',
            link : '/playlist/downloaded'
        },
    ]

  return (
    <nav>
    <div className="flex items-center gap-5">
        {
            NavBarLink.map((item , index) => (
                <Link to={item.link} key={index} className='rounded font-medium text-sm transitions flex gap-3 items-center p-2'>
                    {item.name}
                </Link>
            ))
        }
    </div>
  </nav>
  )
}

export default NavBar
