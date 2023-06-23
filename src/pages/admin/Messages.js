import React from 'react'
import MessageTable from '../../components/admin/MessageTable'

const Messages = () => {
  return (
<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Messages Count</h1>
        </div>
        <MessageTable />
        </main>
      </div>
    </div>
  )
}

export default Messages
