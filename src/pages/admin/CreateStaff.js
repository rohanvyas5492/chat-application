import React from 'react'
import UserTable from '../../components/admin/UserTable'
import '../../assets/sass/userTable.scss';

const CreateStaff = () => {
  return (
<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading">
            <h1>Staff Members</h1>
        </div>
        <UserTable heading={'Staff Members'}/>
        </main>
      </div>
    </div>
  )
}

export default CreateStaff
