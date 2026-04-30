import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Quote } from "lucide-react";
import { useRef } from "react";

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 0.65]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 32]);

  return (
    <section ref={containerRef} className="min-h-[150vh] flex flex-col items-center px-6 md:px-16 lg:px-24 relative overflow-hidden pt-32 lg:pt-48">
      <motion.div 
        style={{ scale: headingScale, opacity: contentOpacity, filter: `blur(${blurValue}px)` }}
        className="w-full max-w-[1400px] mx-auto text-center sticky top-32 lg:top-48 ease-lens accelerate"
      >
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mono-label text-primary mb-12 accelerate"
        >
          Digital Marketing · Design · Content Strategy
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-huge font-black uppercase tracking-[-0.04em] text-white accelerate"
        >
          Crafting digital
          <br />
          <span className="text-primary italic font-medium">footprints</span> to
          <br />
          scale brands.
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-left"
          >
            <p className="text-xl font-light leading-relaxed text-off-white/80 italic">
              "Having a great brand means nothing if you're whispering in a crowded room. 
              I build the megaphones. I blend scroll-stopping social media with 
              ruthless marketing strategy to turn casual attention into measurable revenue."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-64 h-64 transition-all duration-1000"
          >
            <div className="absolute inset-0 border border-primary/20 rounded-full animate-float" />
            <div className="absolute inset-4 overflow-hidden rounded-full border-2 border-white/10 bg-zinc-900">
              <img 
                src="/profile_new.png" 
                alt="Rudraksh Chatterjee" 
                className="w-full h-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-8 items-center justify-center mt-16"
        >
          <div className="flex items-center gap-4">
            <a
              href="https://drive.google.com/file/d/1aeMODThizb19hej8OZ6bLguG5aMZUnfd/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-12 py-4 font-bold text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500"
            >
              Download CV
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors p-3 bg-zinc-900 border border-white/5 rounded-full group">
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-primary transition-colors" />
            </a>
          </div>
          <a
            href="#work"
            className="mono-label text-muted-foreground hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-1"
          >
            View Selected Work →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
