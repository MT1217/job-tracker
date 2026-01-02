import { useEffect, useState } from "react";
import API from "../api/axios";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.get("/jobs").then(res => setJobs(res.data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Applications</h1>

      <div className="grid gap-4">
        {jobs.map(job => (
          <div key={job._id} className="bg-white p-4 rounded shadow">
            <h2 className="font-bold">{job.title}</h2>
            <p>{job.company}</p>
            <span className="text-sm text-gray-600">{job.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
