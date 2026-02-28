import { useAuth0 } from "@auth0/auth0-react";
import "../css/profile.css";

export default function Profile() {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();

  if (isLoading) {
    return (
      <div className="profile-container">
        <p style={{ color: "white" }}>Loading profile...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="profile-container">
        <p style={{ color: "red" }}>You are not authenticated.</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div style={{ textAlign: "center" }}>
          <img
            src={user.picture}
            alt={user.name}
            className="profile-avatar"
          />
          <h2 className="profile-name">{user.name}</h2>
          <p className="profile-email">{user.email}</p>
        </div>

        <div className="profile-section">
          <strong>User ID</strong>
          <p>{user.sub}</p>
        </div>

        <div className="profile-section">
          <strong>Email Verified</strong>
          <p>{user.email_verified ? "Yes " : "No "}</p>
        </div>

        <button
          className="profile-logout-btn"
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
    </div>
  );
}