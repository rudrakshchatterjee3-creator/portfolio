import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, PenLine, TrendingUp, Megaphone, ArrowRight } from "lucide-react";

const skills = [
  { icon: Palette, title: "Visual Design", desc: "Brand systems, UI/UX, and visual identities that leave lasting impressions." },
  { icon: PenLine, title: "Content Writing", desc: "SEO-optimized copy, editorial content, and strategies that convert." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven marketing plans across organic and paid channels." },
  { icon: Megaphone, title: "Social & Campaigns", desc: "End-to-end campaigns with community building and engagement." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <div className="line-accent mb-6" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-medium mb-6 tracking-tight">
            Where precision meets <span className="italic text-gradient">creative vision</span>
          </h2>
          <p className="text-secondary-foreground max-w-lg leading-relaxed font-light">
            Years of refining the intersection between design, content, and strategy,
            delivering work that's both beautiful and effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden">
          {skills.map((skill, i) => {
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-card p-8 md:p-10 group hover:bg-muted/30 transition-colors relative"
              >
                <div className="flex items-start justify-between mb-6">
                  <skill.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors" />
                </div>
                
                <h3 className="text-lg font-medium mb-2 tracking-tight">{skill.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light mb-6">{skill.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
