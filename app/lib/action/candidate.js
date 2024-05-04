"use server";
import { connectToDB } from "../dbConnection";
import { Candidate } from "../model/cadidate";
import { Internship } from "../model/internship";
import { Job } from "../model/job";

export const candidateRegistraton = async (formData) => {
  "use server";
  const { firstname, lastname, user_email, otp } = Object.fromEntries(formData);
  console.log(otp)
  connectToDB();
  const isPresent = await Candidate.findOne({ email: user_email });
  console.log(isPresent)
  if (isPresent.otp === otp) {
    try {
      const res = await Candidate.findByIdAndUpdate(isPresent.id, {
        lastname,
        isVerified: true,
        otp: "1",
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("wrong");
  }
};

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
