import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight, Briefcase, ChevronRight, Play, Star, Plus,
  Globe, Code, Server, Palette, Layers, Terminal, Sparkles,
  HelpCircle, ExternalLink, Linkedin,
  Github
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { SectionHeader } from "@/components/SectionHeader";

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
      <div className="hero-blob bg-primary/40 w-[600px] h-[600px] -top-64 -right-32 animate-float" />
      <div className="hero-blob bg-blue-500/20 w-[400px] h-[400px] top-64 -left-32 animate-pulse-slow" />
      <div className="hero-blob bg-emerald-500/20 w-[500px] h-[500px] bottom-0 right-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for Freelance & Full-time
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
            Crafting <span className="gradient-text">Digital</span> <br />
            Experiences
          </h1>

          <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
            I'm <span className="text-foreground font-bold">Syed Ahmad Alisha</span> — a Software Developer building scalable, user-centric web applications with modern technologies.
          </p>

          <div className="flex flex-wrap items-center gap-5 pt-4">
            <Link to="/resume2.pdf" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="rounded-2xl px-8 h-14 text-lg shadow-xl shadow-primary/20 hover:scale-105 transition-all group">
                Resume
                <Briefcase className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="https://www.linkedin.com/in/syed-ahmad-alisha/" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg" className="rounded-2xl px-8 h-14 text-lg border-2 hover:bg-secondary/50 group">
                Connect
                <Linkedin className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-10 border-t border-border/50">
            <div>
              <p className="text-3xl font-bold">2.5+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div>
              <p className="text-3xl font-bold">10+</p>
              <p className="text-sm text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="w-px h-10 bg-border/50" />
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="fill-yellow-400 text-yellow-400" size={16} />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">(5/5 Reviews)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative lg:justify-self-end"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110" />
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] rounded-[3rem] overflow-hidden border-8 border-background shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500">
            <img
              src="/pic.jpg"
              alt="Syed Ahmad Alisha"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="absolute -bottom-6 -left-6 md:-left-12 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl">
              10+
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest">Happy Clients</p>
              <p className="font-bold">Globally</p>
            </div>
          </div>

          <div className="absolute top-1/2 -right-6 md:-right-12 glass-card p-4 rounded-2xl flex items-center gap-3 animate-float shadow-xl" style={{ animationDelay: "1s" }}>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white">
              <Play fill="white" size={16} />
            </div>
            <p className="font-bold whitespace-nowrap">Watch Portfolio</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  const stats = [
    { label: "Experience", value: "2.5+" },
    { label: "Projects", value: "10+" },
    { label: "Skills", value: "25+" },
    { label: "LeetCode", value: "500+" },
  ];

  return (
    <section id="about" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Stats Row - Each stat in its own card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 md:mb-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[2rem] border border-border/50 flex flex-col items-center justify-center text-center space-y-3 group hover:border-primary/30 transition-all duration-500 shadow-xl"
            >
              <span className="text-4xl md:text-5xl font-black text-foreground tracking-tight group-hover:scale-110 transition-transform duration-500">{stat.value}</span>
              <span className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-black">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Left Side: Content - Clean and Focused */}
          <div className="lg:col-span-7 space-y-10 max-w-2xl">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tighter text-foreground">
              A software developer with a <span className="text-primary italic relative inline-block">
                vision
                <svg className="absolute -bottom-1 left-0 w-full" height="6" viewBox="0 0 100 6" fill="none" preserveAspectRatio="none">
                  <path d="M0 4C30 1 70 1 100 4" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </span> for excellence.
            </h3>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="font-medium text-foreground/80">
                Based in India, I&apos;m an AI & Machine Learning engineering student passionate about building intelligent systems and impactful software solutions. My work focuses on combining artificial intelligence with practical applications that solve real-world problems.
              </p>

              <p>
                I have experience developing AI-powered applications such as virtual assistants, video summarization tools, and data-driven systems. My approach emphasizes clean architecture, efficient algorithms, and intuitive user experiences.
              </p>

              <p>
                I continuously explore new technologies in AI, machine learning, and software development to build smarter, scalable solutions. I believe technology should not only be powerful but also accessible and meaningful for the people who use it.
              </p>
            </div>

            <div className="pt-2">
              <Link to="/about">
                <Button size="lg" className="rounded-xl px-10 h-16 font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/20 transition-all group">
                  Read Full Story
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Side: Compact Cards - Tighter and Minimal */}
          <div className="lg:col-span-5 space-y-6 w-full lg:max-w-md ml-auto">
            <div className="bg-secondary/20 p-8 rounded-[2rem] border border-border/50 space-y-6 relative group hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary shadow-inner border border-primary/20">
                <Briefcase size={20} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Open to Work</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">Available for new opportunities and collaborations on exciting projects. Let's build something amazing together.</p>
              </div>
              <Link to="/contact" className="block">
                <Button variant="outline" className="w-full rounded-xl h-12 border-border/50 hover:bg-secondary/50 font-bold transition-all text-sm">
                <Github className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  Have a look at my work
                </Button>
              </Link>
            </div>

            <div className="bg-secondary/20 p-8 rounded-[2rem] border border-border/50 space-y-6 relative group hover:border-primary/20 transition-all duration-300">
              <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-foreground shadow-inner border border-border/20">
                <Globe size={20} />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold">Based in</h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">India, bringing a global perspective to every local challenge. Serving clients across the globe from my home base.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Web App Architecture",
      description: "Designing scalable and robust architectures for complex web applications using modern best practices.",
      icon: Globe,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      title: "Frontend Development",
      description: "Building high-performance, responsive, and visually stunning user interfaces with React and Tailwind CSS.",
      icon: Code,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Backend Development",
      description: "Developing secure, efficient, and scalable server-side logic and database structures with Node.js.",
      icon: Server,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      title: "UI/UX Design",
      description: "Crafting intuitive and engaging user experiences through modern design principles and prototyping.",
      icon: Palette,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      title: "Server Management",
      description: "Deploying and managing web servers, ensuring high availability and seamless performance.",
      icon: Layers,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Technical Consulting",
      description: "Providing expert advice on technology choices and strategic planning for software products.",
      icon: Terminal,
      color: "text-indigo-500",
      bgColor: "bg-indigo-500/10",
    },
  ];

  return (
    <section id="services" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            subtitle="What I Do"
            title="Services & Expertise"
            description="I offer a comprehensive range of software development services to help you build and scale your digital products."
          />
          <Link to="/services">
            <Button variant="link" className="text-primary font-bold text-lg p-0 h-auto group hidden md:flex items-center pb-16">
              View All Services
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={20} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-[2.5rem] border border-border/50 hover:border-primary/50 group transition-all duration-300"
            >
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/20", service.bgColor)}>
                <service.icon size={32} className={cn("transition-transform group-hover:scale-110", service.color)} />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "Resonance",
      category: "Web Application",
      description: "AI-powered text-to-speech and voice cloning built with Next.js 16, React 19, and Chatterbox TTS.",
      image: "/resonance.png",
      link: "https://resonance-production-d84f.up.railway.app",
      github:"https://github.com/Alisha-21-cloud/Resonance.git",
      featured: true,
    },
    {
      title: "Pixel",
      category: "Web Application",
      description: " Full Stack Analytics SaaS Platform built with Next.js 16, Insforge Authentication, and Tailwind CSS",
      image: "/pixel.png",
      link: "https://pixel-theta-ten.vercel.app/",
      github: "https://github.com/Alisha-21-cloud/Pixel.git",
    },
    {
      title: "Support.AI",
      category: "web Application",
      description: "A production-grade, full-stack SaaS AI chatbot platform designed to be embedded into any website.",
      image: "/supportai.png",
      link: "https://support-ai-sigma.vercel.app/",
      github: "https://github.com/Alisha-21-cloud/support.ai.git",
    },
    {
      title: "TechBlog",
      category: "Web Application",
      description: "A production-grade blog platform built with Next.js App Router, following real-world engineering patterns rather than demo-level shortcuts.",
      image: "/techblog.png",
      link: "https://tech-blog-beige-eight.vercel.app/",
      github: "https://github.com/Alisha-21-cloud/TechBlog.git",
    },
  ];

  return (
    <section id="projects" className="py-32 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="Portfolio"
          title="Selected Work"
          description="A selection of my best work across various industries and technologies."
        />

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group relative glass-card rounded-[3rem] overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="h-80 md:h-[500px] overflow-hidden">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="p-10 md:p-16 flex flex-col justify-center space-y-6">
                <span className="text-sm font-bold uppercase tracking-widest text-primary">{projects[0].category}</span>
                <h3 className="text-3xl md:text-5xl font-bold">{projects[0].title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{projects[0].description}</p>
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  <Button size="lg" className="rounded-2xl px-8 group" onClick={() => window.open(projects[0].link, "_blank")}>
                    View Project
                    <ExternalLink className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
                  </Button>
                  <Button variant="ghost" size="lg" className="rounded-2xl px-8 hover:bg-secondary/50" onClick={() => window.open(projects[0].github, "_blank")}>
                    View GitHub
                    <Github className="ml-2" size={16} />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-[2.5rem] overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 shadow-xl"
            >
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]" onClick={() => window.open(project.link, "_blank")}>
                  <div className="bg-background/90 p-4 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <ExternalLink className="text-primary" size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{project.category}</span>
                <h4 className="text-2xl font-bold group-hover:text-primary transition-colors">{project.title}</h4>
                <p className="text-muted-foreground leading-relaxed line-clamp-2">{project.description}</p>
                <Button variant="link" className="p-0 h-auto font-bold text-primary group-hover:translate-x-1 transition-transform" onClick={() => window.open(project.github, "_blank")}>
                  View GitHub
                  <Github className="ml-2" size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    {
      title: "Discovery & Strategy",
      description: "We start by understanding your goals, target audience, and market landscape to build a solid foundation.",
      icon: Sparkles,
      step: "01",
    },
    {
      title: "Design & Prototype",
      description: "We create interactive prototypes and high-fidelity designs that focus on user experience and aesthetics.",
      icon: Palette,
      step: "02",
    },
    {
      title: "Development & Architecture",
      description: "Our developers build scalable, high-performance solutions using modern tech stacks and best practices.",
      icon: Code,
      step: "03",
    },
    {
      title: "Testing & Deployment",
      description: "Rigorous testing ensures a bug-free product, followed by seamless deployment and support.",
      icon: Layers,
      step: "04",
    },
  ];

  return (
    <section id="process" className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="Process"
          title="How I Work"
          description="My streamlined process ensures clear communication and high-quality results from start to finish."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 rounded-[3rem] border border-border/50 hover:border-primary/50 group transition-all duration-300 relative"
            >
              <div className="absolute top-6 right-8 text-7xl font-extrabold text-primary/10 group-hover:text-primary/20 transition-colors pointer-events-none">
                {step.step}
              </div>
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-inner border border-white/20">
                <step.icon size={32} className="text-primary transition-transform group-hover:scale-110" />
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
  {
    question: "What is your current role and availability?",
    answer: "I'm an AI & Machine Learning engineering student with a strong focus on building intelligent web applications and AI-powered tools. I'm open to freelance projects, collaborations, and full-time opportunities where I can apply my skills in AI, full-stack development, and modern web technologies.",
  },
  {
    question: "What services do you offer?",
    answer: "I build modern web applications, AI-powered tools, automation systems, and interactive frontend experiences. My services include full-stack web development, AI/ML integration, API development, and building intelligent applications such as chatbots, voice assistants, and data-driven platforms.",
  },
  {
    question: "What technologies do you work with?",
    answer: "I work with technologies such as React, Next.js, Node.js, Java, Python, Tailwind CSS, and modern backend architectures. I also integrate AI technologies including LLMs, NLP systems, and machine learning models into real-world applications.",
  },
  {
    question: "Can you build AI-powered or custom solutions?",
    answer: "Yes. I specialize in building custom AI-powered solutions such as chatbots, voice assistants, intelligent automation systems, and data-driven platforms. I focus on creating practical AI applications that solve real-world problems.",
  },
];

  return (
    <section className="py-32 bg-secondary/10">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <SectionHeader
          subtitle="FAQ"
          title="Common Questions"
          center
        />

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-none">
              <AccordionTrigger className="glass-card px-8 py-6 rounded-3xl border border-border/50 hover:border-primary/50 transition-all hover:no-underline text-left text-lg font-bold data-[state=open]:rounded-b-none data-[state=open]:border-primary/50">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="glass-card px-8 pb-8 pt-2 rounded-b-3xl border-t-0 border-border/50 data-[state=open]:border-primary/50 text-muted-foreground text-lg leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export default function Index() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Process />
      <FAQ />
    </Layout>
  );
}
