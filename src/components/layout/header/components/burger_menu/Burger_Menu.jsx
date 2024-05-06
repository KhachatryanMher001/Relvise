import React from 'react';
import classes from './Burger_Menu.module.scss';

function BurgerMenu() {
    let names = ["Home","Product","Pricing","Contact"];

        return(
            <div className={classes.burger_container}>
           <ul  className={classes.list_burger}>
               {names.map((name, index) => (
                   <li key={"Company_info"} className={classes.list_li}><a href={"3"} className={classes.list_text}>{name}</a></li>
               ))}
           </ul>
            </div>
    )
}

export default BurgerMenu;