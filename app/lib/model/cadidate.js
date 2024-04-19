import mongoose from "mongoose";

const candidateSchema = mongoose.Schema(
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
  },
  { timestamps: true }
);

export const Candidate =
  mongoose.models.Candidate || mongoose.model("Candidate", candidateSchema);
