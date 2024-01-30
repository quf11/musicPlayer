import React from 'react'
import Layout from '../Layout/Layout'
import Artist from '../Components/Artist'
import { Data } from '../Data/ArtistsData'
import { CgSpinner } from 'react-icons/cg';
import { useState } from 'react';

function Artists() {

  const maxPage = 8;
  const [page , setPage] = useState(maxPage)
  const HandleLoadingMore = () =>{
    setPage(page + maxPage)
  }

  return (
    <Layout>
      <div className='grid sm:mt-10 mt-6 xl:grid-cols-5 2xl:grid-cols-6 lg:grid-cols-4 sm:grid-cols-3 gap-6'>
              {
                Data.slice(0,page)?.map((artist , index)=>(
                  <Artist key={index} artist={artist} />
                ))
              }
      </div>
      <div className='w-full flex-colo md:my-20 my-10'>
              <button onClick={HandleLoadingMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
                Loading More <CgSpinner className='animate-spin'/>
              </button>
            </div>
    </Layout>
  )
}

export default Artists
