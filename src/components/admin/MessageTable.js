import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'

const UserTable = () => {
  return (
    <div className='user-table'>
      <div class="container-fluid">
  <div class="row row--top-40">
    <div class="col-md-12">
      <h2 class="row__title"></h2>
    </div>
  </div>
  <div class="row row--top-20">
    <div class="col-md-12">
      <div class="table-container">
        <table class="table">
          <thead class="table__thead">
            <tr>
              <th class="table__th"><input id="selectAll" type="checkbox" class="table__select-row" /></th>
              <th class="table__th">Chat Type</th>
              <th class="table__th">Members Count</th>
              <th class="table__th">Members Exchange Count</th>
              <th class="table__th">Action</th>
            </tr>
          </thead>
          <tbody class="table__tbody">
            <tr class="table-row table-row--chris">
              <td class="table-row__td">
                <input id="" type="checkbox" class="table__select-row" />
              </td>
              <td class="table-row__td">
                <div class="table-row__img"></div>
                <div class="table-row__info">
                  <p class="table-row__name">Normal Chat</p>
                </div>
              </td>
              <td data-column="Destination" class="table-row__td">
                <b>2</b>
              </td>
              <td data-column="Destination" class="table-row__td">
                <b>2</b>
              </td>
              <td class="table-row__td">
                <div class="table-row__edit"><AiFillEdit /></div>
                <div class="table-row__bin"><AiFillDelete /></div>                
              </td>
            </tr>
            <tr class="table-row table-row--chris">
              <td class="table-row__td">
                <input id="" type="checkbox" class="table__select-row" />
              </td>
              <td class="table-row__td">
                <div class="table-row__img"></div>
                <div class="table-row__info">
                  <p class="table-row__name">Group Chat</p>
                </div>
              </td>
              <td data-column="Destination" class="table-row__td">
                <b>18</b>
              </td>
              <td data-column="Destination" class="table-row__td">
                <b>11</b>
              </td>
              <td class="table-row__td">
                <div class="table-row__edit"><AiFillEdit /></div>
                <div class="table-row__bin"><AiFillDelete /></div>                
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
