import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useRef } from "react";

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
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.27]);

  return (
    <section ref={containerRef} id="work" className="py-48 px-6 md:px-16 lg:px-24 bg-transparent overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <p className="mono-label text-primary mb-8 font-bold italic">Portfolio</p>
          <h2 className="text-[10vw] font-black uppercase leading-none tracking-tighter text-white">
            Selected <br />
            <span className="text-primary italic font-medium">work</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-px bg-white/5 accelerate">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden group accelerate"
            >
              <Link
                to={`/category/${project.id}`}
                className="block p-12 md:p-20 bg-transparent hover:bg-white/[0.02] transition-colors duration-700 relative z-10 accelerate"
              >
                <div className="flex flex-col md:flex-row items-start justify-between gap-12 relative z-10 accelerate">
                  <div className="flex-1 accelerate">
                    <div className="flex items-center gap-6 mb-8 accelerate">
                      <span className="mono-label text-primary font-bold">0{i + 1}</span>
                      <span className="mono-label text-white/40">{project.category}</span>
                    </div>
                    <h3 className="text-huge font-black uppercase tracking-tighter mb-8 text-white group-hover:text-primary transition-colors duration-500 leading-none accelerate">
                      {project.title}
                    </h3>
                    <p className="text-2xl text-muted-foreground font-light max-w-2xl leading-relaxed italic accelerate">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 accelerate">
                    <ArrowUpRight className="w-8 h-8 text-white transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 accelerate" />
                  </div>
                </div>

                {/* Lens Focal Shift Background Scale Effect */}
                <motion.div 
                  style={{ scale: bgScale }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-[radial-gradient(circle_at_center,rgba(239,68,68,0.2)_0%,transparent_70%)] transition-opacity duration-1000 pointer-events-none accelerate"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
