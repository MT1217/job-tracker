import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
      {token ? (
        <>
          <Link to="/dashboard">Dashboard</Link>{" "}
          <Link to="/add-job">Add Job</Link>{" "}
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/">Login</Link>{" "}
          <Link to="/register">Register</Link>
        </>
      )}
    </nav>
  );
}
