"use server";

import Company from "@/models/companyModel";
import connectDB from "../mongodb";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function registerCompany(formData) {
  await connectDB();
  const companyName = formData.get("companyName");
  const contactPerson = formData.get("contactPerson");
  const email = formData.get("email");
  const contactNumber = formData.get("contactNumber");
  const password = formData.get("password");
  const role = formData.get("role") || "Employer";

  const hashedPassword = await bcrypt.hash(password, 10);
  await Company.create({
    companyName,
    contactPerson,
    email,
    contactNumber,
    password: hashedPassword,
    role,
  });

  redirect("/login");
}
