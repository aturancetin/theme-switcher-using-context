import react from 'react';
import classes from './Info.module.css';

const Info = () => {

    return (
        <div className={classes.Info}>
            <h2>The purpose of this project is to study ContextAPI and understand how it works.</h2>
            <h3>By simply changing the switch button in the navigation,<br/> you can change the theme state in the App level by using ThemeContext.</h3>
            
        </div>
        
    );
}

export default Info;