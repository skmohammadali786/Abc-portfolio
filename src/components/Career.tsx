import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Electrical Engineering Student</h4>
                <h5>Aliah University</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Pursuing Electrical Engineering degree. Developed foundational skills
              in engineering principles, IoT, and embedded systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full-Stack Developer</h4>
                <h5>Freelance / Open Source</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Building full-stack web applications and scalable solutions.
              Learning and implementing modern technologies like React, Node.js, and databases.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Developer & Student</h4>
                <h5>Aliah University</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Continuing studies while creating innovative software projects and
              building practical, high-performance web applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
