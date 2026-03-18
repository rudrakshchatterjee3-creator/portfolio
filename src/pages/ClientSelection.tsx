import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Briefcase, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

const clients = [
  {
    id: "fibo-media",
    name: "Fibo Media",
    role: "In-house Campaign",
    path: "/project/social-media-designs",
    description: "Visual strategy and comprehensive brand assets for social growth.",
  },
  {
    id: "matrix-media",
    name: "Matrix Media Solutions",
    role: "In-house Campaign",
    path: "/project/matrix-media-solutions",
    description: "A 22+ Year industry veteran serving elite global clients with high-fidelity digital systems.",
  }
];

const ClientSelection = () => {
  return (
    <div className="relative min-h-screen z-10">
      <InteractiveBackground />
      <Navbar />
      
      <main className="pt-32 pb-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors mb-12 group"
            >
              <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <h1 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 italic">Select Account Portfolio</h1>
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-2xl italic">
              "Precision meets persuasion. Choose the docket you wish to examine. 
              The evidence of creative excellence speaks for itself."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clients.map((client, i) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link 
                  to={client.path}
                  className="group block glass-card p-10 relative overflow-hidden h-full flex flex-col justify-between hover:border-primary/40 transition-all duration-500"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-12">
                      <div className="p-3 rounded-2xl bg-primary/10 border border-primary/20">
                        <Palette className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-medium tracking-tight mb-4 group-hover:text-primary transition-colors duration-500">
                      {client.name}
                    </h3>
                    <p className="text-muted-foreground font-light leading-relaxed mb-8 italic">
                      {client.description}
                    </p>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-muted-foreground">{client.role}</span>
                    <div className="flex items-center gap-3 text-xs font-bold tracking-widest uppercase group-hover:text-primary transition-colors">
                      Enter File
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Gradient Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ClientSelection;
