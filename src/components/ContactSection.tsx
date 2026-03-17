import { motion } from "framer-motion";
import { Mail, Linkedin, Instagram, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-lg"
        >
          <div className="line-accent mb-6" />
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">Connect</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Let's build something <span className="italic text-gradient">exceptional</span>
          </h2>
          <p className="text-muted-foreground font-light leading-relaxed mb-10">
            Available for freelance projects, consulting, and full-time opportunities. 
            I'd love to hear about your vision.
          </p>

          <a
            href="mailto:rudraksh.chatterjee3@gmail.com"
            className="gradient-accent inline-flex items-center gap-2.5 px-8 py-3 rounded text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity glow-shadow"
          >
            <Mail className="w-4 h-4" />
            Get in Touch
          </a>

          <div className="flex gap-8 mt-14">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rudraksh-chatterjee-2a7651177?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              { icon: Mail, label: "Email", href: "mailto:rudraksh.chatterjee3@gmail.com" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span className="text-xs tracking-wider font-medium">{item.label}</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
