import React from "react";
import Skills from "../skills/Skills";

const resumeContent = [
  {
    jobPosition: `Sr. Front-End Engineer`,
    jobType: `Conscience | Remote`,
    jobDuration: `Jan 2021 - Present`,
    timeDuraton: `Full Time`,
    compnayName: "Conscience Integrated (PVT) Ltd.",
    jobDescription: `As a senior front-end engineer, I bring a wealth of experience and expertise to the development of web applications. With a deep understanding of front-end technologies and best practices, I lead the implementation of complex projects, driving innovation and ensuring high-quality code. Leveraging my strong problem-solving skills and attention to detail, I collaborate with cross-functional teams to deliver exceptional user experiences. With a focus on scalability, performance, and maintainability, I take pride in mentoring and guiding junior developers, elevating the overall proficiency of the team.`,
    delayAnimation: "",
  },
  {
    jobPosition: `Software Engineer`,
    jobType: `Rameca | Remote`,
    jobDuration: `Jun 2020 - Dec 2020`,
    timeDuraton: `Full Time`,
    compnayName: "Rameca Technology Solutions (PVT) Ltd.",
    jobDescription: `As a frontend software engineer, I played a pivotal role in the development of cutting-edge web applications. With a strong foundation in software engineering principles and a keen eye for frontend development, I implemented robust and scalable solutions using HTML, CSS, and JavaScript. Collaborating closely with designers and backend developers, I transformed design concepts into functional and visually appealing user interfaces. Through meticulous testing and debugging, I ensured the delivery of high-quality, bug-free code. I took pride in staying up-to-date with the latest frontend technologies, frameworks, and best practices, continually enhancing my skills to deliver top-notch software solutions.`,
    delayAnimation: "100",
  },
];

const educatonContent = [
  {
    passingYear: "2017-2020",
    degreeTitle: "BSc. (Hons) Software Engineering 2nd Class Upper Division",
    instituteName: "University Of Plymouth, United Kingdom.",
  },
  {
    passingYear: "2016",
    degreeTitle: "G.C.E. Advanced Level (Science Stream)",
    instituteName: "St. John's College, Nugegoda.",
  },
  {
    passingYear: "2013",
    degreeTitle: "G.C.E. Ordinary Level ",
    instituteName: "St. John's College, Nugegoda.",
  },
];

const Resume = () => {
  return (
    <>
      <section id="resume" className="section">
        <div className="container">
          <div className="title">
            <h3>Experience.</h3>
          </div>
          {/* End title */}
          <div className="resume-box">
            {resumeContent.map((val, i) => (
              <div
                className="resume-row"
                key={i}
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay={val.delayAnimation}
              >
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="rb-left">
                      <h6>{val.jobPosition}</h6>
                      <label>{val.jobType}</label>
                      <p>{val.jobDuration}</p>
                      <div className="rb-time">{val.timeDuraton}</div>
                    </div>
                  </div>
                  <div className="col-md-8 col-xl-9">
                    <div className="rb-right">
                      <h6>{val.compnayName}</h6>
                      <p>{val.jobDescription}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
            <h3>Education & Skills</h3>{" "}
          </div>

          <div className="row align-items-center">
            <div
              className="col-lg-4 m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <ul className="aducation-box">
                {educatonContent.map((val, i) => (
                  <li key={i}>
                    <span>{val.passingYear}</span>
                    <h6>{val.degreeTitle} </h6>
                    <p>{val.instituteName}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
            {/* End .col */}

            <div
              className="col-lg-7 ml-auto m-15px-tb"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <Skills />
            </div>
            {/* End .col */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
