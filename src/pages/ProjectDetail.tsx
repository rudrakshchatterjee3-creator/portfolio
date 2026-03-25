import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InteractiveBackground from "@/components/InteractiveBackground";

// Detailed data for projects on their own pages
const projectDetails: Record<string, any> = {
  "social-media-designs": {
    title: "Social Media Designs",
    category: "Design",
    client: "Contributing Designer for Fibo Media",
    challenge: "Working as a contributing designer, I helped mature Fibo Media's social media presence by collaborating on content that perfectly reflected their premium brand identity and core values.",
    solution: "As part of the team, I designed a series of high-fidelity carousels and visual assets that rigorously followed team guidelines to maintain aesthetic precision.",
    results: [
      "Contributed to a significant boost in organic post impressions.",
      "Maintained 100% brand style consistency.",
      "Delivered reliable visual storytelling for the team."
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
  "psm-cabinets": {
    title: "PSM Cabinets",
    category: "Email Marketing",
    client: "PSM Cabinets",
    challenge: "An Australian client making custom kitchen cabinetry wanted to promote their products to both warm and cold prospects. They faced critical roadblocks with domain authentication and poor email deliverability that crippled their performance.",
    solution: "I single-handedly directed the entire email marketing operation from the ground up, navigating a highly constrained budget. While I brought on skilled email designers to execute the visual creatives, I personally led the overarching strategy, conducted rigorous A/B testing on all email copy, resolved complex SMTP server roadblocks, and configured robust domain authentication (SPF, DKIM, DMARC) to guarantee maximum deliverability.",
    results: [
      "I secured 5+ new high-ticket clients for the business in just one month",
      "I delivered a massive ROI despite a highly restricted initial budget",
      "I resolved their critical SMTP and domain deliverability bottlenecks"
    ],
    explanation: {
      title: "Leading The Strategic Advantage",
      content: "I achieved these results by prioritizing precision over sheer volume - ensuring that every single email I sent landed perfectly in the primary inbox. Under my direction, the email designers produced aesthetic templates that heavily resonated with cold prospects and warm leads alike. Establishing a rock-solid technical foundation, fixing deliverability, and configuring the SMTP servers were the critical steps I took to turn creative concepts into rapid, measurable ROI."
    },
    galleryMode: "popup-grid",
    images: [
      "/projects/email-marketing/PSM_Emailer.png",
      "/projects/email-marketing/PSM_Emailer_2.png",
      "/projects/email-marketing/Emailer-PSM.png",
      "/projects/email-marketing/CTS Emailer-04.png",
      "/projects/email-marketing/CTS Emailer-03.png",
      "/projects/email-marketing/CTS Emailer-02.png",
      "/projects/email-marketing/Emailer-CTS.png",
      "/projects/email-marketing/Trollybud Emailer.png"
    ]
  },
  "matrix-media-solutions": {
    title: "Matrix Media Solutions",
    category: "Design",
    client: "Contributing Designer for Matrix Media Solutions",
    challenge: "As a contributing designer, my role was to help modernize their visual identity across digital channels while maintaining a consistent and professional IT aesthetic alongside the team.",
    solution: "Working collaboratively, I developed a comprehensive set of social media assets, blog graphics, and digital collateral tailored for the tech sector.",
    results: [
      "Supported the establishment of consistent visual branding.",
      "Contributed to improved engagement on digital platforms.",
      "Helped streamline the team's asset creation process."
    ],
    galleries: [
      {
        title: "",
        description: "",
        images: Array.from({ length: 5 }).map((_, i) => `/projects/matrix/3563285950367649825_3204368044_${i + 1}.png`),
        placeholderCount: 5,
        folderPath: "matrix",
      },
      {
        title: "",
        description: "",
        images: Array.from({ length: 8 }).map((_, i) => `/projects/matrix/3598302473175198266_3204368044_${i + 1}.png`),
        placeholderCount: 8,
        folderPath: "matrix",
      },
      {
        title: "",
        description: "",
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
        title: "",
        description: "",
        images: Array.from({ length: 4 }).map((_, i) => `/projects/matrix/3596849188379686483_3204368044_${i + 1}.png`),
        placeholderCount: 4,
        folderPath: "matrix",
      }
    ],
    quoteHeader: "Clean, Professional IT Branding",
    quoteText: "\"Tech companies need design that reflects their technical competence. I focused on creating clean, effective visuals that communicate value clearly and consistently without unnecessary noise.\"",
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
  },
  "xa-network": {
    title: "Tech leadership network",
    category: "Email Marketing",
    client: "Tech leadership network",
    challenge: "An exclusive global community for technology leaders and investors needed premium email banners for their blog content, appealing to a high-calibre audience of executives and founders.",
    solution: "I recognized the need to appeal to this high-calibre audience and focused on creating visually striking designs that aligned perfectly with their future-focused brand identity.",
    results: [
      "Elevated the aesthetic appeal of their email communications",
      "Resulted in highly positive engagement",
      "Received direct praise from the community's members"
    ],
    explanation: {
      title: "Elevating Executive Communications",
      content: "I collaborated with a tech leadership network, an exclusive global community for technology leaders and investors, to design premium email banners for their blog content. Recognizing the need to appeal to a high-calibre audience of executives and founders, I focused on creating visually striking designs that aligned with their future-focused brand identity. The new banners successfully elevated the aesthetic appeal of their email communications, resulting in highly positive engagement and direct praise from the community's members."
    },
    quoteHeader: "Future-Focused Brand Identity",
    quoteText: "\"The design needed to speak the language of leaders and investors—premium, clear, and impactful without being overly loud. The aesthetic successfully matched their high-calibre audience.\"",
    customShowcase: "xa-network",
    customArchivalNote: "Due to the exclusive nature of this partnership and active confidentiality agreements, the strategic design assets remain strictly confidential and cannot be displayed publicly."
  },
  "bobcat-se": {
    title: "Construction Machineries Manufacturer",
    category: "Social Media & Community Management",
    client: "Construction Machineries Manufacturer",
    challenge: "Developing a comprehensive social media strategy to boost community engagement and digital presence.",
    solution: "Implemented an end-to-end community management plan, focusing on consistent, high-quality content delivery and optimized audience interaction.",
    results: [
      "Increased overall community engagement",
      "Established a consistent digital presence",
      "Drove measurable strategic growth"
    ],
    explanation: {
      title: "Elevating Visual Storytelling",
      content: "During my time at Matrix Media Solutions, I served as a creative catalyst, partnering closely with cross-functional team members to elevate our visual storytelling. By guiding the collaborative development of dynamic designs and engaging video content, I helped translate collective ideas into polished, high-impact assets. Beyond shaping the creative direction, I took full ownership of our digital footprint, strategically managing our Instagram and Facebook profiles to ensure our shared vision consistently resonated with our target audience."
    },
    quoteHeader: "Building Digital Communities",
    quoteText: "\"True audience engagement isn't just about posting regularly; it's about intentional community management and building a brand presence that truly resonates.\"",
    galleryMode: "centered-image",
    images: [
      "/projects/mockup-2.png"
    ]
  },
  "baytech-recovery": {
    title: "End-to-End Email Strategy & Lead Gen",
    category: "Email Marketing",
    client: "Secure ITAD services provider",
    challenge: "Drive brand awareness and top-of-funnel engagement for secure IT asset disposition services, targeting decision-makers in high-compliance sectors.",
    solution: "Executed a full-cycle cold outreach program. Built custom audiences based on technographics and hardware refresh cycles using Apollo.io, and leveraged GMass for high-deliverability 'human-to-human' sequences with inbox rotation.",
    results: [
      "Achieved a consistent 30%+ open rate across cold campaigns.",
      "Successfully introduced value proposition to 500+ targeted enterprise accounts.",
      "Generated a steady stream of 'warm' replies for seamless sales hand-offs."
    ],
    explanation: {
      title: "Content Optimization & Precision",
      content: "The core of the strategy centered on transforming raw data into high-intent brand interactions. By developing A/B tested subject lines and value-driven copy rooted in sustainability and ESG goals, the outreach bypassed typical spam filters and resonated genuinely with enterprise targets."
    },
    quoteHeader: "Strategic Cold Outreach",
    quoteText: "\"Hitting a 30% open rate in B2B logistics isn't about blind volume—it's about precision targeting, mastering inbox rotation, and deeply understanding the client's core compliance and sustainability services.\"",
    customShowcase: "baytech-recovery"
  },
  "boutique-travel": {
    title: "Boutique Travel & Lifestyle Brand",
    category: "Social Media & Community Management",
    client: "Boutique Travel & Lifestyle Brand",
    challenge: "To increase brand awareness and drive lead generation for a boutique travel and lifestyle brand by establishing a consistent, high-end visual identity and a strategic content cadence.",
    solution: "Developed a comprehensive content calendar aligned with seasonal trends. Authored benefit-driven POV storytelling, and implemented posting automation to reach followers across multiple time zones.",
    results: [
      "Achieved a 100% on-time posting rate through proactive calendar management.",
      "Maintained a 2.6%+ engagement rate utilizing strategic hashtag research.",
      "Successfully converted passive scrollers into active leads for high-ticket itineraries."
    ],
    explanation: {
      title: "Content Pillars & Technical Toolkit",
      content: "Four core pillars guided the strategy: 'Bespoke Services' (highlighting private tours), 'Expert Positioning' (sharing hidden gems), 'Community Engagement' (using interactive CTAs), and 'Visual Aesthetics' (curating a premium grid feel). The technical toolkit included Notion, Google Sheets, and Asana for planning; Meta Business Suite, Later, Buffer, and Hootsuite for automation; and meticulous copywriting, caption strategy, and hashtag optimization for creative execution."
    },
    quoteHeader: "Aspirational Brand Voice",
    quoteText: "\"Transitioning the brand from static descriptions to benefit-driven storytelling built trust with an international audience. The highly curated aesthetic perfectly captured their bespoke, premium experience.\"",
    galleryMode: "centered-image",
    images: [
      "/projects/mockup-1.jpg"
    ]
  },
  "vertical-systems": {
    title: "Community Scaling & Automation",
    category: "Social Media & Community Management",
    client: "Vertical Systems | Role: Content Operations Associate",
    challenge: "Vertical Systems needed a hybrid operator capable of managing their growing ecosystem of free and paid Skool communities, while also leveraging cutting-edge AI tools and marketing automations to drive engagement and capture leads.",
    solution: "I took ownership of community moderation and content strategy, integrating modern AI workflows to scale our output without sacrificing personalization.",
    results: [
      "Achieved and maintained a massive 75% engagement rate across the Skool communities through targeted, AI-enhanced content.",
      "Successfully streamlined the top-of-funnel pipeline from automated DM outreach down to subscriber capture and community onboarding."
    ],
    explanation: {
      title: "Strategic Execution & Core Responsibilities",
      content: "AI-Driven Content Creation: Learned and implemented HeyGen and ElevenLabs for voice cloning, producing high-converting short-form video content tailored for Skool. Community Management: Moderated both paid and free groups, fostering a highly active environment. Marketing Automation: Built landing pages and managed email lists via ConvertKit, and implemented Leadshark to automate outbound DM campaigns. Technical Cross-Collaboration: Partnered directly with the development team to conceptualize and design highly personalized lead magnets."
    },
    quoteHeader: "The Technical Edge",
    quoteText: "\"Because I have a strong underlying knowledge of AI and automation technology, I wasn't just managing marketing tasks, I was bridging the gap between marketing and development. My technical fluency allowed me to design advanced, viable lead magnets involving complex n8n workflows. This meant the dev team received concepts that were structurally sound and ready to execute, saving time and significantly improving the quality of our lead generation assets.\""
  }
};

const ProjectDetail = () => {
  const { id } = useParams();
  
  // Ensure the page scrolls to the top when navigating to a new project category
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);
  
  const categoryMap: Record<string, string[]> = {
    "social-media-designs": ["social-media-designs", "matrix-media-solutions"],
    "email-marketing": ["psm-cabinets", "xa-network", "baytech-recovery"],
    "social-media-management": ["vertical-systems", "bobcat-se", "boutique-travel"],
    "live-bold-campaign": ["live-bold-campaign"]
  };
  
  const projectIds = id ? categoryMap[id] : null;
  const projects = projectIds ? projectIds.map(pid => projectDetails[pid]).filter(Boolean) : null;
  
  const [selectedImage, setSelectedImage] = React.useState<string | null>(null);

  if (!projects || projects.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-4xl font-semibold mb-4 text-primary">Category Not Found</h1>
        <p className="text-muted-foreground mb-8">The category you are looking for doesn't exist or has been moved.</p>
        <Link to="/" className="gradient-accent px-8 py-3 rounded text-primary-foreground font-medium flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Portfolio
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col relative z-0">
      <InteractiveBackground />
      <Navbar />

      <main className="flex-1 pt-44 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-20">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all work
            </Link>
          </motion.div>

          {projects.map((project, projectIndex) => (
            <div key={projectIndex} className={projectIndex > 0 ? "mt-48 pt-32 relative" : "relative"}>
              
              {/* Divider for consecutive projects */}
              {projectIndex > 0 && (
                <div className="absolute top-0 left-0 right-0 flex justify-center items-center">
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  <div className="absolute w-24 h-1 bg-primary/20 blur-md rounded-full" />
                </div>
              )}

              {/* Massive Number Watermark */}
              <div className="absolute top-0 right-0 -z-10 pointer-events-none select-none opacity-[0.02] text-[10rem] sm:text-[15rem] md:text-[25rem] font-bold leading-none tracking-tighter">
                {(projectIndex + 1).toString().padStart(2, '0')}
              </div>

              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-16 relative z-10"
              >
                <div className="flex flex-col mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-muted-foreground/50 text-sm font-bold tracking-widest">
                      {(projectIndex + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="w-12 h-px bg-border" />
                    <p className="text-primary text-xs tracking-[0.4em] uppercase font-medium">
                      {project.category}
                    </p>
                  </div>
                  
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight mb-8">
                    {project.title}
                  </h1>
                  
                  <div className="inline-flex flex-wrap items-center gap-2 md:gap-4 px-4 py-2 sm:px-5 sm:py-3 rounded-full border border-primary/20 bg-secondary/10 self-start backdrop-blur-sm">
                    <span className="text-[10px] sm:text-xs tracking-widest uppercase font-bold text-primary/70">Client Profile</span>
                    <div className="w-1 h-1 rounded-full bg-primary/40 hidden md:block" />
                    <p className="text-xs sm:text-sm md:text-base text-card-foreground font-medium">
                      {project.client}
                    </p>
                  </div>
                </div>
            {/* Consolidated Content Details */}
            <div className="grid md:grid-cols-3 gap-10 md:gap-8 pt-8 border-t border-border/40">
              <div className="md:col-span-2 space-y-10 md:space-y-12">
                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-4 text-foreground/90 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/40" />
                    The Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-base sm:text-lg">
                    {project.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-medium mb-4 text-foreground/90 flex items-center gap-3">
                    <div className="w-8 h-px bg-primary/40" />
                    The Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-light text-base sm:text-lg">
                    {project.solution}
                  </p>
                </div>
              </div>

              <div className="glass-card p-6 sm:p-8 self-start">
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
            className="text-center mb-24 max-w-3xl mx-auto px-4"
          >
            <div className="w-24 h-px bg-primary/20 mx-auto mb-10 sm:mb-12" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium tracking-tight mb-6 italic">{project.quoteHeader || "High-Impact Carousels That Demand a Verdict"}</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light leading-relaxed italic">
              {project.quoteText || "\"You don't just need a design. You need a statement. A billboard for your brilliance. I deliver work that works as hard as you do, maybe even harder. Precision meets persuasion in every slide.\""}
            </p>
          </motion.div>

          {/* Explanation Box */}
          {project.explanation && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 mb-32 max-w-5xl mx-auto relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 rounded-[2rem] blur-xl -z-10 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="glass-card p-10 md:p-14 rounded-[2rem] border-primary/20 hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-foreground flex items-center gap-4 relative z-10">
                  <div className="w-8 h-[2px] bg-primary/60" />
                  {project.explanation.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mt-4 relative z-10 w-full md:w-[90%] lg:w-[80%]">
                  {project.explanation.content}
                </p>
              </div>
            </motion.div>
          )}

          {/* Custom Popup Gallery */}
          {project.galleryMode === "popup-grid" && project.images && (
            <div className="mb-32 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-16 px-4"
              >
                <h3 className="text-2xl sm:text-3xl font-medium tracking-tight mb-4 text-foreground/90">Campaign Creatives</h3>
                <p className="text-muted-foreground font-light text-base sm:text-lg">
                  Designed in collaboration with expert email designers. Click to enlarge.
                </p>
                <div className="w-24 h-px bg-primary/20 mx-auto mt-6 sm:mt-8" />
              </motion.div>
              
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
                {project.images.map((src: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                    className="break-inside-avoid relative group cursor-pointer fast-card p-2 hover:border-primary/50 transition-colors duration-500"
                    onClick={() => setSelectedImage(src)}
                  >
                    <div className="relative z-10 w-full overflow-hidden rounded-[10px] bg-secondary/10 flex items-center justify-center min-h-[200px]">
                      {/* Loading Indicator */}
                      <div className="absolute inset-0 flex items-center justify-center bg-secondary/20 animate-pulse data-[loaded=true]:hidden" id={`loader-${i}`}>
                        <div className="w-8 h-8 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />
                      </div>
                      
                      <img
                        src={src}
                        alt={`Campaign creative ${i + 1}`}
                        className="w-full h-auto object-contain opacity-0 data-[loaded=true]:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.03] shadow-md"
                        loading="lazy"
                        onLoad={(e) => {
                          e.currentTarget.setAttribute('data-loaded', 'true');
                          const loader = document.getElementById(`loader-${i}`);
                          if (loader) loader.setAttribute('data-loaded', 'true');
                        }}
                        ref={(img) => {
                          if (img && img.complete) {
                            img.setAttribute('data-loaded', 'true');
                            const loader = document.getElementById(`loader-${i}`);
                            if (loader) loader.setAttribute('data-loaded', 'true');
                          }
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          const loader = document.getElementById(`loader-${i}`);
                          if (loader) {
                            loader.innerHTML = '<p class="text-[10px] uppercase tracking-widest text-muted-foreground">Asset Error</p>';
                            loader.classList.remove('animate-pulse');
                          }
                        }}
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none rounded-[10px] z-20">
                      <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Full Design</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Centered Image (Mini Case Study) */}
          {project.galleryMode === "centered-image" && project.images && (
            <div className="mb-32 w-full flex justify-center">
              <div className="w-full max-w-3xl px-4">
                {project.images.map((src: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative group cursor-pointer fast-card p-2 hover:border-primary/50 transition-colors duration-500 w-full"
                    onClick={() => setSelectedImage(src)}
                  >
                    <div className="relative z-10 w-full aspect-[16/11] overflow-hidden rounded-[10px] bg-secondary/5 flex items-center justify-center">
                      <img
                        src={src}
                        alt={`Case study creative ${i + 1}`}
                        className="w-full h-full object-cover object-[center_75%] opacity-0 data-[loaded=true]:opacity-100 transition-all duration-700 ease-out group-hover:scale-[1.03] shadow-md"
                        loading="lazy"
                        onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                        ref={(img) => {
                          if (img && img.complete) img.setAttribute('data-loaded', 'true');
                        }}
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 pointer-events-none rounded-[10px] z-20">
                      <p className="text-[10px] font-bold tracking-[0.4em] uppercase text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">View Full Design</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Multiple Project Galleries - Centered Marquee Stack */}
          {project.galleries && (
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
                  {gallery.title && (
                    <div className="mb-6 sm:mb-8 px-4 md:px-12 text-center md:text-left">
                      <h3 className="text-xl sm:text-2xl font-medium tracking-tight text-foreground/90">{gallery.title}</h3>
                      {gallery.description && <p className="text-sm sm:text-base text-muted-foreground mt-2 font-light">{gallery.description}</p>}
                    </div>
                  )}
                  <div className="relative group">
                    {/* Centered Marquee Container */}
                    <div className="relative mesh-glow p-4 sm:p-8 md:p-12 rounded-[1.5rem] sm:rounded-[3rem] overflow-hidden">
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
                                    className="h-full w-auto object-contain rounded shadow-lg opacity-0 data-[loaded=true]:opacity-100 transition-opacity duration-700"
                                    loading={set === 1 ? "eager" : "lazy"}
                                    decoding="async"
                                    onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                                    ref={(img) => {
                                      if (img && img.complete) img.setAttribute('data-loaded', 'true');
                                    }}
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
          )}

          {/* Single Images Grid - "Flowing" Organization */}
          {project.singleImages && (
            <div className="mt-40">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
              >
                <div className="w-24 h-px bg-primary/20 mx-auto mb-10 sm:mb-12" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight mb-6 italic">The Individual Exhibits</h2>
                <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-light italic px-4">
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
                          className="w-full h-auto object-cover opacity-0 data-[loaded=true]:opacity-100 transition-all duration-1000 ease-out group-hover:scale-[1.03] shadow-md"
                          loading="lazy"
                          decoding="async"
                          onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                          ref={(img) => {
                            if (img && img.complete) img.setAttribute('data-loaded', 'true');
                          }}
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

          {/* Custom Showcase Section removed per user request */}

            </div>
          ))}

          {/* Archival Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.5 }}
            viewport={{ once: true }}
            className="mt-48 pb-20 text-center px-6"
          >
            <p className="text-xs tracking-[0.2em] uppercase font-light italic text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              {projects[0]?.customArchivalNote || "Confidentiality Notice: Many project assets are strictly protected by active Non-Disclosure Agreements (NDAs) and cannot be shared publicly."}
            </p>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Enlarged creative"
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-primary/20"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
