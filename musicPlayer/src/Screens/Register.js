import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInput'
import { Link } from 'react-router-dom'
import { FiLogIn } from 'react-icons/fi'

function Register() {
  return (
    <>
    <Layout>
        <div className='container mx-auto px-2 my-20 flex-colo' style={{height:"61vh"}}>
            <div className='w-full 2xl:w-2/5 gap-8 flex-colo p-12 md:w-3/5 bg-dry rounded-lg border border-border'>
                {/* <img src='/images/logo.png' alt='logo' className='w-full h-12 object-contain'/> */}
                <Input lable='FullName' placeholder='nastaranSaber' type='text' bg={true} />
                <Input lable='Email' placeholder='musico@gmail.com' type='email' bg={true} />
                <Input lable='Password' placeholder='********' type='password' bg={true} />
                <Link to='/dashboard' className='bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full'>
                  <FiLogIn/>Sign Up
                </Link>
                <p className='text-center text-border'>
                  Already have an account?{' '}
                  <Link to='/login' className='text-dryGray font-semibold ml-2'>Sign In</Link>
                </p>
            </div>
        </div>
    </Layout>
    </>
  )
}

export default Register
