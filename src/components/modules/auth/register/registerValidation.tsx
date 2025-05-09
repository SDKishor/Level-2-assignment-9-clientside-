import { z } from "zod";

export const registrationSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email("Invalid email address"),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  passwordConfirm: z
    .string({ required_error: "Password Confirmation is required" })
    .min(1),
});
