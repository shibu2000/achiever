import { connectToDB } from "../dbConnection";
import { Job } from "../model/job";

export const fetchJobs = async () => {
  try {
    connectToDB();
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};
export const fetchJobById = async (id) => {
  try {
    connectToDB();
    const details = Job.findById(id);
    return details;
  } catch (error) {
    throw new Error(error);
  }
};
