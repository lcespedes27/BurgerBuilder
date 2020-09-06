import React from 'react';
import './Toolbar.css'
import Logo from '../../Logo/Logo';
import NavigationItems from '../Navigationitems/Navigationitems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DraweToggle'

const toolbar= (props)=>(

    <header className='Toolbar'>
        <DrawerToggle clicked = {props.drawerToggleClicked}>Menu</DrawerToggle>
        <Logo height={'80%'}/>

        <nav className='DesktopOnly'>
            <NavigationItems/>
        </nav>
    </header>


);

export default toolbar;