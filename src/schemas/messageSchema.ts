import { Content } from "next/font/google";
import {z} from "zod";

export const  messageSchema = z.object({
    Content: z
    .string() 
    .min(10, {message: 'Content must be at least 10 characters'})
    .max(300, {message: 'Content must be no  longer than 300 characters'})
})