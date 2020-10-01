import React from 'react'
import UsFlag from './usflag.png';
import LanguageIcon from '@material-ui/icons/Language';

import './Footer.css';
function Footer() {
    return (
        <footer className="footer">
            <a href="#nav" style={{ textDecoration: 'none' }}>
                <div className="footer__top">
                    Back to top
                </div>
            </a>
            <div className="footer__container">
                <div className="footer__column">
                    <h4>Get to Know Us</h4>
                    <p>Careers</p>
                    <p>Blog</p>
                    <p>About Amazon</p>
                    <p>Investor Relations</p>
                    <p>Amazon Devices</p>
                    <p>Amazon Tours</p>
                </div>
                <div className="footer__column">
                    <h4>Make Money with Us</h4>
                    <p>Sell products on Amazon</p>
                    <p>Sell apps on Amazon</p>
                    <p>Become an Affiliate</p>
                    <p>Advertise Your Products</p>
                    <p>Self-Publish with Us</p>
                    <p>Host an Amazon Hub</p>
                    <p>See More Make Money with Us</p>
                </div>
                <div className="footer__column">
                    <h4>Amazon Payment Products</h4>
                    <p>Amazon Business Card</p>
                    <p>Shop with Points</p>
                    <p>Reload Your Balance</p>
                    <p>Amazon Currency Converter</p>
                </div>
                <div className="footer__column">
                    <h4>Let Us Help You</h4>
                    <p>Amazon and COVID-19</p>
                    <p>Your Account</p>
                    <p>Your Orders</p>
                    <p>Shiping Rates &amp; Policies</p>
                    <p>Amazon Prime</p>
                    <p>Returns &amp; Replacements</p>
                    <p>Manage Your Content and Devices</p>
                    <p>Amazon Assistant</p>
                    <p>Help</p>
                </div>
            </div>
            <div className="footer__bottom">
                <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon Logo" className="footer__logo" />
                <div className="footer__bottomButton"><LanguageIcon className="footer__lang-icon" /> English</div>
                <div className="footer__bottomButton"><span style={{ color: '#fff' }}>$</span> USD - U.S. Dollar</div>
                <div className="footer__bottomButton"><span className="footer__usIcon"><img src={UsFlag} alt="USA Flag" /></span>United States</div>
            </div>
            <div className="footer__end">
                <span>Conditions of Use</span>
                <span>Privacy Notice</span>
                <span>Interest-Based Ads</span>
                <span style={{ color: '#999999' }}>&copy; 1996-2020, Amazon.com, Inc. or its affiliates</span>
            </div>

        </footer>
    )
}

export default Footer;
