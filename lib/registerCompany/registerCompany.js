"use server";

import connectDB from "../mongodb";
import User from "@/models/usersModel";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
  await connectDB();
  const companyName = formData.get("companyName");
  const contactPerson = formData.get("contactPerson");
  const email = formData.get("email");
  const contactNumber = formData.get("contactNumber");
  const password = formData.get("password");
  const role = formData.get("role");

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, loginInfo, password: hashedPassword, role });

  redirect("/login");
}
