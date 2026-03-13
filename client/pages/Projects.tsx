import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";

const allProjects = [
  {
    id: "AI Platform",
    title: "Resonance - AI-Powered audio generation Platform",
    type: "Software Application",
    category: "Web Application",
    description: "AI-powered text-to-speech and voice cloning built with Next.js 16, React 19, and Chatterbox TTS.",
    image: "/resonance.png",
    techStack: [" Next.js","React", "TypeScript", "PostgreSQL","Tailwind CSS", "Sentry", "Cloudflare", "Railway"],
    liveUrl: "https://resonance-production-d84f.up.railway.app",
  },
  {
    id: "Analytics Dashboard",
    title: "Pixel-Real time analytics dashboard for Website Performance",
    type: "Analytics Dashboard",
    category: "Web Application",
    description: "A real-time analytics dashboard for monitoring website performance and user engagement built with Next.js 16, Insforge Authentication, and Tailwind CSS.",
    image: "/pixel.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Insforge"],
    liveUrl: "https://pixel-theta-ten.vercel.app/",
  },
  {
    id: "supportai",
    title: "SupportAI - AI-Powered Customer Support Chatbot",
    type: "Customer Support Chatbot",
    category: "Web Application",
    description: "A production-grade, full-stack SaaS AI chatbot platform designed to be embedded into any website.",
    image: "/supportai.png",
    techStack: ["Next.js","React", "Typescript", "Scalekit", "Framer Motion", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://support-ai-sigma.vercel.app/",
  },
  {
    id: "TechBlog",
    title: "TechBlog - Personal Tech Blog Platform",
    type: "Blogging Platform",
    category: "Web Application",
    description: "A personal tech blogging platform built with Next.js 16, React 19, and Tailwind CSS, featuring a sleek UI and seamless content management.",
    image: "/techblog.png",
    techStack: ["Next.js","React", "Typescript", "BetterAuth", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://tech-blog-beige-eight.vercel.app/",
  },
  {
    id: "MultiCart",
    title: "MultiCart - Multi-Vendor E-commerce Platform",
    type: "E-commerce Application",
    category: "Web Application",
    description: "A multi-vendor e-commerce platform built with Next.js 16, React 19, and Tailwind CSS, enabling seamless online shopping experiences for both customers and vendors.",
    image: "/multicart.png",
    techStack: ["Next.js","React", "Typescript", "BetterAuth", "Tailwind CSS", "MongoDB", "Framer Motion", "Cloudinary"],
    liveUrl: "https://multi-cart-one.vercel.app/",
  },
  {
    id: "Polaris",
  title: "Polaris - Browser based Cloud IDE",
    type: "Cloud IDE",
    category: "Web Application",
    description: "A modern, browser-based Cloud IDE inspired by Cursor, designed to deliver real-time collaboration, AI-assisted development, and scalable project management directly in the browser.",
    image: "/polaris.png",
    techStack: ["Next.js","React", "Typescript", "Clerk", "Convex"],
    liveUrl: "https://polaris-opal-phi.vercel.app/",
  },
];

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <SectionHeader
              subtitle="My Portfolio"
              title="Creative Projects"
              description="Explore my latest work across web development, software engineering, and UI/UX design."
              center
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                category={project.category}
                techStack={project.techStack}
                type={project.type}
                liveUrl={project.liveUrl}
              />
            ))}
          </div>

          <div className="pt-24 text-center">
             <SectionHeader
               subtitle="Next Steps"
               title="Ready to Start Your Project?"
               center
             />
             <Link to="/book">
               <Button size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                  Book a Meeting
               </Button>
             </Link>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}
