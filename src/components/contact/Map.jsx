import React from "react";

const Map = () => {
  return (
    <>
      <div className="google-map">
        <div className="embed-responsive embed-responsive-21by9">
          <iframe
            className="embed-responsive-item"
            title="location title"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.4980169811693!2d79.94730331477236!3d6.830731995063324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNDknNTAuNiJOIDc5wrA1Nic1OC4yIkU!5e0!3m2!1sen!2sus!4v1685205192495!5m2!1sen!2sus"
          ></iframe>
        </div>
      </div>
      {/* End google-map */}
    </>
  );
};

export default Map;
