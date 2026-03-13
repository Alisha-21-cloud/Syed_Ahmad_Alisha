import React from "react";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Globe, 
  Code, 
  Server, 
  Palette, 
  Layers, 
  Shield, 
  Brain, 
  Bot, 
  Cpu 
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "Web Application Architecture",
    description: "Building scalable and maintainable web application architectures with focus on performance, security, and modularity using best practices.",
    icon: Globe,
    iconBgColor: "bg-blue-600",
  },
  {
    number: "02",
    title: "Frontend Development",
    description: "Creating responsive, high-performance web applications using modern frameworks like React and Vue.js for seamless user experiences.",
    icon: Code,
    iconBgColor: "bg-pink-600",
  },
  {
    number: "03",
    title: "Backend Development",
    description: "Building robust backends with Node.js, API design, database management, and secure server operations for scalable applications.",
    icon: Server,
    iconBgColor: "bg-emerald-600",
  },
  {
    number: "04",
    title: "UI/UX Design",
    description: "Designing intuitive, user-centered interfaces that focus on aesthetics, functionality, and creating exceptional user experiences.",
    icon: Palette,
    iconBgColor: "bg-orange-600",
  },
  {
    number: "05",
    title: "Custom Component Development",
    description: "Developing reusable, scalable UI components aligned with your brand's design system for consistent user experiences.",
    icon: Layers,
    iconBgColor: "bg-purple-600",
  },
  {
    number: "06",
    title: "Server & Deployment Management",
    description: "I manage infrastructure, deployments, domain configuration, and SSL setup. I have hands-on experience with AWS (S3, EC2), Azure cloud services, and automated CI/CD pipelines.",
    icon: Shield,
    iconBgColor: "bg-cyan-600",
  },
  {
    number: "07",
    title: "Custom AI Model Training",
    description: "Fine-tuning large language models and developing custom AI solutions tailored to specific business needs and domain requirements.",
    icon: Brain,
    iconBgColor: "bg-indigo-600",
  },
  {
    number: "08",
    title: "AI API Integrations",
    description: "Seamlessly integrating advanced AI capabilities from OpenAI, Anthropic, and other leading providers into existing platforms and workflows.",
    icon: Bot,
    iconBgColor: "bg-yellow-600",
  },
  {
    number: "09",
    title: "Machine Learning Model Deployment",
    description: "Scalable and efficient deployment of machine learning models to production environments with real-time performance monitoring and versioning.",
    icon: Cpu,
    iconBgColor: "bg-red-600",
  },
];

export default function Services() {
  return (
    <Layout>
      <section className="py-24 bg-background relative overflow-hidden min-h-screen">
        {/* Decorative background blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full -translate-x-1/2 translate-y-1/2" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHeader
            subtitle="My Expertise"
            title="Comprehensive Tech Solutions"
            description="I offer a wide range of software development and AI services to help businesses build, scale, and innovate in the digital age."
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16"
          >
            {services.map((service, index) => (
              <ServiceCard 
                key={service.number}
                number={service.number}
                title={service.title}
                description={service.description}
                icon={service.icon}
                iconBgColor={service.iconBgColor}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
