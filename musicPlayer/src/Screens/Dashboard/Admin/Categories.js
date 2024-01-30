import React, { useEffect } from 'react'
import SideBar from './SideBar'
import { Musics } from '../../../Data/MusicData'
import { HiPlusCircle } from 'react-icons/hi'
import Table2 from '../../../Components/Table2'
import { CategoriesData } from '../../../Data/Categories'
import CategorryModal from '../../../Components/Modals/CategorryModal'
import { useState } from 'react'

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();

  const OnEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (modalOpen === false){
      setCategory();
    }
  }, [modalOpen])
  return (
    <div className='min-height-screen'>
      <SideBar>
        <CategorryModal 
        modalOpen={modalOpen} 
        setModalOpen={setModalOpen}
        category={category}
        />
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold text-white'>Categories</h2>
            <button onClick={() => setModalOpen(true)} className='bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded'>
                <HiPlusCircle/> Create
            </button>
            </div>
            <Table2 
            data={CategoriesData}
            OnEditFunction={OnEditFunction}
            />
        </div>
      </SideBar>
    </div>
  )
}

export default Categories
