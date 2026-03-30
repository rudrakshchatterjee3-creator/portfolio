import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "social-media-designs",
    title: "Social Media Designs",
    category: "Design",
    description: "Cross-platform visual strategies that translate brand identities into high-performing design systems.",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    category: "Email Marketing",
    description: "Campaigns built for scale, conversion, and deliverability - driving cost-effective acquisition across diverse portfolios.",
  },
  {
    id: "social-media-management",
    title: "Social Media & Community Management",
    category: "Social Media & Community Management",
    description: "Organic engagement, brand reputation management, and sustainable growth across multiple online communities.",
  },
];

const WorkSection = () => {
  return (
    <section id="work" className="py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <div className="line-accent mb-6" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">Portfolio</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">Selected work</h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => {
            const isSocialMedia = project.id === "social-media-designs";
            const isEmailMarketing = project.id === "email-marketing";
            const isSmm = project.id === "social-media-management";

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <Link
                  to={`/category/${project.id}`}
                  className="glass-card block p-5 md:p-8 group relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4 sm:gap-6 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 sm:gap-4 mb-3">
                        <span className="text-[9px] sm:text-[10px] text-primary/60 tracking-[0.3em] uppercase font-bold">{project.category}</span>
                        {(isSocialMedia || isEmailMarketing || isSmm) && (
                          <span className="text-[9px] sm:text-[10px] text-primary tracking-[0.2em] font-medium ml-2">MULTIPLE CLIENTS</span>
                        )}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight mb-2 sm:mb-3 transition-all duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-xs sm:text-sm max-w-lg font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 self-end sm:self-start">
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground group-hover:text-primary-foreground transition-all" />
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
