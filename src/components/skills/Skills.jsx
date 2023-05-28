import React from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const skillContent = [
  {
    name: "Programming Languages (HTML, CSS, JavaScript)",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "Design Tools (Sketch, Adobe XD, Figma)",
    numberPercent: "90",
    startCount: "0",
    endCount: "90",
  },
  {
    name: "JS Frameworks (React, Angular, Vue.js)",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "Cross-Browser Compatibility",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "SEO",
    numberPercent: "80",
    startCount: "0",
    endCount: "80",
  },
  {
    name: "Version Control",
    numberPercent: "75",
    startCount: "0",
    endCount: "75",
  },
];

const Skills = () => {
  const [focus, setFocus] = React.useState(false);
  return (
    <>
      <div className="skill-wrapper">
        {skillContent.map((skill, i) => (
          <div className="skill-lt" key={i}>
            <h6>{skill.name}</h6>
            <span className="count-inner">
              <CountUp
                start={focus ? skill.startCount : null}
                end={skill.endCount}
                duration={1}
                redraw={true}
              >
                {({ countUpRef }) => (
                  <VisibilitySensor
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
              %
            </span>
            <div className="skill-bar">
              <div
                className="skill-bar-in"
                style={{ width: skill.numberPercent + "%" }}
              ></div>
            </div>
          </div>
          // End skill-lt
        ))}
      </div>
    </>
  );
};

export default Skills;
