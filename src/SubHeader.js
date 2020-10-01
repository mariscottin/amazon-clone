import React from 'react'

import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import './SubHeader.css'
function SubHeader() {
    return (
        <div className="subheader">
            <div className="subheader__deliver">
                <RoomOutlinedIcon />
                <div><small>Deliver to</small> <strong>Argentina</strong></div>
            </div>
            <div className="subheader__nav">
                <ul>
                    <li>Today's Deals</li>
                    <li>Customer Service</li>
                    <li>Gift Cards</li>
                    <li>Registry</li>
                    <li>Sell</li>
                </ul>
            </div>
            <div className="subheader__covid">
                <div>
                    <strong>Amazon's response to COVID-19</strong>
                </div>
            </div>
        </div>
    )
}

export default SubHeader;
