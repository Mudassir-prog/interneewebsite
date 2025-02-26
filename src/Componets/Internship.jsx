import React from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";




const internships = [
  { title: "Information Technology", img: "/it.jpeg" },
  { title: "Health Care", img: "/health.jpg" },
  { title: "Agriculture", img: "/agriclture.jpg" },
  { title: "Textile", img: "/te.jpeg" },
  { title: "Engineering", img: "/eng.jpg" },
];



const testimonials = [
  {
    name: "Rabia Zain",
    location: "Lahore, Pakistan",
    feedback:
      "This platform helps students boost their careers with hands-on practice along with learning as well.",
  },
  {
    name: "Kashan Soomro",
    location: "Karachi, Pakistan",
    feedback:
      "Thanks to internee.pk, I improved my skills here and now I am working as a Flutter Developer in a US company.",
  },
  {
    name: "Mohammad Rafiq",
    location: "Larkana, Pakistan",
    feedback:
      "I find internee.pk to be an outstanding platform to get hands-on experience. Sometimes you have to spend time making a lot of projects.",
  },
];






export default function Internship() {
  return (
    <>

      <section>
        <div className="container my-5">
          <div className="row d-flex justify-content-center">
            {internships.map((intern, index) => (
              <div key={index} className="col-12 col-md-4 col-lg-4 mb-4">
                <div className="card shadow-lg intern-card rounded border-0 text-center">
                  <div className="card-image">
                    <img
                      src={intern.img}
                      className="card-img-top img-fluid object-fit-cover p-3"
                      alt={intern.title}
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{intern.title}</h5>
                    <hr />
                    <a href="#" className="btn custom-btn w-50">
                      Apply Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="card-section">
        <div className="container my-5">
          <div className="row d-flex justify-content-center text-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="mt-5">What Students Are Saying About Internee.pk</h1>
              <p>
                Over 1500+ students have shared how internee.pk has helped them in
                their careers. 👨🏻‍🎓
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 pb-4">
                <div className="card shadow-lg c-card text-center p-4">
                  <div className="card-body">
                    <div className="stars mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="fa fa-star checked text-warning"></span>
                      ))}
                    </div>
                    <p className="pt-2">"{testimonial.feedback}"</p>
                    <h5 className="mt-3">{testimonial.name}</h5>
                    <span className="text-muted">{testimonial.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




      <section className='second-section text-center'>
        <div className="container">
          <div className="row d-flex">
            <div className="col-12 col-md-6 col-lg-6">
              <h1 className='fw-bold mb-5'>Why internee.pk?</h1>
              {/* icon */}
              <div className="timeline">
                <div className="timeline-item">
                  <div className="icon"><i className="fa fa-envelope" /></div>
                  <div className="text">20000+ Students already registered</div>
                </div>
                <div className="timeline-item">
                  <div className="icon"><i className="fa fa-envelope" /></div>
                  <div className="text">Task based projects that based on hands on experience</div>
                </div>
                <div className="timeline-item">
                  <div className="icon"><i className="fa fa-envelope" /></div>
                  <div className="text">Massive Courses with high-quality videos on LMS</div>
                </div>
                <div className="timeline-item">
                  <div className="icon"><i className="fa fa-envelope" /></div>
                  <div className="text">Empowering youth towards IT revolution &amp; technology</div>
                </div>
                <div className="timeline-item">
                  <div className="icon"><i className="fa fa-envelope" /></div>
                  <div className="text">Hands on Experience via Virtual internship</div>
                </div>
                <div className="timeline-item">
                  <div className="icon"><i className="fa fa-envelope" /></div>
                  <div className="text">Complete your task and get market competent job</div>
                </div>
              </div>


            </div>

            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
              <div className='img-div'>
                <img className='img-fluid shadow-lg img' src="/hmm.jpg" alt="" />
              </div>
            </div>



          </div>
        </div>
      </section>

    </>
  )
}
