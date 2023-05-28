import React from "react";

const ServiceContent = [
  {
    icon: "icon-desktop",
    title: "Website Design and Development",
    descriptions: ` I specialize in creating visually stunning and user-friendly websites. From conceptualization to implementation, I work closely with clients to understand their brand and deliver custom website designs that align with their vision. `,
    delayAnimation: "",
  },
  {
    icon: "icon-mobile",
    title: "Front-End UI Development",
    descriptions: `I excel in crafting interactive and intuitive user interfaces (UI) for websites and applications. Through meticulous attention to detail and a deep understanding of user experience, I transform design concepts into pixel-perfect front-end code. `,
    delayAnimation: "200",
  },
  {
    icon: "icon-phone",
    title: "Responsive Web Development",
    descriptions: `With the ever-increasing variety of devices and screen sizes, it's crucial for websites to be responsive. I specialize in developing websites that adapt and function flawlessly across desktops, tablets, and mobile devices. `,
    delayAnimation: "400",
  },
  {
    icon: "icon-speedometer",
    title: "Performance Optimization",
    descriptions: `Slow-loading websites can lead to user frustration and decreased engagement. As a front-end developer, I prioritize optimizing website performance to provide a speedy browsing experience. `,
    delayAnimation: "600",
  },
  {
    icon: "icon-browser",
    title: "Cross-Browser Compatibility",
    descriptions: `Ensuring that websites display consistently across different web browsers is crucial for reaching a wide audience.`,
    delayAnimation: "800",
  },
  {
    icon: "icon-pencil",
    title: "Third-Party API Integration",
    descriptions: `I offer expertise in integrating third-party APIs seamlessly into your web applications. Whether it's incorporating payment gateways, social media platforms, or data services. `,
    delayAnimation: "1000",
  },
];
export default function Service() {
  return (
    <>
      <div className="row">
        {ServiceContent.map((val, i) => (
          <div
            className="col-md-6 col-lg-4 my-3"
            key={i}
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay={val.delayAnimation}
          >
            <div className="feature-box-01">
              <div className="icon">
                <i className={`icon ${val.icon}`}></i>
              </div>
              <div className="feature-content">
                <h5>{val.title}</h5>
                <p>{val.descriptions}</p>
              </div>
            </div>
            {/* End .feature-box-01 */}
          </div>
        ))}
      </div>
    </>
  );
}
