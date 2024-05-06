import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button__Style.module.scss';

const Button = (props) => {


    return (
        <button className={`${classes.button} ${props.className}`} >
            {props.text}
        </button>
    );
};

export default Button;
