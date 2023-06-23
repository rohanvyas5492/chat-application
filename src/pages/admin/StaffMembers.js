import React from 'react'
import StaffTable from '../../components/admin/StaffTable'
import '../../assets/sass/userTable.scss';

const CreateStaff = () => {
  return (
<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Manage Staff</h1>
        </div>
        <StaffTable heading={'Staff Members'}/>
        </main>
      </div>
    </div>
  )
}

export default CreateStaff
