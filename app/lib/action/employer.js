import { redirect } from "next/navigation";
import { connectToDB } from "../dbConnection";
import { Job } from "../model/job";
import { revalidatePath } from "next/cache";
import { Internship } from "../model/internship";

export const addJob = async (formData) => {
  "use server";
  const {
    category,
    jobrole,
    job_loc,
    salary,
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
      category,
      jobrole,
      job_loc,
      skills,
      salary,
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
  revalidatePath("/employer/posts");
  redirect("/employer/posts");
};

export const addInternship = async (formData) => {
  "use server";
  const {
    category,
    role,
    location,
    stipend,
    responsibilities,
    internship_duration,
    other_details,
    accomodation,
  } = Object.fromEntries(formData);
  const skills = JSON.parse(formData.get("skills"));
  try {
    connectToDB();
    const newInternship = new Internship({
      category,
      role,
      location,
      skills,
      stipend,
      responsibilities,
      internship_duration,
      other_details,
      accomodation,
    });
    await newInternship.save();
  } catch (error) {
    throw new Error(error);
  }
  revalidatePath("/employer/posts");
  redirect("/employer/posts");
};
