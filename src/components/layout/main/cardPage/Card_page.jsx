import React from 'react';
import classes from './card_page.module.scss'
import  img1 from '../../icon/card/01.svg'
import img2 from '../../icon/card/02.svg'
import img3 from '../../icon/card/03.svg'

import styles from '../../../../styles/global.scss'
import classNames from "classnames";


const CardPage = () => {
    return (
        <div className={classes.card_page}>
            <div className={'_container'}>
                <div className={classes.card_body}>
                    <div className={classes.card_column}>
                        <div className={classes.card_item}>
                            <div className={classes.card_icon}>
                                <img src={img1} alt=""/>
                            </div>
                            <h3 className={classes.card_title}>Environmental Consulting</h3>
                            <div className={classes.card_text}>We focus on ergonomics and meeting you where you work.</div>
                        </div>
                    </div>
                    <div className={classes.card_column}>
                        <div className={classes.card_item}>
                            <div className={classes.card_icon}>
                                <img src={img2} alt=""/>
                            </div>
                            <h3 className={classes.card_title}>Finance and consultancy </h3>
                            <div className={classes.card_text}>Just type what's on your mind and we'll get you there.</div>
                        </div>
                    </div>
                    <div className={classNames(classes.card_column, classes.last_card)}>
                        <div className={classes.card_item}>
                            <div className={classes.card_icon}>
                                <img src={img3} alt={'#'} />
                            </div>
                            <h3 className={classes.card_title }>Financial Services Consulting</h3>
                            <div className={classes.card_text}>the quick fox jumps over the lazy dog</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardPage;