import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Maison Noir — Brand Identity",
    category: "Design",
    year: "2025",
    description: "Complete visual identity for a luxury lifestyle brand. Logo, typography system, and comprehensive brand guidelines.",
  },
  {
    title: "Vertex SaaS — Content Engine",
    category: "Content Strategy",
    year: "2024",
    description: "Built a content machine: 40+ long-form articles, editorial calendar, and SEO strategy driving 3x organic growth.",
  },
  {
    title: "#LiveBold — Social Campaign",
    category: "Digital Marketing",
    year: "2024",
    description: "Multi-platform campaign generating 2M+ impressions through user-generated content and influencer partnerships.",
  },
  {
    title: "Lumière — E-commerce Pages",
    category: "Design · Copywriting",
    year: "2023",
    description: "High-converting product pages with A/B tested copy and visual design, boosting conversion by 40%.",
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

        <div className="divide-y divide-border">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href="#"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group block py-8 md:py-10 first:pt-0"
            >
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-xs text-muted-foreground tracking-wider">{project.year}</span>
                    <span className="text-xs text-primary/60 tracking-wider uppercase">{project.category}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 max-w-lg font-light leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0 mt-2" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
