import React from "react";
import { IconContext } from "react-icons";
import { BsInstagram, BsTwitter, BsYoutube} from "react-icons/bs"

const Footer = () => {
    const year = new Date().getFullYear();

    return (
      <div className="footer">
        <div className="about">
            <p className="footer-title">About</p>
        <p className="about">Kitty Boards is here to bring you some awesome keyboards, ergo keyboards and much more!</p>
        <div className="links">
            <ul>
                <li><a className="nav-link">Terms & Contidions</a></li>
                <li><a className="nav-link">Return Policy</a></li>
                <li><a className="nav-link">Contact Us</a></li>
                <li><a className="nav-link">Terms of Service</a></li>
                <li><a className="nav-link">Refund Policy</a></li>
            </ul>
        </div>
        </div>
        <div className="socials">
            <p className="footer-title">Follow Us</p>
            <IconContext.Provider value={{ size: '1.7em', className: 'react-icons'}}>
                <div className="icons">
                    <a href="#"><BsInstagram /></a>
                    <a href="#"><BsTwitter /></a>
                    <a href="#"><BsYoutube /></a> 
                </div>
            </IconContext.Provider>
        <div className="footer-logo">
            <img src="../images/logo.png" alt="kitty board logo" className="logo" />
        </div>
        <div className="copyright">
            Copyright&copy; {year} by Kitty Boards, Inc.
            All rights reserved.
        </div>
        </div>
      </div> 
    )
}

export default Footer