import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormRow from '../../components/admin/FormRow'
import FormRowSelect from '../../components/admin/FormRowSelect'

const CreateStaff = () => {

  const userOptions = ['Manage Role','Manage User','Manage Staff','Manage Group','Messages Count','Manage Delete Setting'];
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [profile, setProfile] = useState('');
  const [password, setPassword] = useState('');

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
      case 'mobile':
        setMobile(value);
        break;
      case 'profile':
        setProfile(value);
        break;
      case 'password':
        setPassword(value);
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
        <div class="page-heading mt-5">
            <h1>Create Staff</h1>
        </div>
        <div className='add-job-section'>
      <Form className='dashboard-form'>
      <Row>
      <Col md={4}><FormRow type='text' name='name' value={name} handleChange={(handleChange)} labelText='User Name'/></Col>
      <Col md={4}><FormRow type='tel' name='mobile' value={mobile} handleChange={(handleChange)} labelText='Mobile Number'/></Col>

      <Col md={4}><FormRow type='text' name='email' value={email} handleChange={handleChange} labelText='Email'/></Col>
      <Col md={4}><FormRow type='password' name='password' value={password} handleChange={(handleChange)} labelText='Password'/></Col>

      <Col md={4}><FormRowSelect name='userType' value={userType} handleChange={handleChange} labelText='Permissions' list={userOptions}/></Col>
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

export default CreateStaff
