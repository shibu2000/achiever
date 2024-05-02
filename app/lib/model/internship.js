import mongoose from "mongoose";

const internshipSchema = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  skills: [{ type: String }],
  stipend: {
    type: String,
    required: true,
  },
  responsibilities: {
    type: String,
  },
  internship_duration: {
    type: String,
  },
  other_details: {
    type: String,
  },
  accomodation: {
    type: String,
  },
});

export const Internship =
  mongoose.models.Internship || mongoose.model("Internship", internshipSchema);
