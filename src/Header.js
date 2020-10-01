import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import Sidebar from './Sidebar';
import BackDrop from './Backdrop';
import SubHeader from './SubHeader';
import UsFlag from './usflagbig.png';
import './Header.css';

function Header() {
    const [{ basket, user, drawerIsOpen }, dispatch] = useStateValue();
    // const [drawerIsOpen, setDrawerIsOpen] = useState(false);
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    const closeDrawerHandler = () => {
        dispatch({
            type: 'CLOSE_DRAWER'
        });
        document.body.classList.remove('sidebar__open');
    }

    const openDrawerHandler = () => {
        dispatch({
            type: 'OPEN_DRAWER'
        });
        document.body.classList.add('sidebar__open');
    }

    return (
        <>
            {drawerIsOpen && <BackDrop onClick={closeDrawerHandler} />}
            <Sidebar show={drawerIsOpen} onClick={closeDrawerHandler} closeDrawerHandler={closeDrawerHandler} />
            <div className='header' id="nav">
                <div className="header__hamburgerLogoContainer">
                    <div className="header__hamburger" onClick={openDrawerHandler}>
                        <span className="header__topBun"></span>
                        <span className="header__centerBun"></span>
                        <span className="header__bottomBun"></span>
                    </div>
                    <Link to="/">
                        <div className="header__logoContainer">
                            <img src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' className="header__logo" alt="Amazon_Logo" />
                        </div>
                    </Link>
                </div>

                <div className="header__search">
                    <div className="header__searchDropdown">All &#9662;</div>
                    <input className="header__searchInput" type="search" placeholder="Search Amazon" />
                    <SearchIcon className="header__searchIcon" />
                </div>
                <div className="header__nav">
                    <div className="header__option header__countryOption">
                        <span><img src={UsFlag} alt="USA Flag" /> &#9662;</span>
                    </div>
                    <Link to={!user && "/login"}>
                        <div onClick={handleAuthentication} className="header__option">
                            <span className='header__optionLineOne'>Hello {user ? user.email : 'Guest'}</span>
                            <span className='header__optionLineTwo'>{!user ? 'Sign In' : 'Sign Out'}</span>
                        </div>
                    </Link>
                    <Link to="/orders">
                        <div className="header__option header__returns">
                            <span className='header__optionLineOne'>Returns</span>
                            <span className='header__optionLineTwo'>&amp; Orders</span>
                        </div>
                    </Link>
                    <Link to="/checkout">
                        <div className="header__optionBasket">
                            <span><ShoppingCartIcon /> <span className="header__cartText">cart</span></span>
                            <span className="header__optionLineTwo header__basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                </div>
            </div>
            <SubHeader />
        </>
    )
}

export default Header
