"use server";

import connectDB from "../mongodb";
import User from "@/models/usersModel";
import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";

export async function registerUser(formData) {
  await connectDB();
  const name = formData.get("name");
  const loginInfo = formData.get("loginInfo");
  const password = formData.get("password");
  const role = formData.get("role");

  const hashedPassword = await bcrypt.hash(password, 10);
  await User.create({ name, loginInfo, password: hashedPassword, role });

  redirect("/login");
}
