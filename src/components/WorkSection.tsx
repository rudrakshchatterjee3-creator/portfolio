import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  {
    id: "social-media-designs",
    title: "Social Media Designs",
    category: "Design",
    description: "Visual Strategy for Fibo Media and other comprehensive social media designs.",
  },
  {
    id: "email-marketing",
    title: "Email Marketing",
    category: "Email Marketing",
    description: "I directed the entire email marketing operation, overcoming critical deliverability issues to drive rapid client acquisition on a tight budget.",
  },
  {
    id: "social-media-management",
    title: "Social Media & Community Management",
    category: "Social Media & Community Management",
    description: "End-to-end strategic growth, community engagement, and digital presence optimization.",
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
                  className="glass-card block p-8 group relative overflow-hidden"
                >
                  <div className="flex items-start justify-between gap-6 relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-[10px] text-primary/60 tracking-[0.3em] uppercase font-bold">{project.category}</span>
                        {(isSocialMedia || isEmailMarketing || isSmm) && (
                          <span className="text-[10px] text-primary tracking-[0.2em] font-medium ml-2">MULTIPLE CLIENTS</span>
                        )}
                      </div>
                      <h3 className="text-2xl font-medium tracking-tight mb-3 transition-all duration-300 group-hover:translate-x-1">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm max-w-lg font-light leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary-foreground transition-all" />
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
