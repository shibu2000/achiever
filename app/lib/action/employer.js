import { connectToDB } from "../dbConnection";
import { Job } from "../model/job";

export const addJob = async (formData) => {
  "use server";
  const {
    jobrole,
    job_loc,
    job_details,
    experience,
    job_type,
    other_req,
    accomodation,
  } = Object.fromEntries(formData);
  const skills = JSON.parse(formData.get("skills"));
  try {
    connectToDB();
    const newJob = new Job({
      jobrole,
      job_loc,
      skills,
      job_details,
      experience,
      job_type,
      other_req,
      accomodation,
    });
    await newJob.save();
  } catch (error) {
    throw new Error(error);
  }
};
