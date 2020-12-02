import React, {useContext, useState} from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import classes from './Header.module.css';
import { ThemeContext } from '../../ThemeContext';




const Header = () => {

    const [theme, setTheme] = useContext(ThemeContext);

    return (
        <div className={classes.Header}>
            <Logo />
            <Navigation />
            
            
        </div>
    );
}

export default Header;