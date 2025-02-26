import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import TypedEffect from './TypedEffect';

export default function Home() {






  return (
    <>


      <section className='mt-5 mb-5 try-sec'>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">

            {/* Left Side Content */}
            <div className="col-12 col-md-6 col-lg-6 text-center text-md-start">
              <h1>Looking for dream internship?</h1>
              <TypedEffect />

              <p>Internee.pk kickstart student's tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.</p>

              <div className="look-container">
                <img src="/11.png" alt="Image 1" />
                <img src="/22.png" alt="Image 2" />
                <img src="/33.png" alt="Image 3" />
                <img src="/44.png" alt="Image 4" />
              </div>

              <div className="d-flex flex-column flex-md-row justify-content-center">
                <button className='look-btn'>Job Portal</button>
                <button className='look-btn'>Our LMS</button>
              </div>
            </div>

            {/* Right Side Carousel */}
            <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center">
              <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="2000">
                    <img src="1.gif" className="d-block w-100 img-fluid" alt="..." />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <h1 className="text-center fw-bold">Trusted by the Tech Giants</h1>
          </div>

          <div className="image-container">
            <img src="/t-1.png" alt="Tech 1" />
            <img src="/t-2.png" alt="Tech 2" />
            <img src="/t-3.png" alt="Tech 3" />
            <img src="/t-4.png" alt="Tech 4" />
            <img src="/t-5.png" alt="Tech 5" />
            <img src="/t-6.png" alt="Tech 6" />
            <img src="/t-7.png" alt="Tech 7" />
          </div>
        </div>
      </section>


      <section className="sec">
        <div className="container-img">
          <img src="/topi.jpeg" alt="Internee.pk" />
          <h1 className="fw-bold mt-3">What is Internee.pk?</h1>
          <p className="mt-3 p-i">
            The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense potential of talented individuals in the country and aim to bridge the gap between them and the thriving IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container my-5">
          <div className="row d-flex justify-content-center">

            {[
              { img: "/backend.jpg", title: "Backend Development" },
              { img: "/mob.jpg", title: "App Development Internship" },
              { img: "/Graphic.jpg", title: "Graphic Design" },
              { img: "/chatboard.jpg", title: "Chatbot Development" },
              { img: "/Fe.jpg", title: "Frontend Internship" }
            ].map((internship, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                <div className="card shadow-lg intern-card rounded border-0 text-center">
                  <div className="card-image">
                    <img src={internship.img} className="card-img-top img-fluid object-fit-contain p-3" alt="Intern Logo" />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{internship.title}</h5>
                    <hr />
                    <a href="#" className="btn custom-btn w-50">Apply Now</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-12 text-center mt-4">
              <button className="btn custom-btn browse-btn">Browse More Internship {">"}</button>
            </div>

          </div>
        </div>
      </section>

      <section >
        <div className="container">
          <div className="row d-flex justify-content-center ">
            <h4 className='text-center'>Our Blog</h4>
            <h1 className='text-center mb-5'>Recent Blog </h1>
            {/* blog-card 1 */}
            <div className="col-12 col-md-3 col-lg-3 pb-2 pb-lg-2 pb-md-2 pt-2 pt-mb-2 pt-lg-2 d-flex justify-content-center">
              <div className="card blog-card">
                <div className="card-body">
                  <div>
                    <img src="/blog-1.jpeg" className="img-fluid" alt="" />
                  </div>
                  <h5 className='mt-4' >Complete all of the task but didn't get certification yet? 😓🤦‍♀️</h5>
                  <p className='mt-4'>Drop us a quick email at issues@internee.pk with the subject Didn&apos;t get certification yet. Our team will swiftly resolve the matter, ensuring you get your recognition promptly.</p>
                </div>
              </div>


            </div>
            {/* blog-card 2 */}
            <div className="col-12 col-md-3 col-lg-3 pb-2 pb-lg-2 pb-md-2 pt-2 pt-mb-2 pt-lg-2 d-flex justify-content-center">
              <div className="card blog-card">
                <div className="card-body">
                  <div className="">
                    <img src="/blog-3.jpeg" className="img-fluid" alt="" />
                  </div>
                  <h5 className='mt-4'>Looking to make a meaningful impact in the community?🌟🎉</h5>
                  <p className='mt-4'>Our goal is to make Pakistan as an IT Hub. For this, we need more hands-on developers and tech enthusiast who will lift the Pakistan's IT export into the top👨‍💻. Your guidance and help may create a significant impact on some one's career. 🚀</p>
                </div>
              </div>


            </div>
            {/* blog-card 3 */}
            <div className="col-12 col-md-3 col-lg-3 pb-2 pb-lg-2 pb-md-2 pt-2 pt-mb-2 pt-lg-2 d-flex justify-content-center">
              <div className="card blog-card">
                <div className="card-body">
                  <div className="">
                    <img src="/blog-2.jpeg" className="img-fluid" alt="" />
                  </div>
                  <h5 className='mt-4'>🚀Calling communities to Empower Students with Internee.pk!✌</h5>
                  <p className='mt-4'>We'd love to discuss how a collaboration with Internee.pk can benefit your universites , socities, institutes and educational institutions and specially with students.</p>
                </div>
              </div>


            </div>
            {/* blog-card 4 */}
            <div className="col-12 col-md-3 col-lg-3 pb-2 pb-lg-2 pb-md-2 pt-2 pt-mb-2 pt-lg-2 d-flex justify-content-center">
              <div className="card blog-card">
                <div className="card-body">
                  <div className="">
                    <img src="/blog-4.png" className="img-fluid" alt="" />
                  </div>
                  <h5 className='mt-4'>Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟</h5>
                  <p className='mt-4'>To complete the process, send us all the task details via email at careers@internee.pk. This ensures that we have all the necessary information to validate your certification.</p>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>


      <section>
        <div className="card-section">
          <div className="container my-5">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <h1 className="mt-5">What Students are saying about internee.pk</h1>
                <p>Around 1500+ students have said how good internee.pk helped them in their career 👨🏻‍🎓</p>
              </div>
            </div>

            <div className="row">
              {[
                {
                  name: "Rabia Zain",
                  location: "Lahore, Pakistan",
                  review:
                    "This platform helps students boost their careers with hands-on practice with learning as well.",
                },
                {
                  name: "Kashan Soomro",
                  location: "Karachi, Pakistan",
                  review:
                    "Thanks to internee.pk, I grew my skills here and now I am working as a Flutter Developer in a US company.",
                },
                {
                  name: "Mohammad Rafiq",
                  location: "Larkana, Pakistan",
                  review:
                    "I find internee.pk to be outstanding to get hands-on experience. Sometimes you have to spend to make a lot of projects.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
                  <div className="card shadow-lg c-card text-center">
                    <div className="card-body">
                      <div className="stars">
                        {Array(5)
                          .fill()
                          .map((_, i) => (
                            <span key={i} className="fa fa-star checked"></span>
                          ))}
                      </div>
                      <p className="pt-4">“{testimonial.review}”</p>
                      <div>
                        <h5>{testimonial.name}</h5>
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            {/* Left Side - Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="portal-img">
                <img src="/task.jpg" alt="Task Portal" className="img-fluid w-100" />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="col-12 col-md-6">
              <h4 >Our own task portal</h4>
              <h1 className="fw-bold">Manage Projects Via Our Task Portal</h1>
              <h5 className="mt-4 mb-4 text-muted">
                Welcome to internee.pk task portal. Where Tasks Transform Into Skills.
              </h5>

              {/* Features Grid */}
              <div className="row">
                {[
                  {
                    title: "Hands-on Projects",
                    desc: "We believe in learning by doing. Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills that resonate in professional environments.",
                  },
                  {
                    title: "How to Represent Yourself",
                    desc: "More than just completing tasks, it empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments.",
                  },
                  {
                    title: "SDLC Techniques",
                    desc: "Understanding the Software Development Life Cycle (SDLC) is pivotal in the tech world. Acquire skills that align with industry standards and boost your project management proficiency.",
                  },
                  {
                    title: "Easy to Understand",
                    desc: "Learning shouldn't be complicated. Our tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone, whether you're a seasoned professional or a beginner.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="col-12 col-md-6 mb-3">
                    <p>
                      <b>{feature.title}</b> {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">

            {/* Left Side - Text */}
            <div className="col-12 col-md-6">
              <h4>Our LMS</h4>
              <h1 className="fw-bold">Guided Tutorials in Learning Management System</h1>
              <h5 className="mt-4 mb-4 text-muted">
                Want to learn something but don't know the roadmap, or your English is not strong?
                That's why we launched LMS for you.
              </h5>

              {/* Features Grid */}
              <div className="row">
                {[
                  {
                    title: "Sell Courses and Earn",
                    desc: "Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others while earning rewards for your expertise.",
                  },
                  {
                    title: "Certification",
                    desc: "Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to potential employers and stand out in a competitive landscape.",
                  },
                  {
                    title: "Courses in Urdu",
                    desc: "Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, our LMS ensures education is accessible and relatable for everyone.",
                  },
                  {
                    title: "Practice Exercises",
                    desc: "Theory is just the beginning. Our LMS offers practical exercises that refine your skills and apply your knowledge in real-world scenarios.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="col-12 col-md-6 mb-3">
                    <p>
                      <b>{feature.title}</b> {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="portal-img">
                <img src="/lms.png" alt="LMS" className="img-fluid w-100 rounded" />
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">

            {/* Left Side - Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="portal-img">
                <img src="/createcourse.png" alt="Create Course" className="img-fluid w-100 rounded" />
              </div>
            </div>

            {/* Right Side - Text */}
            <div className="col-12 col-md-6">
              <h4>Are you a Tech Instructor or Content Creator?</h4>
              <h1 className="fw-bold">Create Courses in Local Language & Generate Income</h1>
              <h5 className="mt-4 mb-4 text-muted">
                Are you a professional looking to start your journey as a tech instructor and content creator to generate revenue?
                Just visit Our LMS Instructor Portal.
              </h5>

              {/* Features Grid */}
              <div className="row">
                {[
                  {
                    title: "Upload Tutorials & Exercises",
                    desc: "Transform your expertise into impactful learning materials. As an instructor on Internee.pk LMS, you can effortlessly upload tutorials and exercises, shaping the educational experience for countless learners.",
                  },
                  {
                    title: "Generate Revenue",
                    desc: "Teach what you love and earn what you deserve. Internee.pk LMS offers instructors the opportunity to generate revenue. Monetize your expertise, reach a global audience, and make meaningful income from your passion.",
                  },
                  {
                    title: "Instructor Identity",
                    desc: "Internee.pk LMS provides a platform for instructors to build their brand. Showcase your skills, experience, and teaching style, creating a unique and recognizable identity in online education.",
                  },
                  {
                    title: "Perfect Share Ratio",
                    desc: "We believe in fair partnerships. Our LMS ensures transparency with a perfect share ratio, rewarding your hard work with the earnings you truly deserve.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="col-12 col-md-6 mb-3">
                    <p>
                      <b>{feature.title}</b> {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">

            {/* Left Side - Text */}
            <div className="col-12 col-md-6">
              <h4 >Already have a good skill but looking for a job?</h4>
              <h1 className="fw-bold">Job Portal - The Ultimate Place to Find the Best Job</h1>
              <h5 className="mt-4 mb-4 text-muted">
                Streamline the approval process with your customer to quickly close the deal,
                get the sale, and start production.
              </h5>

              {/* Features Grid */}
              <div className="row">
                {[
                  { title: "100% Mobile Friendly", desc: "Online art approvals ensure a seamless experience." },
                  { title: "Speed up the Design Process", desc: "Everything is done online, from mockup to final design." },
                  { title: "Communicate Easier", desc: "Add multiple recipients to an Art Approval to reduce email clutter." },
                  { title: "Add Changes Faster", desc: "Students can add comments to approvals for changes, saving time." },
                ].map((feature, index) => (
                  <div key={index} className="col-12 col-md-6 mb-3">
                    <p><b>{feature.title}</b> {feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="col-12 col-md-6 d-flex justify-content-center">
              <div className="portal-img">
                <img src="/job.png" alt="Job Portal" className="img-fluid w-100 rounded" />
              </div>
            </div>

          </div>
        </div>
      </section>






    </>


  )
}

