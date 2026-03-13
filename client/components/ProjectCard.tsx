import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  techStack: string[];
  type?: string;
  liveUrl?: string;
  className?: string;
}

export function ProjectCard({
  id,
  title,
  description,
  image,
  category,
  techStack,
  type = "Software Application",
  liveUrl,
  className
}: ProjectCardProps) {
  const displayStack = techStack.slice(0, 3);
  const remainingCount = techStack.length - displayStack.length;

  const visitLink = liveUrl ? liveUrl : `/projects/${id}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={cn(
        "group flex flex-col h-full bg-card rounded-3xl overflow-hidden border border-border/40 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10",
        className
      )}
    >
      {/* Project Preview Area (Top Section) */}
      <div className="relative h-[280px] overflow-hidden group/image">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Visit Button */}
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-gradient-to-r from-primary to-[#16a34a] text-white px-8 py-3 rounded-full font-bold text-base flex items-center gap-2 shadow-2xl hover:scale-110 active:scale-95 opacity-0 group-hover/image:opacity-100 transition duration-300">
              Visit <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </a>
        ) : (
          <Link to={visitLink} className="absolute inset-0 flex items-center justify-center">
            <div className="bg-gradient-to-r from-primary to-[#16a34a] text-white px-8 py-3 rounded-full font-bold text-base flex items-center gap-2 shadow-2xl hover:scale-110 active:scale-95 transition-all">
              Visit <ArrowUpRight size={18} strokeWidth={2.5} />
            </div>
          </Link>
        )}
      </div>

      {/* Project Information Section (Middle) */}
      <div className="p-8 flex-1 flex flex-col">
        <div className="space-y-4 mb-6">
          <h4 className="text-2xl font-bold text-card-foreground group-hover:text-primary transition-colors leading-tight">
            {title}
          </h4>
          <p className="text-muted-foreground text-base line-clamp-3 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Stack Tags */}
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2">
            {displayStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20 border-primary/20 rounded-md px-3 py-1 text-xs font-bold transition-colors"
              >
                {tech}
              </Badge>
            ))}
            {remainingCount > 0 && (
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary border-primary/20 rounded-md px-3 py-1 text-xs font-bold"
              >
                +{remainingCount}
              </Badge>
            )}
          </div>
        </div>
      </div>

      {/* Project Footer Section */}
      <div className="px-8 py-6 border-t border-border/40">
        <span className="text-sm font-medium text-muted-foreground/80 uppercase tracking-wider">
          {type}
        </span>
      </div>
    </motion.div>
  );
}