import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
    },
    jobrole: {
      type: String,
      required: true,
    },
    job_loc: {
      type: String,
      required: true,
    },
    skills: [
      {
        type: String,
      },
    ],
    salary: {
      type: String,
      required: true,
    },
    job_details: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    job_type: {
      type: String,
      required: true,
    },
    other_req: {
      type: String,
      required: true,
    },
    accomodation: {
      type: String,
    },
    employerId: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
