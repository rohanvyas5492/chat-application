import React from 'react'
import '../../assets/sass/admin.scss'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className="card admin-login">
            <div className="card-body">
              
              <div className="app-brand justify-content-center">
                <Link to="/admin/dashboard" className="app-brand-link gap-2">
                  <span className="app-brand-text demo text-body fw-bolder">Admin Panel</span>
                </Link>
              </div>
              
              <p className="mb-4">Please sign-in to your account</p>

              <form id="formAuthentication" className="mb-3">
                <div className="mb-3">
                  <label for="email" className="form-label">Email or Username</label>
                  <input type="text" className="form-control" id="email" name="email-username" placeholder="Enter your email or username" autofocus="" />
                </div>
                <div className="mb-3 form-password-toggle">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" for="password">Password</label>
                  </div>
                  <div className="input-group input-group-merge">
                    <input type="password" id="password" className="form-control" name="password" placeholder="············" aria-describedby="password" />
                  </div>
                </div>
                <div className="mb-3">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" id="remember-me" />
                    <label className="form-check-label" for="remember-me"> Remember Me </label>
                  </div>
                </div>
                <div className="mb-3">
                  <button className="btn btn-primary d-grid w-100" type="submit">Sign in</button>
                </div>
              </form>
            </div>
          </div>
  )
}

export default login
