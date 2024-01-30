import React from 'react';
import SideBar from './SideBar';
import { UsersData } from '../../../Data/Users';
import Table3 from '../../../Components/Table3';

function Users() {
  return (
    <div className='min-height-screen'>
      <SideBar>
        <div className='flex flex-col gap-6'>
            <div className='flex-btn gap-2'>
            <h2 className='text-xl font-bold text-white'>Users</h2>
            </div>
            <Table3 data={UsersData}/>
        </div>
      </SideBar>
    </div>
  )
}

export default Users
