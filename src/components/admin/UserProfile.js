import React, { useState } from 'react'
import profile from '../../assets/images/dp.jpg'
import {MdExpandMore} from 'react-icons/md'

const UserProfile = () => {
const [isOptionsOpen,setIsOptionsOpen] = useState(false);
  return (
<div className="profile-area">
    <div className="profile">
        <div className="profile-photo">
            <img src={profile} width="100%" />
        </div>
        <h5>Rohan Vyas</h5>
        <span className="material-symbols-outlined" onClick={()=>setIsOptionsOpen(!isOptionsOpen)}>
            <MdExpandMore />
        </span>
        <div className={isOptionsOpen ? 'profile-options open' : 'profile-options'}>
            <ul>
                <li><span>Settings</span></li>
                <li><span>Logout</span></li>
            </ul>
        </div>
    </div>
</div>
  )
}

export default UserProfile
