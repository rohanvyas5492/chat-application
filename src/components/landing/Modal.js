import React, { useState } from 'react'
import {IoMdClose} from 'react-icons/io'
import '../../assets/sass/modal.scss'
import { useNavigate } from 'react-router'

const Modal = ({open,close}) => {
    const navigate = useNavigate();
    const [isOtpActive,setIsOtpActive] = useState(false);

  return (
    <div className={open ? 'login-modal open' : 'login-modal'}>
    <div className='modal-header'>
        <h2>Login</h2>
        <div className='modal-close' onClick={()=>close(false)}>
            <IoMdClose />
        </div>
    </div>
    <div className='modal-form'>
    <form>
        <div className='row'>
            <div className='col-md-12'>
                <div  className="mb-4">
                    <label for="tel"  className="form-label">Password *</label>
                    <input type="tel"  className="form-control" id="tel" />
                </div>
            </div>
            <div className='col-md-12'>
                <div  className="mb-4">
                    <button className='login-btn' onClick={()=>navigate('/chats')}>Login</button>
                </div>
            </div>
            <div className='col-md-12'>
            <div className='form-divider'>
                <h3>OR</h3>
            </div>
            </div>
            <div className='col-md-12'>
                <div  className="mb-4">
                    <label for="tel"  className="form-label">Mobile Number *</label>
                    <input type="tel"  className="form-control" id="tel" />
                </div>
            </div>
            <div className='col-md-12'>
                <div  className="mb-4">
                    <button className='login-btn' onClick={(e)=>{
                        e.preventDefault();
                        setIsOtpActive(true)}
                        }>Send OTP</button>
                </div>
            </div>
            <div className={isOtpActive ? 'display-block' : 'display-none'}>
                <div className='col-md-12'>
                <div  className="mb-4">
                    <label for="tel"  className="form-label">OTP *</label>
                    <input type="tel"  className="form-control" id="tel" />
                </div>
            </div>
            <div className='col-md-12'>
                <div  className="mb-4">
                    <button className='login-btn'>Verify and Login</button>
                </div>
            </div>
            </div>
        </div>
    </form>
    </div>
    </div>
  )
}

export default Modal
