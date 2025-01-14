import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Link } from "react-router-dom";

export const ContactSection = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    // Create mailto link with form data
    const subject = encodeURIComponent(data.subject);
    const body = encodeURIComponent(`Name: ${data.name}\nEmail: ${data.email}\n\nMessage: ${data.message}`);
    const mailtoLink = `mailto:LechlakGaming@Gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    toast.success("Email client opened! Send your message to complete.");
    reset();
  };

  return (
    <section id="contact" className="py-16 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Contact Us</h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Input
                {...register("name")}
                placeholder="Your Name"
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <Input
                {...register("email")}
                type="email"
                placeholder="Your Email"
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <Input
                {...register("subject")}
                placeholder="Subject"
                required
                className="bg-background/50"
              />
            </div>
            <div>
              <Textarea
                {...register("message")}
                placeholder="Your Message"
                required
                className="bg-background/50 min-h-[150px]"
              />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
        <div className="mt-12 text-center text-white/60">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </section>
  );
};