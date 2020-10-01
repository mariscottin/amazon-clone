import React from 'react'
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'
import ClearIcon from '@material-ui/icons/Clear';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { CSSTransition } from 'react-transition-group';
import { useStateValue } from './StateProvider';

import './Sidebar.css';

function Sidebar(props) {
    const [{ user }, dispatch] = useStateValue();
    const content =
        <CSSTransition in={props.show} timeout={200} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <aside className="sidebar">
                <div className="closeSidebar">
                    <ClearIcon onClick={props.closeDrawerHandler} />
                </div>
                <div className="sidebar__header">
                    <AccountCircleIcon />
                    <span>Hello, {user ? user.email : <Link to="login">Sign in</Link>}</span>
                </div>
                <div className="sidebar__nav">
                    <Link to="/">
                        <div>Home</div>
                    </Link>
                    <div>Account</div>
                    <Link to="/orders">
                        <div>Orders</div>
                    </Link>
                    <div>Buy Again</div>
                    <div>Lists</div>
                    <div>Your Browsing History</div>
                    <div>Your Recommendations</div>
                    <div>Customer Service</div>
                    <div className="sidebar__division"></div>
                    <h3>Explore</h3>
                    <div className="sidebar__subtitle">TOP DEPARTMENTS</div>
                    <div>Home</div>
                    <div>Health &amp; Household</div>
                    <div>Books</div>
                    <div>PC</div>
                    <div>See All Departments {'>'}</div>
                    <div className="sidebar__division"></div>
                    <h3>Settings</h3>
                    <div>English</div>
                    <div>United States</div>
                    <div>{!user && <Link to="/login">Sign In</Link>}</div>
                </div>

            </aside>

        </CSSTransition>

    return ReactDom.createPortal(content, document.getElementById('sidebar-hook'));
}

export default Sidebar;
