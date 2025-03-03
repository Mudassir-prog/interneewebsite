
import React from 'react';

export default function InterneesPortal() {
  return (
    <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
      <div className="row justify-content-center w-100">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6">
          <div className="card custom-card shadow-lg p-4">
            <div className="card-body">
              <div className="text-center mb-3">
                <img src="/interneelogo.png" alt="Intern Logo" className="custom-logo" />
              </div>
              <div className="card shadow-sm p-4 border-0 rounded-4 bg-light">
                <div className="card-body text-center">
                  <form>
                    <input type="email" className="form-control mb-3 custom-input" placeholder="Email" />
                    <input type="password" className="form-control mb-3 custom-input" placeholder="Password" />
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div className="d-flex align-items-center">
                        <input type="checkbox" id="rememberMe" className="me-2" />
                        <label htmlFor="rememberMe" className="mb-0">Remember Me</label>
                      </div>
                      <button className="btn custom-btn">Sign In</button>
                    </div>
                    <div className="text-center">
                      <a href="#" className="forget-password">Forget Password?</a>
                    </div>
                  </form>
                </div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

