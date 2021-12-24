import React from 'react'
import './topbar.css'

function Topbar() {
    return (
        <div className='top'>
            <div className="topleft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topcenter">
                <ul className='topList'>
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topright">
                <img className='topImg'
                    src="https://i1.sndcdn.com/avatars-k0SQo3oo51uURa2y-OPg3lA-t500x500.jpg" alt="topImage" />
                <i class="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default Topbar
