import React from 'react'

const LeftNavbar = () => {
  return (
    <div className='left-navbar'>
        <h1>
            <i className="fa-regular fa-user"></i>
            Digipplus
        </h1>
        
        <div className='left-navbar-top-menu'>
            <ul>
                <li><i className="fa-solid fa-house mr-10"></i>Home</li>
                <li><i className="fa-solid fa-address-card mr-10"></i>Profile</li>
                <li><i className="fa-solid fa-message mr-10"></i>Digi Chat</li>
                <li><i className="fa-solid fa-clock mr-10"></i>Apply For Job</li>
                <li><i className="fa-solid fa-certificate  mr-10"></i>Certificate</li>
            </ul>
        </div>

        <div className='left-navbar-bottom-menu'>
            <ul>
                <li><i className="fa-solid fa-gear mr-10"></i>Setting</li>
                <li><i className="fa-solid fa-question mr-10"></i>Support</li>
                <li><i className="fa-solid fa-shield mr-10"></i>Privacy</li>
            </ul>
        </div>
      
    </div>
  )
}

export default LeftNavbar
