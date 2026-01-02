import Job from "../models/Job.js";

export const createJob = async (req, res) => {
  const job = await Job.create({
    user: req.user._id,
    ...req.body
  });
  res.json(job);
};

export const getJobs = async (req, res) => {
  const jobs = await Job.find({ user: req.user._id });
  res.json(jobs);
};
