"use server";
import { connectToDB } from "../dbConnection";
import { Candidate } from "../model/cadidate";
import { Internship } from "../model/internship";
import { Job } from "../model/job";

export const candidateRegistraton = async (formData) => {
  const { firstname, lastname, user_email, otp } = Object.fromEntries(formData);
  connectToDB();
  const isPresent = await Candidate.findOne({ email: user_email });
  if (isPresent.otp === otp) {
    try {
      const res = await Candidate.findByIdAndUpdate(isPresent.id, {
        isVerified: true,
        otp: "",
      });
      console.log(res);
      return {
        ok: true,
        message: "Successfully verified",
      };
    } catch (error) {
      console.log(error);
      return {
        ok: false,
        message: "Server error! Try again.",
      };
    }
  } else {
    return {
      ok: false,
      message: "Invalid OTP, Try again!",
    };
  }
};

export const candidateLogin = async (formData) => {
  const { email, otp } = Object.fromEntries(formData);
  try {
    const candidate = await Candidate.findOne({ email: email });
    if (candidate.isVerified && candidate.otp === otp) {
      return {
        ok: true, 
        message: "Login success",
        token: "passLoginSuccess",
      };
    } else {
      return {
        ok: false,
        message: "Invalid OTP",
        token: "",
      };
    }
  } catch (error) {
    throw new Error(error);
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
