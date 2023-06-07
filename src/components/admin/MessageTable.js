import React from 'react'
import {AiFillEdit,AiFillDelete} from 'react-icons/ai'

const UserTable = () => {
  return (
    <div className='user-table'>
      <div class="container">
  <div class="row row--top-40">
    <div class="col-md-12">
      <h2 class="row__title">Unread Messages (3)</h2>
    </div>
  </div>
  <div class="row row--top-20">
    <div class="col-md-12">
      <div class="table-container">
        <table class="table">
          <thead class="table__thead">
            <tr>
              <th class="table__th"><input id="selectAll" type="checkbox" class="table__select-row" /></th>
              <th class="table__th">Name</th>
              <th class="table__th">Message</th>
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
                  <p class="table-row__name">Christin Ericssen</p>
                  <span class="table-row__small">CFO</span>
                </div>
              </td>
              <td data-column="Destination" class="table-row__td">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </td>
              <td class="table-row__td">
                <div class="table-row__edit"><AiFillEdit /></div>
                <div class="table-row__bin"><AiFillDelete /></div>                
              </td>
            </tr>
            
            <tr class="table-row table-row--angie">
              <td class="table-row__td">
                <input id="" type="checkbox" class="table__select-row" />
              </td>
              <td class="table-row__td">
                <div class="table-row__img"></div>
                <div class="table-row__info">
                  <p class="table-row__name">Angie E. Swift</p>
                  <span class="table-row__small">Vp of Sales</span>
                </div>
              </td>
              <td data-column="Progress" class="table-row__td">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </td>
              <td class="table-row__td">
                <div class="table-row__edit"><AiFillEdit /></div>
                <div class="table-row__bin"><AiFillDelete /></div>                
              </td>
            </tr>
            
            <tr class="table-row table-row--ronald">
              <td class="table-row__td">
                <input id="" type="checkbox" class="table__select-row" />
              </td>
              <td class="table-row__td">
                <div class="table-row__img"></div>
                <div class="table-row__info">
                  <p class="table-row__name">Ronals Koeman</p>
                  <span class="table-row__small">Advisory board</span>
                </div>
              </td>
              
              <td data-column="destination" class="table-row__td">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </td>
             <td class="table-row__td">
                <div class="table-row__edit"><AiFillEdit /></div>
                <div class="table-row__bin"><AiFillDelete /></div>                
              </td>            
            </tr>
            
            <tr class="table-row table-row--june">
              <td class="table-row__td">
                <input id="" type="checkbox" class="table__select-row" />
              </td>
              <td class="table-row__td">
                <div class="table-row__img"></div>
                <div class="table-row__info">
                  <p class="table-row__name">June Simmons</p>
                  <span class="table-row__small">Social content manager</span>
                </div>
              </td>
              
              <td data-column="destination" class="table-row__td">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </td>
             <td class="table-row__td">
                <div class="table-row__edit"><AiFillEdit /></div>
                <div class="table-row__bin"><AiFillDelete /></div>                
              </td>
            </tr>
            
            <tr class="table-row table-row--ben">
              <td class="table-row__td">
                <input id="" type="checkbox" class="table__select-row" />
              </td>
              <td class="table-row__td">
                <div class="table-row__img"></div>
                <div class="table-row__info">
                  <p class="table-row__name">Ben West</p>
                  <span class="table-row__small">Account manager</span>
                </div>
              </td>
              
              <td data-column="destination" class="table-row__td">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
