import { z } from "zod";

const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;

export const formSchema = z.object({
  Firstname: z
    .string()
    .min(2, { message: "First name must be at least 2 characters." })
    .regex(nameRegex, { message: "First name must contain only letters." }),

  Secoundname: z
    .string()
    .min(2, { message: "Last name must be at least 2 characters." })
    .regex(nameRegex, { message: "Last name must contain only letters." }),

  email: z
    .string()
    .email({ message: "Enter a valid email address." })
    .regex(nameRegex, { message: "First name must contain only letters." }),

  subject: z
    .string()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(100, { message: "Subject must be under 100 characters." }),

  title: z
    .string()
    .min(5, { message: "Message must be at least 5 characters." })
    .max(1000, { message: "Message is too long (max 1000 characters)." }),
});
