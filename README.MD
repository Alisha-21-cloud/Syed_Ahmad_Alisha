# 🚀 Syed Ahmad Alisha - Developer Portfolio

> A production-ready, full-stack developer portfolio website built with modern web technologies. Showcasing expertise in full-stack development, AI integration, and cloud deployment.

[![Vercel Deploy](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=flat-square&logo=vercel)](https://syed-ahmad-alisha-olzb.vercel.app)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7.1-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Installation & Setup](#installation--setup)
- [Development](#development)
- [Project Structure](#project-structure)
- [Available Routes](#available-routes)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Key Achievements](#key-achievements)
- [Services Offered](#services-offered)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview

This is a **production-grade portfolio website** designed to showcase a full-stack developer's expertise, projects, services, and professional journey. Built with a modern tech stack combining **React 18**, **TypeScript**, **Express.js**, and **TailwindCSS**, the site features a stunning user interface with smooth animations, dark mode support, and seamless responsiveness across all devices.

The portfolio demonstrates:
- ✨ **Professional web development practices**
- 🎯 **Full-stack capabilities** (frontend + backend)
- 📊 **Project showcase** with live deployments
- 🔗 **Integration of third-party services** (Cal.com for scheduling)
- 📱 **Mobile-first responsive design**
- ⚡ **High performance** optimizations
- 🎨 **Modern UI/UX** with component library

---

## ✨ Features

### 🏠 **Home (Hero Section)**
- Animated hero with gradient text effects
- Professional introduction and call-to-action buttons
- Developer stats: 2.5+ years experience, 10+ projects, 5/5 reviews
- Resume download and LinkedIn connection links
- Smooth scroll animations and floating elements

### 👤 **About Page**
- **Education Timeline**: Bachelors in CSE-AIML, intermediate, and secondary education
- **Experience Tab**: 
  - Full Stack Developer Intern at UdrCrafts (Oct 2025 - Mar 2026)
  - Freelance Web Developer (Oct 2024 - Present)
  - Detailed responsibilities and achievements
- **Skills Tab**: Technical proficiencies across frontend, backend, databases, and AI/ML
- **Tab-based Navigation**: Smooth transitions between sections

### 💼 **Services Page**
Comprehensive service offerings including:
1. **Web Application Architecture** - Scalable, maintainable solutions
2. **Frontend Development** - React, Vue.js, responsive design
3. **Backend Development** - Node.js, APIs, databases
4. **UI/UX Design** - Intuitive, user-centered interfaces
5. **Custom Component Development** - Reusable, scalable components
6. **Server & Deployment Management** - AWS, Azure, CI/CD pipelines
7. **Custom AI Model Training** - Fine-tuning LLMs for specific needs
8. **AI API Integrations** - OpenAI, Anthropic, custom models
9. **Machine Learning Model Deployment** - Production ML systems

### 🎨 **Projects Showcase**
Detailed project portfolio with 7+ completed projects:
- **Resonance** - AI-powered text-to-speech platform
- **Pixel** - Real-time analytics dashboard
- **SupportAI** - AI chatbot SaaS platform
- **TechBlog** - Personal blogging platform
- **MultiCart** - Multi-vendor e-commerce platform
- **Polaris** - Browser-based Cloud IDE
- **AI-Compass** - Career development AI companion

Each project includes:
- Live preview links
- Technology stack
- Detailed descriptions
- Individual project detail pages

### 📧 **Contact Page**
- Email contact information
- WhatsApp integration
- Contact form submission
- Professional contact card design

### 📅 **Meeting Booking**
- Cal.com integration for scheduling meetings
- 30-minute session bookings
- Month view calendar interface
- Seamless scheduling experience

### 🎨 **Advanced UI Features**
- **Dark Mode Support** - Next.js themes with persistent settings
- **Smooth Animations** - Framer Motion integration
- **Glass Morphism Effects** - Modern card designs
- **Responsive Design** - Mobile, tablet, desktop optimized
- **Component Library** - Radix UI + custom Tailwind components

---

## 🛠️ Tech Stack

### **Frontend**
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18.3 | UI library |
| TypeScript | 5.9 | Type safety |
| React Router | 6.30 | SPA routing |
| Vite | 7.1 | Build tool & dev server |
| TailwindCSS | 3.4 | Utility-first CSS |
| Framer Motion | 12.23 | Animations & transitions |
| Radix UI | Latest | Accessible components |

### **Backend**
| Technology | Version | Purpose |
|------------|---------|---------|
| Express | 5.1 | HTTP server |
| Node.js | 18+ | Runtime |
| Cors | 2.8 | Cross-origin handling |
| Dotenv | 17.2 | Environment variables |

### **Testing & Quality**
| Technology | Version | Purpose |
|------------|---------|---------|
| Vitest | Latest | Unit testing |
| TypeScript | 5.9 | Static type checking |

### **UI & Icons**
| Technology | Version | Purpose |
|------------|---------|---------|
| Lucide React | 0.539 | Icon library |
| Radix UI Components | Latest | Accessible UI primitives |
| Class Variance Authority | 0.7 | Component styling |
| Sonner | 1.7 | Toast notifications |

### **Integrations & Services**
| Service | Purpose |
|---------|---------|
| Cal.com | Meeting scheduling |
| React Query | Data fetching & caching |
| React Hook Form | Form handling |
| Zod | Schema validation |

### **Development Tools**
| Tool | Purpose |
|------|---------|
| PNPM | Package manager |
| Prettier | Code formatting |
| TypeScript ESLint | Linting |

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────┐
│    Client (React SPA) - Port 8080               │
├─────────────────────────────────────────────────┤
│  • React Router (SPA Routing)                   │
│  • TailwindCSS (Styling)                        │
│  • Framer Motion (Animations)                   │
│  • React Query (State Management)               │
│  • TypeScript (Type Safety)                     │
└────────────┬────────────────────────────────────┘
             │
             │ HTTP Requests
             │ (Unified Port)
             ▼
┌─────────────────────────────────────────────────┐
│    Server (Express) - Same Port                 │
├─────────────────────────────────────────────────┤
│  • API Routes (/api/*)                          │
│  • Environment Configuration                    │
│  • CORS Middleware                              │
│  • JSON Body Parser                             │
└─────────────────────────────────────────────────┘
             │
             │
    ┌────────┴────────┐
    │                 │
    ▼                 ▼
  Static      Third-Party APIs
  Assets      (Cal.com, etc.)
```

### **Development Workflow**
- **Single port (8080)** for both frontend and backend in development
- **Hot reload** enabled for rapid iteration
- **Shared types** via `/shared` folder for type-safe API communication
- **SPA routing** with React Router 6
- **Path aliases** (@/ for client, @shared/ for shared)

### **Production Build**
- Client: Vite SPA build → `dist/spa/`
- Server: Vite server build → `dist/server/`
- Both deployable separately or together

---

## 💻 Installation & Setup

### **Prerequisites**
- Node.js 18+ ([Download](https://nodejs.org/))
- PNPM 8+ ([Installation Guide](https://pnpm.io/installation))

### **Step 1: Clone the Repository**
```bash
git clone <repository-url>
cd Syed_Ahmad_Alisha
```

### **Step 2: Install Dependencies**
```bash
pnpm install
```

### **Step 3: Environment Setup (Optional)**
Create a `.env.local` file for environment variables:
```env
# Server Configuration
PING_MESSAGE="pong"

# Optional: Third-party API keys
VITE_API_URL=http://localhost:8080
```

### **Step 4: Verify Installation**
```bash
pnpm typecheck
```

---

## 🚀 Development

### **Start Development Server**
```bash
pnpm dev
```
- Opens at `http://localhost:8080`
- Hot reload enabled for client and server
- TypeScript checking on the fly

### **Type Checking**
```bash
pnpm typecheck
```
Validates all TypeScript files without building.

### **Run Tests**
```bash
pnpm test
```
Executes all test files using Vitest.

### **Format Code**
```bash
pnpm format.fix
```
Formats all files using Prettier.

### **Production Build**
```bash
pnpm build
```
Creates optimized production builds:
- Client: `dist/spa/` (SPA bundle)
- Server: `dist/server/` (Server bundle)

### **Start Production Server**
```bash
pnpm start
```
Runs the production-built server on port 8080.

---

## 📁 Project Structure

```
┌── client/                       # React SPA Frontend
│   ├── pages/                    # Route components
│   │   ├── Index.tsx             # Homepage (hero)
│   │   ├── About.tsx             # About page (education, experience, skills)
│   │   ├── Services.tsx          # Services offering
│   │   ├── Projects.tsx          # Portfolio showcase
│   │   ├── ProjectDetail.tsx     # Individual project page
│   │   ├── Contact.tsx           # Contact information & form
│   │   ├── BookMeeting.tsx       # Cal.com meeting scheduler
│   │   └── NotFound.tsx          # 404 page
│   ├── components/               # Reusable React components
│   │   ├── ui/                   # Radix UI + Tailwind components
│   │   │   ├── button.tsx        # Button component
│   │   │   ├── card.tsx          # Card component
│   │   │   ├── dialog.tsx        # Dialog component
│   │   │   ├── form.tsx          # Form builder
│   │   │   ├── input.tsx         # Input field
│   │   │   ├── textarea.tsx      # Textarea field
│   │   │   ├── accordion.tsx     # Accordion
│   │   │   ├── tabs.tsx          # Tabs component
│   │   │   ├── tooltip.tsx       # Tooltip
│   │   │   └── [30+ more]        # Additional UI primitives
│   │   ├── Layout.tsx            # Main layout wrapper
│   │   ├── Header.tsx            # Navigation header
│   │   ├── Footer.tsx            # Footer component
│   │   ├── ProjectCard.tsx       # Project card component
│   │   ├── ServiceCard.tsx       # Service card component
│   │   ├── SectionHeader.tsx     # Section header component
│   │   └── theme-provider.tsx    # Dark mode provider
│   ├── hooks/                    # Custom React hooks
│   │   ├── use-mobile.tsx        # Mobile detection
│   │   └── use-toast.ts          # Toast notifications
│   ├── lib/                      # Utility functions
│   │   ├── utils.ts              # Helper utilities (cn, etc.)
│   │   └── utils.spec.ts         # Utility tests
│   ├── App.tsx                   # Main app component & routing
│   ├── main.tsx                  # React entry point
│   ├── global.css                # Global styles & theme
│   └── vite-env.d.ts             # Vite type definitions
│
├── server/                       # Express Backend
│   ├── index.ts                  # Server setup & routes
│   ├── node-build.ts             # Build configuration
│   └── routes/                   # API route handlers
│       └── demo.ts               # Demo endpoint handler
│
├── shared/                       # Shared Types & Interfaces
│   └── api.ts                    # API response types
│
├── netlify/                      # Netlify Functions
│   └── functions/
│       └── api.ts                # Netlify serverless handler
│
├── public/                       # Static Assets
│   ├── robots.txt                # SEO robots file
│   ├── pic.jpg                   # Hero profile image
│   ├── resonance.png             # Project screenshots
│   ├── pixel.png
│   ├── supportai.png
│   ├── techblog.png
│   ├── multicart.png
│   ├── polaris.png
│   └── aicompass.png
│
├── Configuration Files
│   ├── vite.config.ts            # Vite configuration (SPA)
│   ├── vite.config.server.ts     # Vite configuration (Server)
│   ├── tailwind.config.ts        # TailwindCSS theme config
│   ├── tsconfig.json             # TypeScript configuration
│   ├── postcss.config.js         # PostCSS configuration
│   ├── components.json           # Shadcn UI config
│   ├── package.json              # Project metadata & dependencies
│   ├── pnpm-lock.yaml            # Dependency lock file
│   ├── prettier.json             # Code formatting rules
│   ├── vercel.json               # Vercel deployment config
│   ├── netlify.toml              # Netlify deployment config
│   └── AGENTS.md                 # Project template documentation
│
└── README.md                     # This file
```

---

## 🛣️ Available Routes

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | Index | Homepage with hero section |
| `/about` | About | Education, experience, and skills |
| `/services` | Services | Service offerings and expertise |
| `/projects` | Projects | Portfolio of completed projects |
| `/projects/:id` | ProjectDetail | Individual project details |
| `/contact` | Contact | Contact information and form |
| `/book` | BookMeeting | Cal.com meeting scheduler |
| `*` | NotFound | 404 Not Found page |

---

## 🔌 API Endpoints

### **Base URL**
```
http://localhost:8080
```

### **Endpoints**

#### **1. Ping Endpoint**
```http
GET /api/ping
```
**Response:**
```json
{
  "message": "ping"
}
```
**Purpose:** Health check for server availability.

#### **2. Demo Endpoint**
```http
GET /api/demo
```
**Response:**
```json
{
  "message": "Demo response",
  "data": {...}
}
```
**Purpose:** Demo API response for testing client-server communication.

### **Adding New Endpoints**

1. **Create a route handler** in `server/routes/my-route.ts`:
```typescript
import { RequestHandler } from "express";

export const handleMyRoute: RequestHandler = (req, res) => {
  res.json({ message: "Hello from my endpoint!" });
};
```

2. **Register in** `server/index.ts`:
```typescript
import { handleMyRoute } from "./routes/my-route";

app.get("/api/my-endpoint", handleMyRoute);
```

3. **Use in React components**:
```typescript
const response = await fetch('/api/my-endpoint');
const data = await response.json();
```

---

## 📦 Deployment

### **Vercel Deployment** (Recommended)

1. **Connect repository** to Vercel
2. **Build command:** `pnpm build:client`
3. **Output directory:** `dist/spa`
4. **Deploy:** Automatic on push to main

**File:** `vercel.json` (pre-configured)

### **Netlify Deployment**

1. **Connect repository** to Netlify
2. **Build command:** `npm run build:client`
3. **Publish directory:** `dist/spa`
4. **Deploy:** Automatic on push to main

**File:** `netlify.toml` (pre-configured)

### **Manual Deployment**

```bash
# Build for production
pnpm build

# Local testing (optional)
pnpm start

# Deploy dist/ folder to your hosting
```

### **Environment Variables** (Hosting)
Add to your hosting platform's environment settings:
```
PING_MESSAGE=Your custom message
```

---

## 🎯 Key Achievements

| Metric | Value |
|--------|-------|
| **Years of Experience** | 2.5+ |
| **Projects Completed** | 10+ |
| **Client Rating** | 5/5 ⭐ |
| **Services Offered** | 9 |
| **Technologies** | 20+ |
| **Code Quality** | 100% TypeScript |

---

## 💼 Services Offered

1. **Web Application Architecture** - Scalable, maintainable systems design
2. **Frontend Development** - React, TypeScript, responsive UI
3. **Backend Development** - Node.js, Express, databases
4. **UI/UX Design** - User-centered interface design
5. **Custom Components** - Reusable component libraries
6. **Deployment & DevOps** - AWS, Azure, CI/CD pipelines
7. **AI Model Training** - Custom LLM fine-tuning
8. **AI Integration** - OpenAI, Anthropic APIs
9. **ML Deployment** - Production machine learning systems

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. **Fork the repository**
```bash
git clone <your-fork-url>
cd Syed_Ahmad_Alisha
```

2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```

3. **Make your changes**
```bash
pnpm dev  # Test locally
pnpm typecheck  # Validate types
```

4. **Commit with clear messages**
```bash
git commit -m "feat: add amazing feature"
```

5. **Push to your branch**
```bash
git push origin feature/amazing-feature
```

6. **Open a Pull Request**

### **Code Style**
- TypeScript for type safety
- Prettier for formatting
- ESLint for linting
- Functional components with hooks
- Tailwind utility classes for styling

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🔗 Quick Links

- 🌐 **Portfolio:** [https://syed-ahmad-alisha-olzb.vercel.app/](https://syed-ahmad-alisha-olzb.vercel.app/)
- 💼 **LinkedIn:** [linkedin.com/in/syed-ahmad-alisha](https://www.linkedin.com/in/syed-ahmad-alisha/)
- 📧 **Email:** ahmadalisha1420@gmail.com
- 📱 **WhatsApp:** +91 7288827181
- 📅 **Book Meeting:** [Cal.com Link](https://cal.com/syed-ahmad-alisha/30min)

---

## 👤 Author

**Syed Ahmad Alisha**
- Full-Stack Developer
- 2.5+ years of professional experience
- Specialized in: React, Node.js, TypeScript, AI Integration, Cloud Deployment
- 10+ production projects delivered
- 5/5 client satisfaction rating

---

## 🙏 Acknowledgments

- **Shadcn UI** - Component library
- **Radix UI** - Accessible primitives
- **Framer Motion** - Animation library
- **TailwindCSS** - Utility-first CSS
- **Vite** - Next-generation build tool
- **React Router** - Client-side routing
- **Cal.com** - Meeting scheduling

---

<div align="center">

**Built with ❤️ using modern web technologies**

⭐ If you find this portfolio helpful, please consider giving it a star!

[⬆ Back to top](#-syed-ahmad-alisha---developer-portfolio)

</div>
