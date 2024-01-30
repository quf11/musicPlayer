import React from 'react';
import Layout from '../Layout/Layout'
import PopularMusics from '../Components/Home/PopularMusics';
import Artists from '../Components/Home/Artists';
import Banner from '../Components/Home/Banner';

function HomeScreen() {
  return (
    <Layout>
      <div className='container mx-auto bg-dry min-h-screen px-2 overflow-hidden'>
        <Banner/>
        <PopularMusics/>
        <Artists/>
      </div>
    </Layout>
  )
}

export default HomeScreen
