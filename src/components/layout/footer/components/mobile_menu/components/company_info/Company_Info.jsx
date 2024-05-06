import React from 'react';
import classes from './Company_Info.module.scss';

function Company_Info() {
    let name = ["Home","Product","Pricing","Contact"];

    return(
        <div className={classes.burger_container}>
            <ul  className={classes.list_burger}>
                {name.map((names, index) => (
                    <li key={"Company_info"} className={classes.list_li}><a href="#" className={classes.list_text}>{name}</a></li>
                ))}
            </ul>
        </div>
    )
}

export default Company_Info;