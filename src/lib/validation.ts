import { z } from "zod";
import { jobTypes } from "./JobsTypes";

const requiredString = z.string().min(1, "Required");
const numericRequiredString = requiredString.regex(/^\d+$/, "Must be a number")
const companyLogoSchema = z
  .custom<File | undefined>()
  .refine((file) => {
    return !file || (file instanceof File && file.type.startsWith("image/"));
  }, "Must be image file")
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File must  be less than 2MN");

export const createJobSchema = z.object({
  title: requiredString.max(100),
  type: requiredString.refine(
    (value) => jobTypes.includes(value),
    "Invalid Job Type",
  ),
  companyName: requiredString.max(100),
  companyLogo: companyLogoSchema,
  description: z.string().max(1200).optional(),
  salary: numericRequiredString.max(9,"Number cant be longer that 9 digits")
});

export const jobFilterSchema = z.object({
  q: z.string().optional(),
  type: z.string().optional(),
  location: z.string().optional(),
  remote: z.coerce.boolean().optional(),
});

export type JobFilterValues = z.infer<typeof jobFilterSchema>;
