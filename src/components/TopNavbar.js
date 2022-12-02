import React from 'react'

const TopNavbar = () => {
  return (
    <div className='top-navbar'>
      <div className='top-navbar-top-menu'>

        <div>
           <i className="fa-solid fa-magnifying-glass mr-10"></i>
           <input className='search-inp' type="text"/>
        </div>

        <div style={{display:"flex",alignItems:"center"}}>
            <i className="fa-solid fa-bell mr-20"></i>
            <h3>
              <i className="fa-regular fa-user"></i>
              User Full name
            </h3>
        </div>
      </div>

      <div className='top-navbar-bottom-menu'>
        <div style={{display:"flex"}}>
            <h1><i className="fa-regular fa-user"></i></h1>
            <div>
               <p>Hii there,</p>
               <h3>User Full Name</h3>
            </div>
        </div>
        <div>
            <button className='mr-20 btn'>New</button>
            <button className='mr-20 btn'>Upload</button>
            <button className='mr-20 btn'>Share</button>
        </div>
      </div>
    </div>
  )
}

export default TopNavbar
