import React from 'react';
import { FiSearch } from 'react-icons/fi';

function Search() {
  return (
    <div className='container flex justify-between items-center'>
        <div>
            <div className="search flex">
                <FiSearch className='search-bi'/>
                <input type="text" placeholder="Search Music..."/>
            </div>
        </div>
        <div className='profile mr-10'>
            <div className='rounded-full w-8 h-8'>
              <img className='rounded-full w-full h-full' src='/images/profile.jpg'/>
            </div>
        </div>
    </div>
  )
}

export default Search
