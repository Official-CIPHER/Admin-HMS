import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
      <div className="banner">
        <img src={imageUrl} alt="aboutImg" />
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
          HorizonCare Medical Institute was founded with the mission to provide
          compassionate, high-quality healthcare to all. Our team of dedicated
          professionals offers a wide range of medical services, ensuring
          personalized care for every patient. With a focus on modern treatments
          and a patient-first approach, we aim to make healthcare accessible,
          efficient, and supportive. At HorizonCare, we believe in fostering
          wellness and guiding individuals toward healthier lives through
          expertise, trust, and care.
        </p>
        <p>
          Personalized care with advanced facilities and compassionate
          professionals.
        </p>
        <p>Improving health through personalized care and modern treatments.</p>
        <p>
          We are committed to promoting preventive care, empowering patients
          with health education, and continuously enhancing our services through
          innovation and research. HorizonCare strives to build lasting
          relationships with the community, ensuring accessible healthcare for
          all.
        </p>
        <p>
          We focus on seamless patient experiences, health education, and
          community well-being.
        </p>

        <p>Best Medical Care</p>
      </div>
    </div>
  );
};

export default Biography;
