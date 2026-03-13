import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Dummy project data for the detailed view
const projectDetails = {
  "web-chat": {
    title: "Web Chat | Real-Time Messaging Application",
    subtitle: "A secure and scalable real-time web chat application with instant messaging, presence indicators, media sharing, and notification support.",
    overview: "Web Chat is a production-ready real-time messaging application designed for fast and reliable one-to-one communication. The platform supports secure user signup and login, private chats, real-time message delivery using Socket.IO, online/offline presence indicators, typing status, and in-app notifications. Media uploads are handled via Cloudinary, while MongoDB is used for user and message data persistence. The backend is built with Node.js and Express, the frontend with React and TypeScript, and the application is deployed on Render with a DevOps-focused setup for environment configuration, scalability, and monitoring.",
    roles: ["Full Stack Developer", "DevOps Engineer", "System Architecture Planner"],
    images: [
      "https://cdn.builder.io/api/v1/image/assets%2F81ae314314a944a484f924109045faa9%2F37f5b3a675504952bbdf04656b0a9652?format=webp",
      "https://cdn.builder.io/api/v1/image/assets%2F81ae314314a944a484f924109045faa9%2F6b0b92422479420c81bfd2115d644d7a?format=webp",
      "https://cdn.builder.io/api/v1/image/assets%2F81ae314314a944a484f924109045faa9%2Ff26f8c4f18ca4869bb772bdefb019b49?format=webp"
    ],
    techStack: [
      { name: "React", icon: "https://skillicons.dev/icons?i=react" },
      { name: "JavaScript", icon: "https://skillicons.dev/icons?i=js" },
      { name: "TypeScript", icon: "https://skillicons.dev/icons?i=ts" },
      { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
      { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
      { name: "Socket.IO", icon: "https://skillicons.dev/icons?i=socketio" },
      { name: "Cloudinary", icon: "https://skillicons.dev/icons?i=cloudinary" },
      { name: "Resend", icon: "https://skillicons.dev/icons?i=sendgrid" }, // Placeholder icon for resend
      { name: "Zustand", icon: "https://skillicons.dev/icons?i=redux" }, // Placeholder icon for zustand
      { name: "JWT Authentication", icon: "https://skillicons.dev/icons?i=auth0" },
      { name: "Tailwind CSS", icon: "https://skillicons.dev/icons?i=tailwind" }
    ],
    features: [
      "Real-time one-to-one messaging using Socket.IO with low-latency delivery.",
      "Secure user authentication with signup, login, and JWT-based access control.",
      "Online and offline presence detection with last-seen status tracking.",
      "Message delivery acknowledgements for reliable communication.",
      "In-app chat notifications with sound alerts for new messages.",
      "Image and media uploads using Cloudinary with optimized storage and delivery.",
      "API protection and abuse prevention using Arcjet-based rate limiting.",
      "MongoDB-based persistence for users and messages with indexed queries.",
      "Email notification templates sent via Resend when users receive messages while offline.",
      "Responsive and animated user interface built with Tailwind CSS and Framer Motion.",
      "Production deployment on Render with environment-based configuration and logging."
    ]
  }
};

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectDetails[id as keyof typeof projectDetails] || projectDetails["web-chat"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Layout>
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
           <Link to="/projects" className="hover:text-primary transition-colors">Projects</Link>
           <span>&gt;</span>
           <span className="text-foreground">{project.title}</span>
        </div>

        {/* Gallery Section */}
        <div className="space-y-6">
          <div className="relative aspect-video w-full bg-secondary/30 rounded-[3rem] overflow-hidden border border-border/50 group">
             <AnimatePresence mode="wait">
               <motion.img 
                  key={currentImageIndex}
                  src={project.images[currentImageIndex]} 
                  alt={`${project.title} ${currentImageIndex + 1}`} 
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
               />
             </AnimatePresence>

             {/* Arrows */}
             <button 
               onClick={prevImage}
               className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-all opacity-0 group-hover:opacity-100"
             >
               <ChevronLeft size={24} />
             </button>
             <button 
               onClick={nextImage}
               className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-all opacity-0 group-hover:opacity-100"
             >
               <ChevronRight size={24} />
             </button>

             {/* Indicator */}
             <div className="absolute bottom-6 right-10 bg-black/60 backdrop-blur-md px-4 py-1 rounded-full text-xs font-mono text-white">
                {currentImageIndex + 1} / {project.images.length}
             </div>
          </div>

          {/* Thumbnails */}
          <div className="flex items-center gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {project.images.map((img, i) => (
              <button 
                key={i}
                onClick={() => setCurrentImageIndex(i)}
                className={cn(
                  "w-32 aspect-video rounded-xl overflow-hidden border-2 transition-all flex-shrink-0",
                  currentImageIndex === i ? "border-primary scale-105 shadow-lg" : "border-border/50 hover:border-primary/50"
                )}
              >
                <img src={img} alt={`Thumbnail ${i + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Project Header Info */}
        <div className="space-y-8">
           <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold text-primary">{project.title}</h1>
              <p className="text-lg text-muted-foreground max-w-4xl leading-relaxed">{project.subtitle}</p>
           </div>
           
           <Button size="lg" className="rounded-2xl px-8 h-14 text-lg font-bold shadow-xl shadow-primary/20 group">
              <ExternalLink className="mr-2 group-hover:scale-110 transition-transform" size={20} />
              Live Demo
           </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 pt-12 border-t border-border/50">
           <div className="lg:col-span-2 space-y-16">
              {/* Overview */}
              <div className="space-y-6">
                 <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Overview</h2>
                 <p className="text-muted-foreground text-lg leading-relaxed">{project.overview}</p>
              </div>

              {/* Core Features */}
              <div className="space-y-6">
                 <h2 className="text-2xl font-bold uppercase tracking-widest text-foreground">Core Features</h2>
                 <ul className="space-y-4">
                    {project.features.map((feature, i) => (
                       <li key={i} className="flex items-start gap-4 text-muted-foreground text-lg leading-relaxed">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-3 flex-shrink-0" />
                          {feature}
                       </li>
                    ))}
                 </ul>
              </div>
           </div>

           <div className="space-y-16">
              {/* Roles & Responsibilities */}
              <div className="space-y-6">
                 <h2 className="text-xl font-bold uppercase tracking-widest text-foreground">Roles & Responsibilities</h2>
                 <div className="flex flex-wrap gap-3">
                    {project.roles.map((role, i) => (
                       <span key={i} className="px-4 py-2 bg-secondary rounded-full text-sm font-medium border border-border/50">
                          {role}
                       </span>
                    ))}
                 </div>
              </div>

              {/* Tech Stack */}
              <div className="space-y-6">
                 <h2 className="text-xl font-bold uppercase tracking-widest text-foreground">Tech Stack</h2>
                 <div className="grid grid-cols-2 gap-4">
                    {project.techStack.map((tech, i) => (
                       <div key={i} className="flex items-center gap-3 p-3 glass-card rounded-2xl border border-border/50">
                          <img src={tech.icon} alt={tech.name} className="w-6 h-6" />
                          <span className="text-sm font-medium">{tech.name}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Back Button */}
        <div className="pt-24 flex justify-center">
           <Link to="/projects">
              <Button size="lg" className="rounded-2xl px-12 h-14 text-lg font-bold shadow-xl shadow-primary/20 group">
                 <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                 Back to Projects
              </Button>
           </Link>
        </div>
      </div>
    </Layout>
  );
}
