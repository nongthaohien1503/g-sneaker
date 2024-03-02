import React, { useState } from 'react'
import '../App'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return (
        <div className='navbar'>
            <div><h1><Link to="/">Our Products</Link></h1></div>
            <div>
                <h2><Link to="/cart">Cart</Link></h2>
            </div>
        </div>
    )
}

export default Navbar;