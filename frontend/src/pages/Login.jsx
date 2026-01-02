import { useState } from "react";
import API from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="bg-white p-8 rounded shadow w-96" onSubmit={submit}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input
          className="input"
          placeholder="Email"
          value={form.email}
          onChange={e => setForm({...form, email:e.target.value})}
        />

        <input
          className="input mt-2"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={e => setForm({...form, password:e.target.value})}
        />

        <button className="btn mt-4 w-full">Login</button>

        <p className="text-sm mt-3">
          No account? <Link className="text-blue-500" to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}
