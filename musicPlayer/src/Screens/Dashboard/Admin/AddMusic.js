import React from 'react'
import SideBar from './SideBar'
import { Input } from '../../../Components/UsedInputDashboard'
import Uploder from '../../../Components/Uploder'
import MusicUploader from '../../../Components/MusicUploader'
import { Select } from '../../../Components/UsedInput'
import { CategoriesData } from '../../../Data/Categories'



function AddMusic() {
  return (
    <SideBar>
        <div className='flex flex-col gap-6'>
        <h2 className='text-xl text-white font-bold'>Create Music</h2>
        <div className='w-full grid md:grid-cols-2 gap-6'>
            <Input 
            label='Music Title' 
            placeholder='Dead Inside' 
            type='text' 
            bg={true}
            />
            <Input
            label='Duration'
            placeholder='3 min'
            type='text'
            bg={true}
            />
        </div>
        <div className='w-full grid md:grid-cols-2 gap-6'>
            <Input 
            label='Language' 
            placeholder='English' 
            type='text' 
            bg={true}
            />
            <Input
            label='Year'
            placeholder='2003'
            type='text'
            bg={true}
            />
        </div>
        {/* images */}
        <div className='w-full'>
            <p className="text-border font-semibold">image</p>
            <Uploder/>
        </div>
        {/* category */}
        <div className='text-sm w-full'>
          <Select label='Music Category' options={CategoriesData}/>
        </div>
        <div className='w-full'>
            <p className="text-border font-semibold">Music File</p>
            <MusicUploader/>
        </div>
        <div className='flex justify-end items-center my-4'>
          <button className='bg-main font-medium transitions hover:bg-subMain border border-subMain text-white py-3 px-6 rounded w-full sm:w-auto'>
            Change Password
          </button>
        </div>
      </div>
    </SideBar>
  )
}

export default AddMusic
