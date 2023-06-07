import React from 'react'
import '../../assets/sass/registerForm.scss';

const RegisterForm = () => {
  return (
    <div>
      <form  className="contact-form" method="post" name="Form">
        <h6>Register</h6>
        <div  className="messages"></div>
        <div  className="row gx-4">
            <div  className="col-md-12">
                <div  className="mb-4">
                    <label for="name"  className="form-label">Name *</label>
                    <input type="text"  className="form-control" id="name" />
                </div>
            </div>
    
            <div  className="col-md-12">
                <div  className="mb-4">
                    <label for="email"  className="form-label">Email *</label>
                    <input type="email"  className="form-control" id="email"  />
                </div>
            </div>
            
            <div  className="col-md-12">
                <div  className="mb-4">
                    <label for="tel"  className="form-label">Phone *</label>
                    <input type="tel"  className="form-control" id="tel" />
                </div>
            </div>
            <div  className="col-12 text-center btn-container">
                <button type="button"  className="btn-nav" style={{width: '100%'}} data-bs-toggle="modal" data-bs-target="#otpModal">Sign Up</button>
            </div>
        </div>
    </form>
    </div>
  )
}

export default RegisterForm
