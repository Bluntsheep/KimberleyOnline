import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  contactPerson: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["JobSeeker", "Employer"],
    required: true,
  },
  isPaid: {
    type: Boolean,
    default: false,
  },
  tokens: {
    type: Number,
    default: 0,
  },
  registeredDate: {
    type: Date,
    default: Date.now,
  },
});

const Company =
  mongoose.models.Company || mongoose.model("Company", companySchema);
export default Company;
