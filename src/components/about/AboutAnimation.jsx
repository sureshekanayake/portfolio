import React from "react";
import Social from "../Social";
import Testimonials from "../testimonial/TestimonialAnimation";
import Services from "../service/ServiceAnimation";

const About = () => {
  return (
    <>
      <section id="about" className="section theme-light dark-bg">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="about-me">
                <div className="img">
                  <div className="img-in">
                    <img src="img/about/about-me.png" alt="about" />
                  </div>

                  <Social />

                  {/* End social icon */}
                </div>
                {/* End img */}
                <div className="info">
                  <p>Front-End Developer</p>
                  <h3>Suresh Ekanayake</h3>
                </div>
                {/* End info */}
              </div>
              {/* End about-me */}
            </div>
            {/* End col */}

            <div
              className="col-lg-7 ml-auto"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <div className="about-info">
                <div className="title">
                  <h3>Biography</h3>
                </div>

                <div className="about-text">
                  <p>
                  Hello there! I am a passionate and dedicated front-end developer with 3 years of experience in the field. I have had the opportunity to work with two prominent companies in Sri Lanka, where I honed my skills and contributed to the development of innovative web solutions.
                  </p>
                  <p>
                  I am currently working as a front-end developer, utilizing my expertise to create visually appealing and user-friendly websites. With a strong foundation in software engineering, I graduated from Plymouth University, United Kingdom in 2020 with a BSc (Hons) degree in Software Engineering, achieving a second class upper division.
                  </p>
                  <p>
                  Thank you for taking the time to review my portfolio. I look forward to the opportunity to collaborate on exciting projects and contribute to the ever-evolving world of front-end development. Feel free to reach out to me for any inquiries or potential collaborations.
                  </p>
                </div>
                <div className="info-list">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Name: </label>
                          <span>Suresh Ekanayake</span>
                        </li>
                        <li>
                          <label>Birthday: </label>
                          <span>4th November 1997</span>
                        </li>
                        
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul>
                        <li>
                          <label>Phone: </label>
                          <span><a href="tel:94719659924">(+94) 71 965 9924</a></span>
                        </li>
                        <li>
                          <label>Email: </label>
                          <span><a href="mailto:sureshawantha97@gmail.com;">sureshawantha97@gmail.com</a></span>
                        </li>
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End col */}
          </div>

          {/* separated */}

          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>

          {/* End separated */}
          <div className="title">
            <h3>What I do?</h3>
          </div>

          <Services />

          {/* End .row */}

          {/* separated */}
          <div
            className="separated"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/border-dark.png"
              })`,
            }}
          ></div>
          {/* End separated */}

          

          

          <div className="title">
            <h3>Testimonials.</h3>
          </div>

          <Testimonials />
          {/* End Testimonaial */}
        </div>
      </section>
    </>
  );
};

export default About;
