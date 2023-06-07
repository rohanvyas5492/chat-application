import React, { useState } from 'react'
import {SlOptionsVertical} from 'react-icons/sl'

const ChatNavbar = () => {

  const [isOptionsOpen,setIsOptionsOpen] = useState(false);

  return (
    <>
      <div className='user-profile-settings'>
    <div className="user-settings">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png" alt="image" className="user-profile account-profile" />
    </div>
    <div className='more-options'>
        <div className='options-icon' onClick={()=>setIsOptionsOpen(!isOptionsOpen)}><SlOptionsVertical /></div>
        <div className={isOptionsOpen ? 'options-list open' : 'options-list'}>
          <ul>
            <li><span>New Group</span></li>
            <li><span>All Groups</span></li>
            <li><span>Settings</span></li>
            <li><span>Log Out</span></li>
          </ul>
        </div>
    </div>
   </div>
   <div className='user-search-section'>
    <div className="search-bar">
                <input type="text" placeholder="Search..." />
    </div>
   </div>
    </>
  )
}

export default ChatNavbar
