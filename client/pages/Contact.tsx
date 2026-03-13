import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { Mail, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true);
    // FormSubmit.co will handle the submission, reset after a brief delay
    setTimeout(() => {
      setIsSubmitted(true);
      setIsLoading(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 500);
  };
  return (
    <Layout>
      <section id="contact" className="py-32 bg-background relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader 
                subtitle="Get in Touch" 
                title="Let's Build Something Amazing" 
                description="Whether you have a specific project in mind or just want to chat about possibilities, I'm always open to new connections."
              />
              
              <div className="space-y-8">
                 <div className="flex items-center gap-6 p-6 glass-card rounded-3xl border border-border/50 group hover:border-primary/50 transition-all cursor-pointer">
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                       <Mail size={28} />
                    </div>
                    <div>
                       <p className="text-sm font-medium text-muted-foreground">Email Me</p>
                       <p className="text-xl font-bold">ahmadalisha1420@gmail.com</p>
                    </div>
                 </div>
                 
                 <div className="flex items-center gap-6 p-6 glass-card rounded-3xl border border-border/50 group hover:border-primary/50 transition-all cursor-pointer">
                    <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-foreground group-hover:scale-110 transition-transform">
                       <MessageCircle size={28} />
                    </div>
                    <div>
                       <p className="text-sm font-medium text-muted-foreground">WhatsApp</p>
                       <p className="text-xl font-bold">+91 7288827181</p>
                    </div>
                 </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 rounded-[3rem] border border-border/50 shadow-2xl relative"
            >
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm rounded-[3rem] z-50"
                >
                  <div className="text-center space-y-4">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary animate-pulse">
                        <CheckCircle2 size={48} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                    <p className="text-muted-foreground">I'll get back to you as soon as possible.</p>
                  </div>
                </motion.div>
              )}
               <form
                  action="https://formsubmit.co/ahmadalisha1420@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
               >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold ml-1 uppercase tracking-wider">Your Name</label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                          className="h-14 rounded-2xl border-border/50 bg-secondary/30 focus:bg-background transition-all"
                        />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold ml-1 uppercase tracking-wider">Email Address</label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          className="h-14 rounded-2xl border-border/50 bg-secondary/30 focus:bg-background transition-all"
                        />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold ml-1 uppercase tracking-wider">Subject</label>
                     <Input
                       type="text"
                       name="subject"
                       placeholder="Project Inquiry"
                       required
                       className="h-14 rounded-2xl border-border/50 bg-secondary/30 focus:bg-background transition-all"
                     />
                  </div>
                  <div className="space-y-2">
                     <label className="text-sm font-bold ml-1 uppercase tracking-wider">Message</label>
                     <Textarea
                       name="message"
                       placeholder="Tell me about your project..."
                       required
                       className="min-h-[150px] rounded-3xl border-border/50 bg-secondary/30 focus:bg-background transition-all resize-none"
                     />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-16 rounded-2xl text-lg font-bold shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all disabled:opacity-70"
                  >
                     {isLoading ? "Sending..." : "Send Message"}
                  </Button>
               </form>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
