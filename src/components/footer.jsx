import React from "react";
import { IconContext } from "react-icons";
import { BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"

const Footer = () => {
    return (
      <div className="footer">
        <div className="about">
            <p className="footer-title">About</p>
        <p className="about">Kitty Boards is here to bring you some awesome keyboards, ergo keyboards and much more!</p>
        <div className="links">
            <ul>
                <li>Terms & Conditions</li>
                <li>Return Policy</li>
                <li>Contact Us</li>
                <li>Terms of Service</li>
                <li>Refund Policy</li>
            </ul>
        </div>
        </div>
        <div className="socials">
            <p className="footer-title">Follow Us</p>
            <IconContext.Provider value={{ size: '1.7em', className: 'react-icons'}}>
                <div className="icons">
                    <BsInstagram />
                    <BsTwitter />
                    <BsYoutube />
                </div>
            </IconContext.Provider>
        <div className="footer-logo">
            <img src="../public/images/logo.png" alt="kitty board logo" className="logo" />
        </div>
        <div className="copyright">
            Copyright&copy; 2023 by Kitty Boards, Inc.
            All rights reserved.
        </div>
        </div>
      </div> 
    )
}

export default Footer