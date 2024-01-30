import React from 'react'
import Layout from '../../Layout/Layout'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'
import { MdSupervisorAccount } from 'react-icons/md'

function Premium() {
    const ContactData = [
        {
          id: 1,
          title:'BASIC',
          price:'57',
          info: 'By purchasing this account, you can use permium songs for one month.',
          icon: FiMail,
          contact:'info@zpunet.com',
        },
        {
          id: 2,
          title:'STANDARD',
          price:'70',
          info: 'By purchasing this account, you can use permium songs for three month.',
          icon: FiPhoneCall,
          contact:'+255 789 456 123',
        },
        {
          id: 3,
          title:'PREMIUM',
          price:'82',
          info: 'By purchasing this account, you can use permium songs for six month.',
          icon: FiMapPin,
          contact:'+255 789 456 123',
        },
      ]
  return (
    <Layout>
        <div className='min-h-screen'>
            <div className='grid md:grid-cols-2 gap-6 lg:my-20 my-4 lg:grid-cols-3 xl:gap-8'>
          {
            ContactData.map((item) =>(
              <div key={item.id} className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'>
                <span className='flex-colo w-20 h-20 rounded-full bg-main text-subMain text-5xl mt-4'>
                    <MdSupervisorAccount/>
                </span>
                <h5 className='text-xl my-3 text-subMain'>
                  {item.title}
                </h5>
                <p className='mb-0 text-sm text-text leading-7'>
                  {item.info}
                </p>
                <button className='bg-main transitions hover:bg-subMain border border-subMain text-white py-2 px-8 rounded w-full sm:w-auto my-6 text-xl'>
                    {item.price}{'$'}
                </button>
              </div>
            ))
          }
            </div>
        </div>
        
    </Layout>
  )
}

export default Premium
