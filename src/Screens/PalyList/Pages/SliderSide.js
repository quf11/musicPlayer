import React from 'react'
import SideBar from '../SideBar'
import SliderComponent from '../../../Components/PlayList/Slider'
import Suggestion from '../../../Components/PlayList/Suggestion'



function SliderSide() {
  return (
    <div>
      <SideBar>
        <SliderComponent/>
        <Suggestion/>
      </SideBar>
    </div>
    
  )
}

export default SliderSide
