import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormRow from '../../components/admin/FormRow'
import FormRowSelect from '../../components/admin/FormRowSelect'

const Settings = () => {
  const userOptions = ['3 days','7 days','15 days','30 days'];
  const [deleteSetting, setDeleteSetting] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'delete-setting':
        setDeleteSetting(value);
        break;
    }
  };



  return (
        <div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Manage Delete Setting</h1>
        </div>
        <div className='add-job-section'>
      <Form className='dashboard-form'>
      <Row>
      <Col md={6}><FormRowSelect name='delete-setting' value={deleteSetting} handleChange={handleChange} labelText='Automatically Delete Messages after' list={userOptions}/></Col>
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

export default Settings
