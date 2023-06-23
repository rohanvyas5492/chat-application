import React from 'react'
import {GrFormClose} from 'react-icons/gr'
import {AiFillDashboard,AiOutlineUser,AiOutlineMail,AiOutlineLogout} from 'react-icons/ai'
import {MdOutlineAnalytics,MdReportGmailerrorred} from 'react-icons/md'
import {IoMdSettings} from 'react-icons/io'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = () => {
const navigate = useNavigate();

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
                        <NavLink className="side-nav" to='/admin/dashboard'>
                            <span className="material-symbols-outlined">
                                <AiFillDashboard />
                            </span>
                            <h3>Dashboard</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/admin/all-roles'>
                            <span className="material-symbols-outlined">
                                <AiOutlineMail />
                            </span>
                            <h3>Manage Role</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/admin/all-users'>
                            <span className="material-symbols-outlined">
                                <AiOutlineUser />
                            </span>
                            <h3>Manage User</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/admin/staff-members'>
                            <span className="material-symbols-outlined">
                                <AiOutlineMail />
                            </span>
                            <h3>Manage Staff</h3>
                        </NavLink>
                        <NavLink className="side-nav" to='/admin/all-groups'>
                            <span className="material-symbols-outlined">
                                <MdOutlineAnalytics />
                            </span>
                            <h3>Manage Group</h3>
                        </NavLink>
                        
                        
                        <NavLink className="side-nav" to='/admin/messages'>
                            <span className="material-symbols-outlined">
                                <AiOutlineMail />
                            </span>
                            <h3>Messages Count</h3>
                        </NavLink>
                        
                        <NavLink className="side-nav" to='/admin/settings'>
                            <span className="material-symbols-outlined">
                                <IoMdSettings />
                            </span>
                            <h3>Manage Delete Setting</h3>
                        </NavLink>
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
