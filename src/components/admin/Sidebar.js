import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import {AiFillDashboard,AiOutlineUser,AiOutlineMail,AiOutlineLogout} from 'react-icons/ai'
import {MdOutlineAnalytics,MdReportGmailerrorred} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  return (
    <aside>
                    <div className="top">
                        <div className="close" id="close-btn">
                            <span className="material-symbols-outlined">
                                <GrFormClose />
                            </span>
                        </div>
                    </div>
                    <div className="sidebar">
                        <NavLink className="side-nav" to='/'>
                            <span className="material-symbols-outlined">
                                <AiFillDashboard />
                            </span>
                            <h3>Dashboard</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/all-users'>
                            <span className="material-symbols-outlined">
                                <AiOutlineUser />
                            </span>
                            <h3>All Users</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/add-user'>
                            <span className="material-symbols-outlined">
                                <MdOutlineAnalytics />
                            </span>
                            <h3>Create User</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/add-staff'>
                            <span className="material-symbols-outlined">
                                <AiOutlineMail />
                            </span>
                            <h3>Staff Members</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/messages'>
                            <span className="material-symbols-outlined">
                                <AiOutlineMail />
                            </span>
                            <h3>Messages</h3>
                        </NavLink>
                        {/* <NavLink className="side-nav" to='/settings'>
                            <span className="material-symbols-outlined">
                                <IoMdSettings />
                            </span>
                            <h3>Settings</h3>
                        </NavLink> */}
                        <NavLink className="side-nav" to='/logout'>
                            <span className="material-symbols-outlined">
                                <AiOutlineLogout />
                            </span>
                            <h3>Log Out</h3>
                        </NavLink>
                    </div>
                </aside>
  )
}

export default Sidebar
