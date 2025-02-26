import React from 'react'

export default function Contact() {
  return (
    <>
      <section className='bg-section'>
        <div className="container container-div ">
          <div className="row d-flex justify-content-right ">
            <div className="col-12 col-md-5 col-lg-6 text-div">
              <h3 className='fw-bold mb-4'>Get in Touch</h3>
              <p className='fw-bold '>Our doors are always open! Drop by and let’s discuss how we can help you achieve your goals. We’re excited to hear from you! Whether you have a question, need assistance, or want to collaborate, our team is here to help.</p>

              <div className='fw-bold'>
                <p >
                  📍 Address: NIC Karachi, NED University Karachi, Pakistan</p>
                <p>🕒 Working Hours:</p>
                <ul>
                  <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
                  <li>aturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <button className='get-button mt-5'>Get In Touch</button>
              <div>
                <h6 className='mt-5'>Follow Us</h6>
              </div>
              <div>
                <div className="d-flex gap-3 mt-3">
                  <i className="bi bi-facebook fs-3 text-primary"></i>
                  <i className="bi bi-instagram fs-3 text-danger"></i>
                  <i className="bi bi-twitter fs-3 text-info"></i>
                  <i className="bi bi-linkedin fs-3 text-info"></i>
                </div>
              </div>
            </div>


            <div className="col-12 col-md-6 col-lg-6 foam-div">
              <div className='contant-foam'>
                <div className="text-center">
                  <h5>Contact Form</h5>
                  <p>Ask us anything, we would love to hear from you</p>
                </div>
                <form action="">
                  <div className="mb-3">
                    <label htmlFor="fullName" className='form-label'>Full Name</label>
                    <input type="text" id="fullName" className='contact-from form-control' placeholder='Internee.pk' required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className='form-label'>Email Address</label>
                    <input type="email" id="email" className='contact-from form-control' placeholder='info@internee.pk' required />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="message" className='form-label'>Message</label>
                    <textarea id="message" className='contact-from form-control' rows={5} placeholder='Message' required></textarea>
                  </div>

                  <button type="submit" className='get-button'>Get In Touch</button>
                </form>
              </div>
            </div>




          </div>
        </div>
      </section>
    </>
  )
}
