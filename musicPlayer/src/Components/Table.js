import React from 'react';
import { MdDelete } from "react-icons/md";
import { Musics } from '../Data/MusicData';
import { FaEdit } from 'react-icons/fa';
const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase';
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-2 text-dryGray';

const Rows = (item,index) => {
    return(
        <tr key={index}>
            <td className={`${Text}`}>
            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                <img
                    className='h-full w-full object-cover'
                    src={`/images/img/${item?.poster}`}
                    alt={item?.name}
                />
            </div>
            </td>
            <td className={`${Text} truncate`}>{item.name}</td>
            <td className={`${Text}`}>{item.category}</td>
            <td className={`${Text}`}>{item.language}</td>
            <td className={`${Text}`}>{item.year}</td>
            <td className={`${Text}`}>{item.duration}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
                <button className='border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2'>
                    Edit <FaEdit className='text-green-500'/>
                </button>
                <button className='bg-red text-white rounded flex-colo w-7 h-7'>
                    <MdDelete/>
                </button>
            </td>
        </tr>
    )
}

function Table({data}) {
    return (
        <div className='overflow-y-scroll overflow-auto h-[450px] relative w-full hide-scrollbar'>
        <table className='w-full table-auto border border-border divide divide-border'>
            <thead className='sticky top-0'>
                <tr className='bg-dryGray'>
                    <th scope='col' className={`${Head}`}>
                        Image
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Name
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Category
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Language
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Year
                    </th>
                    <th scope='col' className={`${Head}`}>
                        Hours
                    </th>
                    <th scope='col' className={`${Head} text-end`}>
                        Actions
                    </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {
                    Musics.map((item,index) => (
                        Rows(item , index)
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table
