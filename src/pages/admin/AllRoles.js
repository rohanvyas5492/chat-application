import React from 'react'
import RoleTable from '../../components/admin/RoleTable'
import '../../assets/sass/userTable.scss';

const AllUsers = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Manage Roles</h1>
        </div>
        <RoleTable heading={'Roles'}/>
        </main>
      </div>
    </div>
  )
}

export default AllUsers
