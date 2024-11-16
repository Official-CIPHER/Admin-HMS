import React from "react";

const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
      <div className="banner">
        <h1>{title}</h1>
        <p>
          HorizonCare Medical Institute is a modern healthcare facility focused
          on providing high-quality care with compassion. Our skilled team works
          closely with each patient to offer personalized treatments that meet
          their specific needs. At HorizonCare, your health and well-being come
          first. We are here to support you every step of the way on your
          journey to better health and wellness.
        </p>
      </div>
      <div className="banner">
        <img src={imageUrl} alt="hero" className="animated-image" />
        <span>
          <img src="/Vector.png" alt="vector" />
        </span>
      </div>
    </div>
  );
};

export default Hero;
