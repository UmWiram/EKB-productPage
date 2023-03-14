import React from "react";

const Footer = () => {
    return (
        <div className="footer"> 
            <div className="container grid grid--footer">
                <div className="logo-col">
                    <a href="#" className="footer-logo">
                        <img src="../images/logo.png" alt="kitty board logo" className="logo" />
                    </a>

                    <ul className="social-link">
                        <li> <a className="footer-link"></a></li>
                        <li> <a className="footer-link"></a></li>
                        <li> <a className="footer-link"></a></li>
                    </ul>

                    <p className="copyright">
                        Copyright &copy; <span className="year">2023</span> by KittyBoards, Inc.
                        All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer