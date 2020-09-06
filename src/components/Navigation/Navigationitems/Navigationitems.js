import React from 'react';
import './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem';

const naviationItems = ()=>(
    <ul className='NavigationItems'>
        <NavigationItem link={'/'} active={true}>Burger Builder</NavigationItem>

        <NavigationItem link={'/'}>CheckOut</NavigationItem>

    </ul>
);

export default naviationItems;  