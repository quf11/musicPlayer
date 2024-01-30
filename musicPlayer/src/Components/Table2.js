import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { CategoriesData } from '../Data/Categories';
const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase';
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-2 text-dryGray';

const Rows = (item,index) => {
    return(
        <tr key={index}>
            <td className={`${Text} font-bold`}>{item.id}</td>
            <td className={`${Text}`}>
                {item.createAt ? item.createAt : '12, Jan 2023'}
            </td>
            <td className={`${Text}`}>{item.title}</td>
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

function Table2({data}) {
    return (
        <div className='overflow-y-scroll overflow-auto h-[450px] relative w-full hide-scrollbar'>
        <table className='w-full table-auto border border-border divide divide-border'>
            <thead className='sticky top-0'>
                <tr className='bg-dryGray'>
                            <th scope='col' className={`${Head}`}>
                                Id
                            </th>
                            <th scope='col' className={`${Head}`}>
                                Date
                            </th>
                            <th scope='col' className={`${Head}`}>
                                Title
                            </th>
                            <th scope='col' className={`${Head} text-end`}>
                                Actions
                            </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {
                    CategoriesData.map((item,index) => (
                        Rows(item , index)
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table2
