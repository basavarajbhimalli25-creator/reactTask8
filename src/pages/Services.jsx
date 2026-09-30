import { NavLink, Outlet } from "react-router-dom";

function Services() {
  return (
    <div className="page-card">
      <h1>Our Services</h1>

      <p>
        Choose one of our services to learn more about our development
        solutions.
      </p>

      <div className="nested-nav">
        <NavLink
          to="/services/web-development"
          className={({ isActive }) =>
            isActive ? "nested-link active-nested" : "nested-link"
          }
        >
          Web Development
        </NavLink>

        <NavLink
          to="/services/app-development"
          className={({ isActive }) =>
            isActive ? "nested-link active-nested" : "nested-link"
          }
        >
          App Development
        </NavLink>

        <NavLink
          to="/services/ui-ux-design"
          className={({ isActive }) =>
            isActive ? "nested-link active-nested" : "nested-link"
          }
        >
          UI/UX Design
        </NavLink>
      </div>

      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Services;