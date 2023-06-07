import React, { useState } from 'react'
import logo from '../assets/images/logo.png'
import '../assets/sass/landing.scss'
import RegisterForm from '../components/landing/RegisterForm'
import Modal from '../components/landing/Modal'

const Navbar = () => {
  const [isModalOpen,setIsModalOpen] = useState(false);
  return <>
  <Modal open={isModalOpen} close={setIsModalOpen}/>
  <section id='landing'>
  <nav className='nav'>
    <div className='nav-center'>
      <div className='nav-header'>
        <img src={logo} alt='logo' className='logo' />
      </div>
    </div>
    <button className='btn-landing' onClick={()=>setIsModalOpen(true)}>Log In</button>
  </nav>
  <section className="hero">
  <div className="hero-center">
  <article className="hero-info">
  <h1>Login with your password or through OTP.</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus diam enim, sed ullamcorper augue elementum eget. Nulla ac quam lectus</p>
  <button className="btn-landing">Start now</button>
  </article>
  <article className="hero-images">
  <RegisterForm />
  </article>
  </div>
  </section>
  </section>
  </>
}

export default Navbar
