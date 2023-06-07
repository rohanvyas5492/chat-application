import React from 'react'
import Form from 'react-bootstrap/Form';

const FormRow = ({type,name,value,handleChange,labelText}) => {
  return (
    <Form.Group className="mb-3">
        <Form.Label htmlFor={name}>{labelText}</Form.Label>
        <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        />
        </Form.Group>
  )
}

export default FormRow
