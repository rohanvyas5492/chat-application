import React, { useState } from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'
import { useNavigate } from 'react-router'

const UserTable = ({heading}) => {
  const navigate = useNavigate();
  const [isActive,setIsActive] = useState(false);
  const [isVerified,setIsVerified] = useState(false);

  return (
    <div className='user-table'>
      <div className="container-fluid">
  <div className="row row--top-40">
    <div className="col-md-12" style={{display:'flex',justifyContent:'space-between'}}>
      <h2 className="row__title">{heading} (5)</h2>
      <button className="register-btn btn btn-primary" onClick={()=>navigate('../add-user')}>Add User</button>
    </div>
  </div>
  <div className="row row--top-20">
    <div className="col-md-12">
      <div className="table-container">
        <table className="table">
          <thead className="table__thead">
            <tr>
              <th className="table__th"><input id="selectAll" type="checkbox" className="table__select-row" /></th>
              <th className="table__th">Name</th>
              <th className="table__th">Mobile Number</th>
              <th className="table__th">Status</th>
              <th className="table__th">Verified/Not Verified</th>
              <th className="table__th">User Type</th>
              <th className="table__th">Role</th>
              <th className="table__th">Action</th>
            </tr>
          </thead>
          <tbody className="table__tbody">
            <tr className="table-row table-row--chris">
              <td className="table-row__td">
                <input id="" type="checkbox" className="table__select-row" />
              </td>
              <td className="table-row__td">
                <div className="table-row__img"></div>
                <div className="table-row__info">
                  <p className="table-row__name">Christin Ericssen</p>
                </div>
              </td>
              <td data-column="Destination" className="table-row__td">
                +98745632110
              </td>
              <td  data-column="Status" className="table-row__td">
                <p className={`table-row__status status ${isActive ? 'status--green' : 'status--red'}`} onClick={()=>setIsActive(!isActive)}>{isActive?'Active':'Not Active'}</p>
              </td>
              <td  data-column="Status" className="table-row__td">
                <p className={`table-row__status status ${isVerified ? 'status--green' : 'status--red'}`} onClick={()=>setIsVerified(!isVerified)}>{isVerified?'Verified':'Not Verified'}</p>
              </td>
              <td data-column="Progress" className="table-row__td">
                <p className="table-row__progress">User</p>
              </td>
              <td data-column="Progress" className="table-row__td">
                <p className="table-row__progress">User</p>
              </td>
              <td className="table-row__td">
                <div className="table-row__edit"><AiFillEdit /></div>
                <div className="table-row__bin"><AiFillDelete /></div>                
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  </div>


</div>

    </div>
  )
}

export default UserTable
