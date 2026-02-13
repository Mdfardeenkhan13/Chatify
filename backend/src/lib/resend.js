import { Resend } from "resend";
import "dotenv/config";
import { ENV } from "../lib/env.js"

export const resendClient = new Resend(process.env.RESEND_API_KEY);

export const sender = {
    email: ENV.EMAIL_FROM,
    name: ENV.EMAIL_FROM_NAME,
}