import React from 'react'
import NavBar from '../components/NavBar'
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import Products from "../components/Products";

const home = () => {
    return (
        <div>
            <Announcement/>
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
        </div>

    )
}

export default home