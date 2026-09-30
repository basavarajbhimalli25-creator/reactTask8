function About() {
  return (
    <div className="page-card">
      <h1>About Us</h1>

      <p>
        We are a technology-focused team working on modern web applications
        using React, JavaScript and other modern development technologies.
      </p>

      <div className="info-grid">
        <div className="info-box">
          <h3>Our Mission</h3>
          <p>
            To create simple, reliable and user-friendly digital solutions.
          </p>
        </div>

        <div className="info-box">
          <h3>Our Vision</h3>
          <p>
            To build innovative applications using modern technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;