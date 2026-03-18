import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Detailed data for projects on their own pages
const projectDetails: Record<string, any> = {
  "social-media-designs": {
    title: "Social Media Designs",
    category: "Design",
    client: "Fibo Media (In-house Designer)",
    challenge: "As an in-house designer, I was tasked with maturing Fibo Media's social media presence, ensuring every piece of content perfectly reflected their premium brand identity and core values.",
    solution: "I designed a series of high-fidelity carousels and visual assets that rigorously followed brand colors and styles. These designs were highly appreciated for their aesthetic precision and strategic layout.",
    results: [
      "Significant boost in organic post impressions.",
      "100% brand style consistency achieved.",
      "High internal praise for visual storytelling.",
    ],
    galleries: [
      {
        title: "",
        description: "",
        images: Array.from({ length: 12 }).map((_, i) => `/projects/fibo/1721219374982_page-${String(i + 1).padStart(4, '0')}.png`),
        placeholderCount: 12,
        folderPath: "fibo",
      },
      {
        title: "",
        description: "",
        images: Array.from({ length: 5 }).map((_, i) => `/projects/fibo/1723809423361_page-${String(i + 1).padStart(4, '0')}.png`),
        placeholderCount: 5,
        folderPath: "fibo",
      }
    ]
  },
  "vertex-saas": {
    title: "Vertex SaaS — Content Engine",
    category: "Content Strategy",
    client: "Vertex SaaS",
    challenge: "Client struggled with establishing organic traffic and generating inbound leads.",
    solution: "Built a robust content engine from the ground up, focusing on high-value, long-form content.",
    results: ["3x organic growth", "Increased newsletter subscribers", "Lowered CPA"],
    galleries: [
      {
        title: "",
        description: "",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        placeholderCount: 5,
        folderPath: "vertex",
      }
    ]
  },
  "live-bold-campaign": {
    title: "#LiveBold — Social Campaign",
    category: "Digital Marketing",
    client: "Bold Brands Inc.",
    challenge: "Needed a viral campaign to launch their new product line to Gen Z.",
    solution: "A multi-platform hashtag campaign heavily leaning into creator partnerships.",
    results: ["2M+ impressions", "Trending on TikTok", "Sold out initial run"],
    galleries: [
      {
        title: "Campaign Creatives",
        description: "Key visuals from the multi-platform launch.",
        images: ["/placeholder.svg", "/placeholder.svg"],
        placeholderCount: 2,
        folderPath: "livebold",
      }
    ]
  },
  "lumiere-ecommerce": {
    title: "Lumière — E-commerce Pages",
    category: "Design · Copywriting",
    client: "Lumière",
    challenge: "High cart abandonment and low time-on-page for high-ticket items.",
    solution: "Redesigned product pages to focus on lifestyle imagery and compelling, benefit-driven copy.",
    results: ["40% boost in conversions", "Reduced bounce rate"],
    galleries: [
      {
        title: "Product Layouts",
        description: "High-converting e-commerce wireframes and high-fidelity mockups.",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
        placeholderCount: 4,
        folderPath: "lumiere",
      }
    ]
  },
  "matrix-media-solutions": {
    title: "Matrix Media Solutions",
    category: "Design",
    client: "Matrix Media (22+ Years of Excellence)",
    challenge: "Maintain industry-leading visual authority for a 22-year-old digital powerhouse serving an elite roster of global, top-notch clients.",
    solution: "Engineering a high-fidelity design ecosystem capable of rapid, massive-scale asset deployment while preserving the premium aesthetic established over two decades.",
    results: [
      "22+ years of sustained market leadership",
      "Seamless management of elite, top-tier client accounts",
      "200% acceleration in digital asset production pipelines"
    ],
    galleries: [
      {
        title: "Strategic Asset Row 01",
        description: "High-frequency social collateral.",
        images: Array.from({ length: 5 }).map((_, i) => `/projects/matrix/3563285950367649825_3204368044_${i + 1}.png`),
        placeholderCount: 5,
        folderPath: "matrix",
      },
      {
        title: "Strategic Asset Row 02",
        description: "Omnichannel visual systems.",
        images: Array.from({ length: 8 }).map((_, i) => `/projects/matrix/3598302473175198266_3204368044_${i + 1}.png`),
        placeholderCount: 8,
        folderPath: "matrix",
      },
      {
        title: "Strategic Asset Row 03",
        description: "Global campaign visuals.",
        images: Array.from({ length: 7 }).map((_, i) => `/projects/matrix/3603852117473139168_3204368044_${i + 1}.png`),
        placeholderCount: 7,
        folderPath: "matrix",
      },
      {
        title: "Website Blog Assets",
        description: "16:9 Editorial graphics and article covers.",
        images: [
          "/projects/matrix/167-1.png",
          "/projects/matrix/170-1.png",
          "/projects/matrix/172.png",
          "/projects/matrix/194.png",
          "/projects/matrix/196.png",
          "/projects/matrix/199.png",
          "/projects/matrix/Matrix-Blog-banner.png",
          "/projects/matrix/Matrix-Blog-banner.webp",
          "/projects/matrix/new-1.png",
          "/projects/matrix/new-banner-blogg.png"
        ],
        placeholderCount: 10,
        folderPath: "matrix",
      },
      {
        title: "Strategic Asset Row 04",
        description: "Targeted digital engagement.",
        images: Array.from({ length: 4 }).map((_, i) => `/projects/matrix/3596849188379686483_3204368044_${i + 1}.png`),
        placeholderCount: 4,
        folderPath: "matrix",
      }
    ],
    singleImages: [
      "/projects/matrix/3555547309824859257_3204368044.png",
      "/projects/matrix/3556943610312941642_3204368044.png",
      "/projects/matrix/3557676469206154521_3204368044.png",
      "/projects/matrix/3620677293309202847_3204368044.png",
      "/projects/matrix/3622621905983525708_3204368044.png",
      "/projects/matrix/3628482528903923062_3204368044.png",
      "/projects/matrix/3629985189423581244_3204368044.png",
      "/projects/matrix/FRIDAY FUN.png",
      "/projects/matrix/yoga day.png",
      "/projects/matrix/3571461088765952539_3204368044.png",
      "/projects/matrix/3578380397027407642_3204368044.png",
      "/projects/matrix/3583021659701179497_3204368044.png",
      "/projects/matrix/3587919222170800329_3204368044.png",
      "/projects/matrix/3601878159798403013_3204368044.png",
      "/projects/matrix/3608451366982232067_3204368044.png",
      "/projects/matrix/3611053791938053548_3204368044.png",
      "/projects/matrix/3613320978056366876_3204368044.png",
      "/projects/matrix/3615571327454633801_3204368044.png",
      "/projects/matrix/brand-great.png"
    ]
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  const project = id ? projectDetails[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-semibold mb-4 text-primary">Project Not Found</h1>
        <p className="text-muted-foreground mb-8">The project you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="gradient-accent px-8 py-3 rounded text-primary-foreground font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 pt-44 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-8 group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all work
            </Link>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div>
                <p className="text-primary text-xs tracking-[0.4em] uppercase mb-4 font-medium">{project.category}</p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground font-light">Client: {project.client}</p>
              </div>
              
              <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-primary/30 pb-1 hover:border-primary transition-colors self-start md:self-auto">
                Visit Live Site <ExternalLink className="w-4 h-4" />
              </a>
            </div>
            
            {/* Consolidated Content Details */}
            <div className="grid md:grid-cols-3 gap-12 md:gap-8 pt-8 border-t border-border/40">
              <div className="md:col-span-2 space-y-12">
                <div>
                  <h3 className="text-xl font-medium mb-4 text-foreground/90 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/40" />
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-4 text-foreground/90 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/40" />
                    The Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-lg">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="glass-card p-8 self-start">
                <h3 className="text-sm font-bold mb-6 uppercase tracking-[0.2em] text-primary">Impact & Results</h3>
                <ul className="space-y-4">
                  {project.results.map((result: string, i: number) => (
                    <li key={i} className="flex items-start gap-4 group">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0 glow-shadow group-hover:scale-150 transition-transform" />
                      <span className="text-muted-foreground font-light text-sm leading-relaxed">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* McGill Marketing Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24 max-w-3xl mx-auto"
          >
            <div className="w-24 h-px bg-primary/20 mx-auto mb-12" />
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6 italic">High-Impact Carousels That Demand a Verdict</h2>
            <p className="text-xl text-muted-foreground font-light leading-relaxed italic">
              "You don't just need a design. You need a statement. A billboard for your brilliance. 
              I deliver work that works as hard as you do, maybe even harder. Precision meets persuasion in every slide."
            </p>
          </motion.div>

          {/* Multiple Project Galleries - Centered Marquee Stack */}
          <div className="space-y-32">
            {project.galleries.map((gallery: any, galleryIdx: number) => {
              const isEven = galleryIdx % 2 === 0;

              return (
                <motion.div
                  key={galleryIdx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <div className="relative group">
                    {/* Centered Marquee Container */}
                    <div className="relative mesh-glow p-8 md:p-12 rounded-[3rem] overflow-hidden">
                      <div className="marquee-container group cursor-crosshair">
                        {[1, 2, 3, 4].map((set) => {
                          // Calculate duration based on image count to keep speed (pixels/sec) constant
                          // Base case: 12 images moves in 40s
                          const duration = Math.max((gallery.images.length / 12) * 40, 10);
                          
                          return (
                            <div 
                              key={set} 
                              className="marquee-content py-4 gap-12"
                              style={{ animationDuration: `${duration}s` }}
                            >
                              {gallery.images.map((src: string, index: number) => (
                                <div 
                                  key={`${set}-${index}`} 
                                  className="h-[240px] sm:h-[320px] md:h-[400px] shrink-0 fast-card p-2 group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                                  style={{ willChange: 'transform' }}
                                >
                                  <img 
                                    src={src} 
                                    alt={`Gallery image ${index + 1}`}
                                    className="h-full w-auto object-contain rounded shadow-lg"
                                    loading={set === 1 ? "eager" : "lazy"}
                                    decoding="async"
                                    onError={(e) => {
                                      e.currentTarget.style.display = 'none';
                                      e.currentTarget.parentElement!.classList.add('bg-secondary/20', 'w-[300px]', 'flex', 'items-center', 'justify-center');
                                      e.currentTarget.parentElement!.innerHTML += `<div class="text-muted-foreground p-8 text-center"><p class="text-[9px] font-bold tracking-widest uppercase mb-1">Asset Error</p></div>`;
                                    }}
                                  />
                                </div>
                              ))}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Single Images Grid - "Flowing" Organization */}
          {project.singleImages && (
            <div className="mt-40">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
              >
                <div className="w-24 h-px bg-primary/20 mx-auto mb-12" />
                <h2 className="text-4xl font-medium tracking-tight mb-6 italic">The Individual Exhibits</h2>
                <p className="text-xl text-muted-foreground font-light italic">
                  "Stand-alone brilliance. Each frame curated to command the full attention of the jury."
                </p>
              </motion.div>

              <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                {project.singleImages.map((src: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "0px" }}
                    transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
                    className="break-inside-avoid"
                  >
                    <div className="fast-card p-2 group overflow-hidden relative transition-all duration-700 hover:border-primary/50">
                      <div className="relative z-10 w-full overflow-hidden rounded-[10px] bg-secondary/5 flex items-center justify-center">
                        <img 
                          src={src} 
                          alt={`Individual exhibit ${i + 1}`}
                          className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-1000 ease-out shadow-md"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center', 'p-12');
                            e.currentTarget.parentElement!.innerHTML = `<div class="text-center"><p class="text-[10px] font-bold tracking-[0.3em] uppercase text-primary/40 mb-2">Exhibit ${i + 1}</p><p class="text-[8px] italic text-muted-foreground">Digital Asset Restricted</p></div>`;
                          }}
                        />
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none">
                        <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Full Case</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Archival Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="mt-48 pb-20 text-center"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-light italic text-muted-foreground">
              Confidentiality Notice: Select project assets remain restricted by active NDAs. 
              Authorized designs will be released as confidentiality terms conclude.
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
