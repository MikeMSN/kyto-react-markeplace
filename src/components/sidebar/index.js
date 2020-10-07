import React from 'react'
import BasketCart from "../basketCart";
import Search from "../search";

const Sidebar = () => {
    return (
        <div>
            <BasketCart></BasketCart>
            <Search/>
        </div>
    )
}

export default Sidebar;