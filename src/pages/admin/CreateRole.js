import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormRow from '../../components/admin/FormRow'
import FormRowSelect from '../../components/admin/FormRowSelect'

const CreateGroup = () => {

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState();
  const [role, setRole] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'userSelection':
        setRole(value);
        break;
      default:
        break;
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // You can access the form values from the state variables (name, email, location, userType, role)
  };

  const handleClearForm = () => {
    setName('');
    setRole('');
  };

  return (

<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Create Role</h1>
        </div>
        <div className='add-job-section'>
      <Form className='dashboard-form'>
      <Row>
      <Col md={6}><FormRow type='text' name='name' value={name} handleChange={(handleChange)} labelText='Name'/></Col>
      <Col md={6}><FormRow type='text' name='role' value={role} handleChange={(handleChange)} labelText='Role'/></Col>

      <Col md={6}><p></p>
      <div className='form-btn-container'>
      <Button className='register-btn clear-btn' style={{marginTop:'20px'}}>Clear</Button>
      <Button className='register-btn' style={{marginTop:'20px'}}>Submit</Button>
      </div>
      </Col>
      </Row>
      </Form>
    </div>
        </main>
      </div>
    </div>
  )
}

export default CreateGroup
