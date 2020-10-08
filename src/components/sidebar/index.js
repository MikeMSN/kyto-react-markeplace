import React from 'react'
import BasketCart from "../basketCart";
import Search from "../search";
import Categories from "../categories";

const Sidebar = () => {
    return (
        <div>
            <BasketCart></BasketCart>
            <Search/>
            <Categories/>
        </div>
    )
}

export default Sidebar;