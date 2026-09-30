import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="page-card">
        <h1>Welcome to ReactTask</h1>

        <p>
          This is the Home page of our React Routing application.
          Explore our services and learn more about our development solutions.
        </p>

        <Link to="/services" className="primary-btn">
          Explore Services
        </Link>
      </div>
    </section>
  );
}

export default Home;