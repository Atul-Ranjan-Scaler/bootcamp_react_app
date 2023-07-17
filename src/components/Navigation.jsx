import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='navigation'>
            <Link className='navigation__navlinks' to='/'>products</Link>
            <Link className='navigation__navlinks' to='/cart'>Cart</Link>    
        </div>
    )
}

export default Navigation;
