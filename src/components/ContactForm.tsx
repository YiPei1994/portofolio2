import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { sendEmail } from "@/app/api/SendEmail";
import { useToast } from "./ui/use-toast";
import Reveal from "./animated/Reveal";

export const formSchema = z.object({
  name: z.string().min(2).max(20),
  email: z.string().email(),
  message: z.string(),
});

export type Email = z.infer<typeof formSchema>;

function ContactForm() {
  const { toast } = useToast();
  const form = useForm<Email>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<Email> = async (data) => {
    const result = await sendEmail(data);
    if (result?.success) {
      toast({
        description: "Thank you for your message. I will get back to you asap!",
      });
      form.reset();
    }
  };
  return (
    <Form {...form}>
      <form
        className="w-full flex items-center justify-center flex-col gap-8"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="w-4/5 m-auto">
              <FormControl>
                <Reveal type="text">
                  {" "}
                  <input
                    className="p-4 text-white bg-slate-900 rounded-[10px] w-full focus:border focus:border-primary border-slate-900/20 border focus:outline-none"
                    placeholder="name..."
                    {...field}
                  />
                </Reveal>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-4/5 m-auto">
              <FormControl>
                <Reveal type="text">
                  {" "}
                  <input
                    className="p-4 text-white bg-slate-900 rounded-[10px] w-full focus:border focus:border-primary border-slate-900/20 border focus:outline-none"
                    placeholder="email..."
                    type="email"
                    {...field}
                  />
                </Reveal>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="w-4/5 m-auto">
              <FormControl>
                <Reveal type="text">
                  {" "}
                  <textarea
                    className="p-4 text-white bg-slate-900 rounded-[10px] w-full min-h-[140px] border-slate-900/20 border focus:border focus:border-primary focus:outline-none"
                    placeholder="message..."
                    {...field}
                  />
                </Reveal>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-4/5">
          <button className="bg-primary rounded-[10px] py-2 px-4 ">
            &#60;Send greet / &#62;
          </button>
        </div>
      </form>
    </Form>
  );
}

export default ContactForm;
