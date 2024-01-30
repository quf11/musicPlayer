import React from 'react';
import { MdDelete } from "react-icons/md";
import { FaEdit } from 'react-icons/fa';
import { CategoriesData } from '../Data/Categories';
import { UsersData } from '../Data/Users';
const Head = 'text-xs text-left text-main font-semibold px-6 py-2 uppercase';
const Text = 'text-sm text-left leading-6 whitespace-nowrap px-5 py-2 text-dryGray';

const Rows = (item,index) => {
    return(
        <tr key={index}>
            <td className={`${Text}`}>
            <div className='w-12 p-1 bg-dry border border-border h-12 rounded overflow-hidden'>
                <img
                    className='h-full w-full object-cover'
                    src={`/images/img/Artists/${item?.poster}`}
                    alt={item?.name}
                />
            </div>
            </td>
            <td className={`${Text} font-bold`}>{item.id}</td>
            <td className={`${Text}`}>
                {item.Date ? item.Date : '12, Jan 2023'}
            </td>
            <td className={`${Text}`}>{item.name}</td>
            <td className={`${Text}`}>{item.email}</td>
            <td className={`${Text} float-right flex-rows gap-2`}>
                <button className='bg-red text-white rounded flex-colo w-7 h-7'>
                    <MdDelete/>
                </button>
            </td>
        </tr>
    )
}

function Table3({data}) {
    return (
        <div className='overflow-y-scroll overflow-auto h-[450px] relative w-full hide-scrollbar'>
        <table className='w-full table-auto border border-border divide divide-border'>
            <thead className='sticky top-0'>
                <tr className='bg-dryGray'>
                            <th scope='col' className={`${Head}`}>
                                Image
                            </th>
                            <th scope='col' className={`${Head}`}>
                                Id
                            </th>
                            <th scope='col' className={`${Head}`}>
                                Date
                            </th>
                            <th scope='col' className={`${Head}`}>
                                Full Name
                            </th>
                            <th scope='col' className={`${Head}`}>
                                Email
                            </th>
                            <th scope='col' className={`${Head} text-end`}>
                                Actions
                            </th>
                </tr>
            </thead>
            <tbody className='bg-main divide-y divide-gray-800'>
                {
                    UsersData.map((item,index) => (
                        Rows(item , index)
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table3
