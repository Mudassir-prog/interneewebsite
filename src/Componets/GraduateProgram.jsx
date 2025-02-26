import React from 'react'
import { Link } from 'react-router-dom'

export default function GraduateProgram() {



    const internships = [
        { title: "Information Technology", img: "/it.jpeg" },
        { title: "Health Care", img: "/health.jpg" },
        { title: "Agriculture", img: "/agriclture.jpg" },
        { title: "Textile", img: "/te.jpeg" },
        { title: "Engineering", img: "/eng.jpg" },
      ];







    return (
        <>
            

            <section>
                <div className="container my-5">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-12 col-md-6">
                            <h1 className="fw-bold">Let's Hire The Best Talent For</h1>
                            <div className="half-background">
                                <h1 className="fw-bold">
                                    <span>Organization</span>
                                </h1>
                            </div>
                            <p className="mt-4 fw-bold">
                                Platform That Seamlessly Connects Companies with the Best Talent,
                                Empowering Organizations to Thrive, Innovate, and Build a Strong
                                Foundation for a Brighter and More Successful Future!
                            </p>
                            <div className="d-flex gap-3 mt-3">
                                <Link to="/explore" className="button">
                                    Explore
                                </Link>
                                <a href="#" className="video-button">
                                    <div className="play-icon"></div>
                                    Watch Video
                                </a>
                            </div>
                        </div>


                    </div>
                </div>
            </section>





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



        </>
    )
}
