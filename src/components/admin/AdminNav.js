import React from 'react'
import SearchBox from './SearchBox'
import UserProfile from './UserProfile'
import {HiMenuAlt1} from 'react-icons/hi'
import {MdClose} from 'react-icons/md'

const AdminNav = ({open,status}) => {

  return (
    <nav>
        <div className="nav-container container-fluid">
            <div className="row">
                <div className="col-md-2">
                    <div className="navbar-brand">
                        <a href="#">Admin Panel</a>
                        <button id="menu-btn">
                            <span className="material-symbols-outlined" id="menu-icon" onClick={()=>open(!status)}>
                                {status ? <MdClose /> : <HiMenuAlt1 />}
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-md-8">
                    <SearchBox />
                </div>
                <div className="col-md-2">
                    <UserProfile />
                </div>
                </div>
            </div>
    </nav>
  )
}

export default AdminNav
