import React from 'react'
import GroupTable from '../../components/admin/GroupTable'

const AllGroups = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Manage Groups</h1>
        </div>
        <GroupTable heading={'Groups'}/>
        </main>
      </div>
    </div>
  )
}

export default AllGroups
