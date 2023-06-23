import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import FormRow from '../../components/admin/FormRow'
import FormRowSelect from '../../components/admin/FormRowSelect'

const CreateGroup = () => {

  const adminAssign = ['option','option'];
  const [groupName, setGroupName] = useState('');
  
  const [filterUser, setFilterUser] = useState('');
  const [assignType, setAssignType] = useState('');
  const [groupImage, setGroupImage] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'group-name':
        setGroupName(value);
        break;
      case 'filter-user':
        setFilterUser(value);
        break;
      case 'group-image':
        setGroupImage(value);
        break;
      case 'adminAssign':
        setAssignType(value);
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
    setGroupName('');
    setAssignType('');
    setFilterUser('');
  };

  const handleImageUpload = (event) => {
  const file = event.target.files[0];
  // Perform further processing or validation if needed

  // Create a new FileReader instance
  const reader = new FileReader();

  // Set up a callback function for when the file is loaded
  reader.onloadend = () => {
    const imageDataUrl = reader.result;
    // Perform any necessary operations with the image data URL
  };

  // Read the file as a data URL
  reader.readAsDataURL(file);
};


  return (

<div className='row'>
      <div className='col-md-12'>
      <main>
        <div class="page-heading mt-5">
            <h1>Create Group</h1>
        </div>
        <div className='add-job-section'>
      <Form className='dashboard-form'>
      <Row>
      <Col md={4}><FormRow type='text' name='group-name' value={groupName} handleChange={(handleChange)} labelText='Group Name'/></Col>

      <Col md={4} style={{position:'relative'}} onClick={()=>setIsFilterOpen(!isFilterOpen)}>
      <FormRow type='text' name='filter-user' value={filterUser} handleChange={(handleChange)} labelText='Filter User List'/>
      <div class={isFilterOpen ? 'user-wrap display-block' : 'user-wrap display-none'}>
	<div class="list-wrap">
		<ul class="user-list">
			<li>
				<input type="checkbox" id="user1" name="user-list" value="User name" />
				<label for="user1">User Name</label>
			</li>
			<li>
				<input type="checkbox" id="user2" name="user-list" value="User name" />
				<label for="user2">User Name 2</label>
			</li>
			<li>
				<input type="checkbox" id="user3" name="user-list" value="User name" />
				<label for="user3">User Name 3</label>
		</li>
			<li>
				<input type="checkbox" id="user4" name="user-list" value="User name" />
				<label for="user4">User Name 4</label>
	</li>
			<li>
				<input type="checkbox" id="user5" name="user-list" value="User name" />
				<label for="user5">User Name 5</label>
	</li>
			<li>
				<input type="checkbox" id="user6" name="user-list" value="User name" />
				<label for="user6">User Name 6</label>
	</li>
		</ul>
	</div>
</div>
      </Col>
      
      <Col md={4}><FormRow type='file' name='group-image' value={groupImage} handleChange={(handleImageUpload)} labelText='Group Image'/></Col>

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

export default CreateGroup
