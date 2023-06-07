import React from 'react'
import Table from 'react-bootstrap/Table';

const FilterTable = () => {
  return (
     <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Rohan</td>
          <td>Vyas</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Abhinav</td>
          <td>Shukla</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Shivam</td>
          <td>Tiwari</td>
          <td>@twitter</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Abhishek</td>
          <td>Dixit</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default FilterTable
