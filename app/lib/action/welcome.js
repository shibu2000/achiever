const { connectToDB } = require("../dbConnection");
const { Job } = require("../model/job");

export const fetchJobsOnWelcome = async () => {
  "use server";
  try {
    connectToDB();
    const fetchThreeJobs = await Job.find().limit(3);
    return fetchThreeJobs;
  } catch (error) {
    throw new Error(error);
  }
};
