import { z } from "zod";

const adminLoginSchema = z.object({
  email: z.email().max(255),
  password: z.string().min(8).max(128),
});

export { adminLoginSchema };
