import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";

const home = () => {
  return (
      <div>
      <Announcement/>
      <NavBar/>
      <Slider/>
      </div>

  )
}

export default home