import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormRow from '../../components/admin/FormRow'

const CreateUser = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'first-name':
        setFirstName(value);
        break;
      case 'last-name':
        setLastName(value);
        break;
      case 'mobile':
        setMobile(value);
        break;
      
      case 'password':
        setPassword(value);
        break;
      case 'confirm-password':
        setConfirmPassword(value);
        break;
      case 'email':
        setEmail(value);
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
    setFirstName('');
    setLastName('');
    setEmail('');
    setMobile('');
    setConfirmPassword('');
    setPassword('')
  };

  return (

<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Create User</h1>
        </div>
        <div className='add-job-section'>
      <Form className='dashboard-form'>
      <Row>
      <Col md={4}><FormRow type='text' name='first-name' value={firstName} handleChange={(handleChange)} labelText='First Name'/></Col>
      <Col md={4}><FormRow type='text' name='last-name' value={lastName} handleChange={(handleChange)} labelText='Last Name'/></Col>
      <Col md={4}><FormRow type='tel' name='mobile' value={mobile} handleChange={(handleChange)} labelText='Mobile Number'/></Col>

      <Col md={4}><FormRow type='text' name='email' value={email} handleChange={handleChange} labelText='Email'/></Col>
      <Col md={4}><FormRow type='password' name='password' value={password} handleChange={(handleChange)} labelText='Password'/></Col>
      <Col md={4}><FormRow type='password' name='confirm-password' value={confirmPassword} handleChange={(handleChange)} labelText='Confirm Password'/></Col>

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
