import { z } from "zod";

export const InseminationSchema = z.object({
  inseminationDate: z.date({
    required_error: "A date of insemination.",
  }),
  mare: z.string({ required_error: "A mare is required." }),
  stallions: z.string().optional(),
});
