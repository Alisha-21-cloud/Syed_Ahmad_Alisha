import React, { useState } from "react";
import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeader } from "@/components/SectionHeader";
import { GraduationCap, Briefcase, Code, Award, GraduationCap as SchoolIcon, Star, CheckCircle2, Trophy, Users, Target, Zap, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const tabs = [
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Code },
  // { id: "certification", label: "Certification", icon: Award },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState("education");

  const educationData = [
    { year: "2022 - 2026", title: "B.Tech in CSE-AIML", school: "Pragati Engineering College" },
    { year: "2019 - 2021", title: "Intermediate(class 11 & 12)", school: "Sri Medhavi Jr College" },
    { year: "2018 - 2019", title: "Class 10th", school: "Bhashyam Public School" },
  ];

  const experienceData = [
  {
    year: "Oct 2024 - Present",
    title: "Freelance Web Developer",
    company: "Freelance",
    type: "Remote",
    description:
      "Working as a freelance web developer delivering custom, production-ready web solutions for multiple clients across different domains. Handling end-to-end development from requirement gathering and UI design to deployment and post-launch support with a focus on performance, responsiveness, and modern web standards.",
    responsibilities: [
      "Collaborated with clients to understand business requirements and translate them into scalable web applications",
      "Designed and developed responsive user interfaces using modern frontend frameworks and UI/UX best practices",
      "Built and integrated REST APIs to enable dynamic data handling and third-party service integrations",
      "Implemented authentication, authorization, and secure data handling across client projects",
      "Deployed and maintained applications on cloud platforms ensuring reliability and performance",
      "Provided ongoing maintenance, feature enhancements, and technical support post-deployment"
    ],
    achievements: [
      "Successfully delivered multiple client projects within agreed timelines and budgets",
      "Improved website performance and responsiveness across devices for client-facing applications",
      "Built reusable components and modular codebases reducing development time for future projects",
      "Maintained long-term client relationships through consistent delivery and support"
    ],
    technologies: ["Next.js", "React", "PostgreSQL", "Supabase", "Python"]
  },
  {
    year: "Sep 2025 - Nov 2025",
    title: "AI Intern",
    company: "Infosys Springboard",
    type: "Remote",
    description:
      "Worked as an AI Intern on the FinanceInsight project focusing on applying transformer-based NLP models to financial document analysis. Built and optimized machine learning pipelines to extract structured financial intelligence from unstructured reports using state-of-the-art deep learning techniques.",
    responsibilities: [
      "Designed and developed transformer-based NER models using PyTorch and Hugging Face Transformers",
      "Fine-tuned FinBERT models on the Finer-139 dataset to identify domain-specific financial entities",
      "Built automated pipelines for financial report parsing, document segmentation, and table extraction",
      "Integrated external financial validation using Yahoo Finance APIs to verify extracted metrics",
      "Developed scalable backend inference services using FastAPI",
      "Collaborated with mentors and peers to evaluate model performance and optimize training strategies"
    ],
    achievements: [
      "Achieved a weighted F1-score of 98.12% on financial entity extraction tasks",
      "Reduced manual financial analysis time by 40% through automated document parsing pipelines",
      "Improved accuracy and consistency of extracted financial metrics across reports and filings",
      "Successfully validated extracted entities using real-time financial data sources"
    ],
    technologies: [
      "Python",
      "PyTorch",
      "FastAPI",
      "Hugging Face Transformers",
      "NLP Pipelines",
      "FinBERT"
    ]
  }
];

  const skillsData = [
  {
    category: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Headless UI"]
  },
  { category: "Backend", items: ["Node.js", "Express.js", "REST APIs", "Flask"] },
  {
    category: "Databases",
    items: [ "MongoDB", "PostgreSQL", "Supabase"]
  },
  {
    category: "Cloud & Backend",
    items: ["AWS", "Firebase", "Appwrite", "Convex", "Modal"]
  },
  {
    category: "AI & Machine Learning",
    items: ["PyTorch, TensorFlow", "Hugging Face Transformers", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Authentication & Security",
    items: ["Clerk", "BetterAuth", "JWT"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub", "Docker", "Sentry", "Turborepo"]
  },
  {
    category: "IDEs & Development Tools",
    items: ["VS Code", "IntelliJ IDEA", "WebStorm", "PyCharm", "Jupyter Notebook"]
  },
  {
    category: "Coursework",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Database Management Systems"
    ]
  }
];

  const certificationData = [
    { title: "Full Stack Web Development", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" },
    { title: "React.js Mastery", image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop" },
    { title: "Business Analytics Professional", image: "https://images.unsplash.com/photo-1543269865-cbdf26a9e9e2?w=400&h=300&fit=crop" },
  ];


const achievementsData = [
  {
    icon: Trophy,
    title: "Outlier AI Hackathon Finalist",
    description: "Top 10 finalist at the Outlier AI Hackathon and selected as a contributor for projects at Outlier AI."
  },
  {
    icon: Users,
    title: "Final Year Project Leadership",
    description: "Leading the final year project team as a team leader, coordinating development and project execution."
  },
  {
    icon: Award,
    title: "Community Service Leadership",
    description: "Led a 9-member team in a community service project educating rural farmers about sustainable agriculture practices."
  },
  {
    icon: Code,
    title: "Competitive Programming",
    description: "Solved 570+ problems on LeetCode with a contest rating of 1637, strengthening problem-solving and algorithmic skills."
  },
  {
    icon: Star,
    title: "HackerRank Achievements",
    description: "Earned 4-star ratings in Java, Python, and SQL on HackerRank."
  },
  {
    icon: Github,
    title: "Open Source & Development",
    description: "Authored 600+ commits and 100+ Prs on GitHub and successfully deployed 10+ full-stack development projects."
  },
  { icon: Users, title: "Community Building", description: "Founded AIML Club with 80+ active members" },
];

const extracurricularData = [
  {
    category: "Leadership",
    activities: [
      "Leading the final year project team as project leader",
      "Led a 9-member team during a community service initiative for rural farmers",
      "Coordinator of the technical event 'Strides' in college"
    ]
  },
  {
    category: "Technical",
    activities: [
      "Solved 570+ problems on LeetCode with a rating of 1637",
      "Achieved 4-star ratings in Java, Python, and SQL on HackerRank",
      "Authored 600+ commits and 100+ PRs on GitHub",
      "Built and deployed 10+ full-stack projects"
    ]
  },
  {
    category: "Community & Events",
    activities: [
      "Coordinator for the 'Strides' technical event",
      "Event coordinator during Engineers Day celebrations",
      "Participated in national-level hackathons including Outlier AI Hackathon"
    ]
  }
];

  return (
    <Layout>
      <div className="py-24 max-w-7xl mx-auto px-6 md:px-12 space-y-32">
        {/* My Story Section - Redesigned for Premium Portfolio Feel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative"
        >
          {/* Decorative background blur element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 -z-10" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            {/* Left Column: Text Content - Structured Hierarchy */}
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-10">
                <div className="space-y-4">
                  <p className="text-xs font-black uppercase tracking-[0.4em] text-primary">About Me</p>
                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.05] tracking-tighter">My <span className="gradient-text">Story</span></h1>
                </div>
                <p className="text-xl md:text-2xl text-foreground font-semibold leading-relaxed max-w-2xl">
                  I'm an AI & Machine Learning engineering student and software developer based in India, passionate about building intelligent applications, modern web platforms, and innovative digital experiences powered by AI.
                </p>
              </div>

              <div className="space-y-8 text-lg text-muted-foreground leading-[1.8] font-normal max-w-3xl">
                <p>
                  My journey into software development began with a curiosity about how technology and intelligent systems work. As an AI & Machine Learning engineering student, I’ve been exploring how data, algorithms, and modern web technologies can be combined to build practical and impactful applications.
                </p>

                <p>
                  I specialize in developing AI-powered tools and modern web applications using technologies like React, Next.js, Java, Python, and Node.js. I enjoy building scalable systems, integrating AI models, and designing applications that solve real-world problems while delivering clean, efficient, and maintainable code.
                </p>

                <p>
                  I’m also passionate about exploring emerging technologies such as AI agents, voice assistants, intelligent automation, and data-driven platforms. My goal is to create innovative software solutions that combine strong engineering principles with cutting-edge AI capabilities.
                </p>
              </div>

              <div className="pt-6">
                <Button size="lg" className="rounded-2xl px-12 h-16 text-lg font-bold shadow-2xl shadow-primary/25 hover:scale-105 transition-all group bg-primary text-primary-foreground">
                  Explore My Portfolio
                </Button>
              </div>
            </div>

            {/* Right Column: Profile Visual Element - Intentional & Structured */}
            <div className="lg:col-span-5 relative group">
              {/* Decorative floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl group-hover:bg-secondary/20 transition-colors duration-500" />

              <div className="glass-card rounded-[3.5rem] p-6 border border-border/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-secondary/10 backdrop-blur-xl relative z-10 hover:border-primary/30 transition-all duration-500 group-hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-[2.5rem] aspect-[4/5] bg-secondary/30">
                  <img
                    src="/pic2.jpeg?q=80&w=800&auto=format&fit=crop"
                    alt="Syed Ahmad Alisha - Software Developer"
                    className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Overlay badge info */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="glass-card py-3 px-5 rounded-2xl flex items-center gap-3 border border-white/10 backdrop-blur-md">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs font-bold text-white uppercase tracking-widest leading-none">Open for New Projects</span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="pt-6 px-2 flex justify-between items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-black uppercase tracking-widest text-foreground">Syed Ahmad Alisha</p>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Software Developer</p>
                  </div>
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-primary/10 flex items-center justify-center">
                          <Star size={10} className="text-primary" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Personal Overview Section (Matches image) */}
        <div className="space-y-16">
          <div className="text-center space-y-4">
             <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Personal Overview</h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Discover my journey, skills, and passion for creating innovative digital solutions</p>
          </div>

          {/* Tabs Container */}
          <div className="max-w-3xl mx-auto p-2 bg-secondary/50 backdrop-blur-md rounded-3xl border border-border/50 flex flex-wrap md:flex-nowrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 px-6 py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-2",
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-primary to-[#16a34a] text-white shadow-lg shadow-primary/20 scale-105"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                )}
              >
                <tab.icon size={18} />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-10"
              >
                {activeTab === "education" && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-4xl font-bold gradient-text">Education</h3>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <SchoolIcon size={24} />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        I am a Software Developer with a B.Tech in Computer Science & Engineering and currently pursuing an MBA in Business Analytics. I blend technical skills with a passion for learning and strategic insights. Below are my education details:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {educationData.map((item, i) => (
                        <div key={i} className="glass-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden">
                           <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                           <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-[#16a34a] text-white text-xs font-bold mb-6">
                             {item.year.includes("-") ? item.year.split("-")[0].trim() : item.year}
                           </div>
                           <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                           <div className="flex items-center gap-2 text-muted-foreground">
                             <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                             {item.school}
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "experience" && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-4xl font-bold gradient-text">Experience</h3>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Briefcase size={24} />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        My professional journey has been focused on building scalable products and analyzing business data to drive innovation.
                      </p>
                    </div>

                    <div className="space-y-8">
                      {experienceData.map((item, i) => (
                        <div key={i} className="glass-card p-6 md:p-10 rounded-[2.5rem] border border-border/50 hover:border-primary/50 transition-all space-y-6 group overflow-hidden relative">
                          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                          {/* Header Section */}
                          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                            <div className="space-y-2">
                              <h4 className="text-2xl md:text-3xl font-bold">{item.title}</h4>
                              <p className="text-primary font-semibold text-lg">{item.company}</p>
                            </div>
                            <div className="text-right space-y-1">
                              <p className="text-sm text-muted-foreground font-semibold">{item.year}</p>
                              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full">{item.type}</span>
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">{item.description}</p>

                          {/* Key Responsibilities */}
                          <div className="space-y-3">
                            <h5 className="font-bold text-lg flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Key Responsibilities
                            </h5>
                            <ul className="space-y-2 ml-2">
                              {item.responsibilities.map((resp, j) => (
                                <li key={j} className="flex gap-3 text-muted-foreground text-base">
                                  <span className="text-primary font-bold mt-1">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Achievements */}
                          <div className="space-y-3">
                            <h5 className="font-bold text-lg flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                              Achievements
                            </h5>
                            <ul className="space-y-2 ml-2">
                              {item.achievements.map((achievement, j) => (
                                <li key={j} className="flex gap-3 text-muted-foreground text-base">
                                  <span className="text-primary font-bold mt-1">•</span>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-3 pt-2">
                            <h5 className="font-bold text-sm uppercase tracking-wider text-muted-foreground">Technologies</h5>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((tech, j) => (
                                <span key={j} className="px-4 py-2 bg-secondary text-secondary-foreground text-xs font-semibold rounded-lg border border-border/30 hover:border-primary/50 transition-colors">
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "skills" && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-4xl font-bold gradient-text">Skills</h3>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Code size={24} />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        A comprehensive list of technical tools and frameworks I've mastered over the years.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {skillsData.map((group, i) => (
                        <div key={i} className="glass-card p-8 rounded-[2.5rem] border border-border/50 space-y-6">
                           <h4 className="text-xl font-bold flex items-center gap-2">
                             <CheckCircle2 size={20} className="text-primary" />
                             {group.category}
                           </h4>
                           <div className="flex flex-wrap gap-2">
                             {group.items.map((skill, j) => (
                               <span key={j} className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium border border-border/50 group-hover:border-primary/30 transition-colors">
                                 {skill}
                               </span>
                             ))}
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "certification" && (
                  <div className="space-y-12">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4">
                        <h3 className="text-3xl md:text-4xl font-bold gradient-text">Certifications</h3>
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                          <Award size={24} />
                        </div>
                      </div>
                      <p className="text-muted-foreground text-lg leading-relaxed max-w-4xl">
                        Professional certifications and credentials that validate my expertise in various technologies and domains.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {certificationData.map((cert, i) => (
                        <div key={i} className="group relative overflow-hidden rounded-[2rem] aspect-[4/3] cursor-pointer">
                          <img
                            src={cert.image}
                            alt={cert.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                            <h4 className="text-white font-bold text-lg">{cert.title}</h4>
                          </div>
                          <div className="absolute inset-0 rounded-[2rem] border-2 border-primary/20 group-hover:border-primary/50 transition-colors" />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Achievements & Extracurricular Activities Section */}
        <div className="space-y-20">
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold gradient-text">Achievements & Activities</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Key accomplishments and extracurricular involvements during my academic journey</p>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-center md:text-left">
              <Trophy size={32} className="text-primary" />
              Key Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievementsData.map((achievement, i) => {
                const IconComponent = achievement.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden space-y-4"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors relative z-10">
                      <IconComponent size={32} />
                    </div>
                    <h4 className="text-xl font-bold relative z-10">{achievement.title}</h4>
                    <p className="text-muted-foreground leading-relaxed relative z-10">{achievement.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div className="space-y-8">
            <h3 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-center md:text-left">
              <Users size={32} className="text-primary" />
              Extracurricular Activities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {extracurricularData.map((group, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-8 rounded-[2rem] border border-border/50 hover:border-primary/50 transition-all group relative overflow-hidden space-y-6"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                  <h4 className="text-2xl font-bold text-primary relative z-10">{group.category}</h4>
                  <ul className="space-y-3 relative z-10">
                    {group.activities.map((activity, j) => (
                      <li key={j} className="flex gap-3 text-muted-foreground">
                        <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span className="text-base leading-relaxed">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}