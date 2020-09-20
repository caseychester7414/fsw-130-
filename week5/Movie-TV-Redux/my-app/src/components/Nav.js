import React from 'react'
import {Link} from 'react-router-dom'
 

const Nav = () => {

    return(
        <div className='navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>  
                <li><Link to='/Movies'>Movies</Link></li> 
                <li><Link to='/Shows'>Show</Link></li> 
            </ul>
           
        </div>
    )

}

export default Nav