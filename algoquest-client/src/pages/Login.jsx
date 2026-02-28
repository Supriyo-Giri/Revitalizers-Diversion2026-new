import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  function handleLogin() {
    // Later connect backend
    navigate("/game");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>AlgoQuest Login</h1>
      <button onClick={handleLogin}>Enter Game</button>
    </div>
  );
}