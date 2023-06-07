import React from 'react'
import Form from 'react-bootstrap/Form';

const FormRowSelect = ({name,labelText,list,value,handleChange}) => {
  return (<>
  <Form.Group className="mb-3">
  <Form.Label htmlFor={name}>{labelText}</Form.Label>
    <Form.Select aria-label="Default select example" name={name} value={value} onChange={handleChange}>
      {list.map((option,index)=>{
        return <option key={index} value={option}>{option}</option>
      })}
    </Form.Select>
    </Form.Group>
    </>
  )
}

export default FormRowSelect
