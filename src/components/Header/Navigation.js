import classes from './Navigation.module.css';
import React, {useContext, useState} from 'react';
import NavigationItem from './NavigationItem';
import ReactDOM from 'react-dom';
import Switch from '@material-ui/core/Switch';

import {ThemeContext} from '../../ThemeContext';



const Navigation = () => {

    const [theme,setTheme] = useContext(ThemeContext);


    const changeTheme = () => {
        if(theme === "day") {
            setTheme("night");
        }
        else {
            setTheme("day");
        }
    }

    return (
        
            
               
                    <ul className={classes.Navigation}>
                        <NavigationItem > Home </ NavigationItem>
                        <NavigationItem > About </ NavigationItem>
                        <NavigationItem > Contact </ NavigationItem>
                        <Switch  onChange={changeTheme} />
                    </ul>
                
            
            
        
        
    );
}

export default Navigation;