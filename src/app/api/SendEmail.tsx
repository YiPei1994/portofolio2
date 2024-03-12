"use server";

import { Email, formSchema } from "@/components/ContactForm";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_APIKEY);

export async function sendEmail(formData: Email) {
  const result = formSchema.safeParse(formData);

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: email,
        to: "studentypz@gmail.com",
        subject: `Hello, im ${name} from your porfolio website`,
        html: `<p>here is my message to you.</p>
        <p>${message}</p>`,
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { sucess: false, error: result.error.format() };
  }
}
