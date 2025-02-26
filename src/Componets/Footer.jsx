import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-12 col-md-3">
                        <img src="/interneelogo.png" className='img-fluid w-50 pb-3' alt="Logo" />
                        <p>The ultimate platform designed to turbocharge the IT sector in Pakistan.</p>
                        <h6>info@internee.pk</h6>
                        <h6>+92312-3023645</h6>
                        <h6>NIC Karachi, NED University</h6>
                        <div className="d-flex gap-3 mt-3">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-instagram"></i>
                            <i className="bi bi-twitter"></i>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="col-12 col-md-3">
                        <h5>Company</h5>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/internship'>Internship</Link></li>
                            <li><Link to='/companycollabration'>Company</Link></li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="col-12 col-md-3">
                        <h5>Help</h5>
                        <ul>
                            <li><Link to='/faq'>Job Portal</Link></li>
                            <li><Link to='/support'>Task Portal</Link></li>
                            <li><Link to='/contact'>LMS</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Subscription */}
                    <div className="col-12 col-md-3">
                        <h5>Subscribe to Newsletter</h5>
                        <form className='mt-3'>
                            <input type="email" placeholder='Enter your email' className='form-control' />
                            <button className='btn custom-btn mt-2 w-100'>Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className='text-center mt-4'>
                    <hr />
                    <p>© Copyright 2025, All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

