import mongoose from "mongoose";

const jobSchema = mongoose.Schema(
  {
    jobrole: {
      type: String,
    },
    job_loc: {
      type: String,
    },
    skills: [
      {
        type: String,
      },
    ],
    job_details: {
      type: String,
    },
    experience: {
      type: String,
    },
    job_type: {
      type: String,
    },
    other_req: {
      type: String,
    },
    accomodation: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
