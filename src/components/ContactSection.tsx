import { motion } from "framer-motion";
import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-48 px-6 md:px-16 lg:px-24 bg-transparent border-t border-white/5">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mono-label text-primary mb-8 font-bold italic">Connect</p>
          <h2 className="text-[8vw] font-black uppercase leading-none tracking-tighter text-white mb-12">
            Let's build <br />
            something <span className="text-primary italic font-medium">exceptional</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-end mt-24">
            <div className="max-w-xl">
              <p className="text-2xl font-light text-muted-foreground leading-relaxed italic mb-16">
                Available for freelance projects, consulting, and full-time opportunities. 
                I'd love to hear about your vision.
              </p>

              <a
                href="mailto:rudraksh.chatterjee3@gmail.com"
                className="bg-primary text-white inline-flex items-center gap-4 px-12 py-5 font-black text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
              >
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </div>

            <div className="flex flex-col gap-8">
              {[
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/rudraksh-chatterjee-2a7651177?utm_source=share_via&utm_content=profile&utm_medium=member_android" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-8 border-b border-white/10 hover:border-primary transition-colors duration-500"
                >
                  <div className="flex items-center gap-6">
                    <item.icon className="w-6 h-6 text-white group-hover:text-primary transition-colors" />
                    <span className="text-2xl font-bold uppercase tracking-tighter text-white">{item.label}</span>
                  </div>
                  <ArrowUpRight className="w-8 h-8 text-white/20 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
