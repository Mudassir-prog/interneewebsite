import React from 'react'
import Contact from './Contact'

export default function CompanyCollabration() {
  return (
    <>
      <section className='section-1'>
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md-12 col-lg-12">
              <h2 className='text-center mb-4'> Are you looking for hands-on candidate for your company?</h2>
              <h5 className='text-center'>Our end goal is provide the best candidate for your company for your exponential growth for your company, Let's hands shake and create a win-win situation on both sides.</h5>
            </div>
          </div>
          <section className='section-2'>
            <div className="row d-flex justify-content-center">

              {/* card 1 */}

              <div className="col-md-3 mb-2 mb-lg-2 mb-md-2 mt-2 mt-md-2 mt-lg-2">
                <div className="icon-box">
                  <i className="fas fa-cloud-download-alt" />
                  <h2>15k+</h2>
                  <p>Internship Provided</p>
                </div>
              </div>





              {/* card 2 */}
              <div className="col-md-3 mb-2 mb-lg-2 mb-md-2 mt-2 mt-md-2 mt-lg-2">
                <div className="icon-box">
                  <i className="fas fa-users" />
                  <h2>48k+</h2>
                  <p>LinkedIn Family</p>
                </div>
              </div>


              {/* card 3 */}
              <div className="col-md-3 mb-2 mb-lg-2 mb-md-2 mt-2 mt-md-2 mt-lg-2">
                <div className="icon-box">
                  <i className="fas fa-headphones" />
                  <h2>28</h2>
                  <p>Courses on LMS</p>
                </div>
              </div>


              {/* card 4 */}

              <div className="col-md-3 mb-2 mb-lg-2 mb-md-2 mt-2 mt-md-2 mt-lg-2">
                <div className="icon-box">
                  <i className="fas fa-shield-alt" />
                  <h2>15</h2>
                  <p>Companies Onboarded</p>
                </div>
              </div>

            </div>
          </section>
        </div>
      </section>






      <section className='section-3'>
        <div className="container mt-5">
          <div className="row text-center">
            <h1 className='fw-bold'>How does it work?</h1>
            <div className="col-md-4 mt-5">
              <div className="stepper">
                <div className="step">1</div>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3>Fill The Form Below</h3>
                <p>Begin by filling out the form below with your basic information. This will help us understand your needs and ensure we connect you with the right team.</p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="stepper">
                <div className="step">2</div>
                <div className="step-line" />
              </div>
              <div className="step-content">
                <h3>Provide Details About Your Company or Organization</h3>
                <p>Next, provide specific details about your company or organization. This information helps us tailor our services to suit your requirements and deliver the best results.</p>
              </div>
            </div>
            <div className="col-md-4 mt-5">
              <div className="stepper">
                <div className="step">3</div>
              </div>
              <div className="step-content">
                <h3>Team Will Contact You With In 24 Hrs</h3>
                <p>Once you've submitted your details, our team will reach out to you within 24 hours. We'll guide you through the next steps and discuss how we can help you achieve your goals.</p>
              </div>
            </div>
          </div>
        </div>
      </section>







      <section className='section-3' >
        <Contact></Contact>
      </section>
    </>
  )
}
