import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HeaderNav = () => {
   const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("registeredUser");
    navigate("/login");
  };
  return (
    <div className="header-nav">
      <h3 className="nav-title">Real world blog</h3>
      <nav>
        <NavLink to="/" className="nav-tag">
          Home
        </NavLink>
        <NavLink to="/new-post" className="nav-tag">
          New post
        </NavLink>
        <NavLink to="/settings" className="nav-tag">
          Setings
        </NavLink>
        <NavLink to="/login" className="nav-tag">
          Log In
        </NavLink>
        <button type="button" className="logout-btn" onClick={handleLogout}>
          log out
        </button>
      </nav>
    </div>
  );
};

export default HeaderNav;
