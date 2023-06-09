import React from 'react'
import UserTable from '../../components/admin/UserTable'
import '../../assets/sass/userTable.scss';

const AllUsers = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Manage Users</h1>
        </div>
        <UserTable heading={'Users'}/>
        </main>
      </div>
    </div>
  )
}

export default AllUsers
