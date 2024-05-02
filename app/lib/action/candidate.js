import { connectToDB } from "../dbConnection";
import { Internship } from "../model/internship";
import { Job } from "../model/job";

export const fetchJobs = async () => {
  try {
    await connectToDB();
    const jobs = await Job.find();
    return jobs;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchInternships = async () => {
  try {
    await connectToDB();
    const internships = await Internship.find();
    return internships;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchJobById = async (id) => {
  try {
    await connectToDB();
    const details = await Job.findById(id);
    return details;
  } catch (error) {
    throw new Error(error);
  }
};
