import React from 'react';
import Layout from '../Layout/Layout'
import PopularMusics from '../Components/Home/PopularMusics';
import Artists from '../Components/Home/Artists';
import Banner from '../Components/Home/Banner';

function HomeScreen() {
  return (
    <Layout>
      <div className='container mx-auto min-h-screen px-2 mb-6 overflow-hidden'>
        <Banner/>
        <PopularMusics/>
        <Artists/>
      </div>
    </Layout>
  )
}

export default HomeScreen
