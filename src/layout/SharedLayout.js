import React, { useState } from 'react'
import AdminNav from '../components/admin/AdminNav'
import Sidebar from '../components/admin/Sidebar'
import '../assets/sass/admin.scss'
import { Outlet } from 'react-router'

const SharedLayout = () => {
  const [isSidebarOpen,setIsSidebarOpen] = useState(true)

  return (
    <>
    <AdminNav open={setIsSidebarOpen} status={isSidebarOpen}/>
      <div className="container-fluid">
        <div className="main-row">
            <div className={isSidebarOpen ? 'sidebar-col open' : 'sidebar-col'}>
              <Sidebar sidebar={isSidebarOpen}/>
            </div>
            <div className={isSidebarOpen ? 'main-page open' : 'main-page'}>
              <Outlet />
            </div>
          </div>
        </div>
    </>
  )
}

export default SharedLayout
