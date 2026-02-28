import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useRef, useEffect } from "react";
import "../css/navbar.css";

const Navbar = () => {
  const {
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
    isLoading,
  } = useAuth0();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  // close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  if (isLoading) return null;

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-logo">
          MyApp
        </Link>

        {isAuthenticated && (
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
        )}
        {isAuthenticated && (
          <Link to="/profile" className="navbar-link">
            Profile
          </Link>
        )}
      </div>

      <div className="navbar-right">
        {!isAuthenticated ? (
          <button
            className="navbar-btn"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        ) : (
          <div className="profile-wrapper" ref={dropdownRef}>
            <img
              src={user.picture}
              alt={user.name}
              className="navbar-avatar"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="profile-dropdown">
                <div className="profile-info">
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                </div>

                <Link
                  to="/profile"
                  className="dropdown-link"
                  onClick={() => setOpen(false)}
                >
                  View Profile
                </Link>

                <button
                  className="dropdown-logout"
                  onClick={() =>
                    logout({
                      logoutParams: {
                        returnTo: window.location.origin,
                      },
                    })
                  }
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;