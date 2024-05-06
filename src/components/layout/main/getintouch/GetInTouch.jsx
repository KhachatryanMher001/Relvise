import React from 'react';
import classes from './GetInTouchStyle.module.scss';

const GetInTouch = () => {
    return (
            <div className="page_getintouch">
                <div className="_container">
                    <div className=" designing_content">
                        <h2 className="  designing_title">Get In Touch</h2>
                        <div className=" designing_text">Problems trying to resolve the conflict between
                            the two major realms of Classical physics: Newtonian mechanics   </div>
                    </div>
                    <div className="getintouch_cards">
                        <div className="getintouch_card">
                            <div className="getintouch_icon">
                                <img src="./icon/getintouch/01.svg"/>
                            </div>
                            <div className="getintouch_email">
                                <a href="#" className="example">georgia.young@example.com</a>
                                <a href="#" className="example">georgia.young@ple.com</a>
                            </div>
                            <h5 className="getintouch_title">Get Support</h5>
                            <button className="getintouch_button">Submit Request</button>
                        </div>
                        <div className="getintouch_card">
                            <div className="getintouch_icon">
                                <img src="./icon/getintouch/02.svg"/>
                            </div>
                            <div className="getintouch_email">
                                <a href="#" className="example">georgia.young@example.com</a>
                                <a href="#" className="example">georgia.young@ple.com</a>
                            </div>
                            <h5 className="getintouch_title">Get Support</h5>
                            <button className="getintouch_button">Submit Request</button>
                        </div>
                        <div className="getintouch_card">
                            <div className="getintouch_icon">
                                <img src="./icon/getintouch/03.svg" />
                        </div>
                        <div className="getintouch_email">
                            <a href="#" className="example">georgia.young@example.com</a>
                            <a href="#" className="example">georgia.young@ple.com</a>
                        </div>
                        <h5 className="getintouch_title">Get Support</h5>
                        <button className="getintouch_button">Submit Request</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetInTouch;