import React from "react";
import { ArrowUpRight, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
  iconBgColor: string;
  className?: string;
}

export function ServiceCard({
  number,
  title,
  description,
  icon: Icon,
  iconBgColor,
  className,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className={cn(
        "group relative flex flex-col h-full bg-[#1c1c21] border border-white/[0.05] rounded-2xl p-8 transition-all duration-300",
        className
      )}
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl md:text-5xl font-extrabold text-white/10 group-hover:text-white/20 transition-colors duration-300">
          {number}
        </span>
        <div 
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg",
            iconBgColor
          )}
        >
          <Icon size={24} />
        </div>
      </div>

      <div className="flex-grow space-y-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-12 pt-6 border-t border-white/[0.05]">
        <button className="flex items-center justify-between w-full text-white/80 hover:text-white transition-colors duration-300 font-semibold group/btn">
          <span>Get in Touch</span>
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover/btn:bg-primary/20 group-hover/btn:text-primary flex items-center justify-center transition-all duration-300">
            <ArrowUpRight size={18} />
          </div>
        </button>
      </div>

      {/* Subtle hover glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.div>
  );
}
