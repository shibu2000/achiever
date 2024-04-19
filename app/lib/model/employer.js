import mongoose from "mongoose";

const employerSchema = mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
      min: 2,
    },
    lastname: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export const Employer = mongoose.model("Employer", employerSchema);
