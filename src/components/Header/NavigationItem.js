import classes from './NavigationItem.module.css';
import React from 'react';



const NavigationItem = (props) => {

    return (
        <li className={classes.NavigationItem}><a href="#">{props.children}</a></li>
    );
}

export default NavigationItem;