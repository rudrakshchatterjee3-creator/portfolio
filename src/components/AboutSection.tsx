import { motion } from "framer-motion";
import { Palette, PenLine, TrendingUp, Megaphone } from "lucide-react";

const skills = [
  { icon: Palette, title: "Visual Design", desc: "Brand systems, UI/UX, and visual identities that leave lasting impressions." },
  { icon: PenLine, title: "Content Writing", desc: "SEO-optimized copy, editorial content, and strategies that convert." },
  { icon: TrendingUp, title: "Growth Strategy", desc: "Data-driven marketing plans across organic and paid channels." },
  { icon: Megaphone, title: "Social & Campaigns", desc: "End-to-end campaigns with community building and engagement." },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-48 px-6 md:px-16 lg:px-24 bg-transparent border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32"
        >
          <p className="mono-label text-primary mb-8 font-bold italic">Expertise</p>
          <h2 className="text-[6vw] md:text-[5vw] font-black uppercase leading-none tracking-tighter text-white mb-12">
            Where precision <br />
            meets <span className="text-primary italic font-medium">creative vision</span>
          </h2>
          <p className="text-2xl font-light text-muted-foreground max-w-2xl leading-relaxed italic">
            Years of refining the intersection between design, content, and strategy,
            delivering work that's both beautiful and effective.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 overflow-hidden">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black p-12 md:p-20 group hover:bg-zinc-950 transition-colors duration-700"
            >
              <div className="flex items-start justify-between mb-12">
                <skill.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                <span className="mono-label text-white/10 group-hover:text-primary/20 transition-colors">0{i + 1}</span>
              </div>
              
              <h3 className="text-3xl font-bold mb-6 tracking-tight text-white uppercase font-black">{skill.title}</h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-light italic">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
