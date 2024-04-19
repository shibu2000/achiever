import { Job } from "../model/job";

export const fetchJobs = async () => {
  try {
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};
