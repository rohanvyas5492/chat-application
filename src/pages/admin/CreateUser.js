import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormRow from '../../components/admin/FormRow'
import FormRowSelect from '../../components/admin/FormRowSelect'

const CreateUser = () => {

  const userOptions = ['User','Staff'];
  const roleOptions = ['User','Staff'];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [userType, setUserType] = useState('');
  const [role, setRole] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'location':
        setLocation(value);
        break;
      case 'userType':
        setUserType(value);
        break;
      case 'role':
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
    setEmail('');
    setLocation('');
    setUserType('');
    setRole('');
  };

  return (

<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading">
            <h1>Create User</h1>
        </div>
        <div className='add-job-section'>
      <Form className='dashboard-form'>
      <Row>
      <Col md={4}><FormRow type='text' name='name' value={name} handleChange={(handleChange)} labelText='Name'/></Col>
      <Col md={4}><FormRow type='text' name='email' value={email} handleChange={handleChange} labelText='Email'/></Col>
      <Col md={4}><FormRow type='text' name='location' value={location} handleChange={handleChange} labelText='Location'/></Col>
      <Col md={4}><FormRowSelect name='userType' value={userType} handleChange={handleChange} labelText='User Type' list={userOptions}/></Col>
      <Col md={4}><FormRowSelect name='role' value={role} handleChange={handleChange} labelText='Role' list={roleOptions}/></Col>
      <Col md={4}><p></p>
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

export default CreateUser
