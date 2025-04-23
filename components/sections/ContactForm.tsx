// https://ui.shadcn.com/docs/components/form

"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z
    .string()
    .min(1, "Email address is required")
    .email("Please enter a valid email address"),
  message: z.string().max(500, "Max 500 characters").min(2, {
    message: "Message must be at least 2 characters.",
  }),
});

export default function Page() {
  // define a contact us form object with name, email, message
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        aria-labelledby="contact-form-heading"
        noValidate
      >
        <div className="form-fields flex flex-col gap-6 self-stretch">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>Name</FormLabel>
                <FormControl>
                  <Input
                    id={field.name}
                    placeholder="Your name"
                    {...field}
                    aria-describedby={`${field.name}-error`}
                    autoComplete="name"
                  />
                </FormControl>
                <div id={`${field.name}-error`} aria-live="polite">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>Email</FormLabel>
                <FormControl>
                  <Input
                    id={field.name}
                    type="email"
                    placeholder="example@example.com"
                    {...field}
                    aria-describedby={`${field.name}-error`}
                    autoComplete="email"
                  />
                </FormControl>
                <div id={`${field.name}-error`} aria-live="polite">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor={field.name}>Message</FormLabel>
                <FormControl>
                  <div className="flex flex-col">
                    <Textarea
                      id={field.name}
                      placeholder="Write your message..."
                      {...field}
                      className="min-h-32 resize-y"
                      aria-describedby={`${field.name}-description ${field.name}-error`}
                    />
                  </div>
                </FormControl>
                <FormDescription id={`${field.name}-description`}>
                  Share your thoughts, questions, or feedback.
                </FormDescription>
                <div id={`${field.name}-error`} aria-live="polite">
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />
        </div>

        <div className="flex items-center justify-end gap-4 mt-2">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
