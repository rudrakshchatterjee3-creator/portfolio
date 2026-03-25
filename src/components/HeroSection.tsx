import { motion } from "framer-motion";
import { ArrowDown, Quote } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-24 relative overflow-hidden pt-24 lg:pt-0">
      <div className="w-full max-w-[1150px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 relative z-10">
        <div className="w-full lg:max-w-[55%] xl:max-w-[60%] flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="line-accent mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-xs tracking-[0.4em] uppercase mb-8 font-medium"
          >
            Digital Marketing · Design · Content Strategy
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.2] md:leading-[1.1] mb-8 tracking-tight"
          >
            Crafting digital
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60 italic px-1">narratives</span> that
            <br className="hidden sm:block" />
            elevate brands.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="relative glass-card p-5 md:p-8 mt-4 mb-12 max-w-lg border-l-2 border-l-primary/50 shadow-lg"
          >
            <Quote className="absolute top-4 right-4 w-6 h-6 text-primary/10 -z-10" />
            <p className="text-secondary-foreground text-[13px] sm:text-sm md:text-base leading-relaxed italic font-light">
              "Having a great brand means nothing if you're whispering in a crowded room. 
              I build the megaphones. I blend scroll-stopping social media with 
              ruthless marketing strategy to turn casual attention into measurable revenue."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex gap-5 items-center flex-wrap"
          >
            <a
              href="https://drive.google.com/file/d/1aeMODThizb19hej8OZ6bLguG5aMZUnfd/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-accent px-8 py-3 rounded text-primary-foreground text-sm font-medium tracking-wide hover:opacity-90 transition-opacity glow-shadow"
            >
              Download CV
            </a>
            <a
              href="#work"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase text-xs font-medium border-b border-border pb-1 hover:border-primary/40"
            >
              View Selected Work →
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="w-full lg:w-auto flex justify-center lg:justify-end mt-10 lg:mt-0"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px]">
            {/* Subtle minimalist rings that rotate */}
            <div className="absolute inset-0 rounded-full border-[1px] border-primary/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border-[1px] border-primary/10 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Image container */}
            <div className="absolute inset-6 rounded-full overflow-hidden border-2 border-primary/30 glow-shadow bg-secondary/20 transition-transform duration-700 hover:scale-[1.02]">
              <img 
                src="/profile.jpg" 
                alt="Rudraksh Chatterjee" 
                className="w-full h-full object-cover object-center relative z-10"
                onError={(e) => {
                  // Hides the broken image icon if the file hasn't been added yet
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
