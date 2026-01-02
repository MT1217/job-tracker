import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function AddJob() {
  const [job, setJob] = useState({ title: "", company: "", status: "Applied" });
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", job);
    navigate("/dashboard");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Job</h2>
      <input placeholder="Title" onChange={e => setJob({...job, title:e.target.value})} />
      <input placeholder="Company" onChange={e => setJob({...job, company:e.target.value})} />
      <select onChange={e => setJob({...job, status:e.target.value})}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <button>Add</button>
    </form>
  );
}
