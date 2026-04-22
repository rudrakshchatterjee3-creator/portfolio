import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    ],
    quoteHeader: "Visuals That Stop the Scroll",
    quoteText: "\"Good design isn't a luxury; it's the first handshake you have with a client. I made sure every slide I designed for Fibo felt like a premium experience - crisp, intentional, and impossible to ignore.\""
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
    quoteHeader: "Emails That Actually Get Read",
    quoteText: "\"You can have the best offer in the world, but it's worthless if it's sitting in the spam folder. I focused on the technical 'boring' stuff - deliverability and SMTP - because that's where the real money is made.\"",
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
    quoteHeader: "The Strategy of Subtlety",
    quoteText: "\"High-net-worth investors aren't impressed by shouting. They want clarity and quiet confidence. I designed these assets to feel like a private club - exclusive, refined, and undeniably professional.\"",
    customShowcase: "xa-network",
    customArchivalNote: "Due to the exclusive nature of this partnership and active confidentiality agreements, the strategic design assets remain strictly confidential and cannot be displayed publicly."
  },
  "bobcat-se": {
    title: "Bobcat.se | Machinery",
    category: "Social Media & Community Management",
    client: "Bobcat.se (Sweden)",
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
    quoteHeader: "Communities, Not Just Followers",
    quoteText: "\"Real engagement isn't a vanity metric; it's about making people feel like they belong to something. I didn't just 'post' for Bobcat; I managed a digital space where customers felt heard and connected to the brand.\"",
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
      content: "The core of the strategy centered on transforming raw data into high-intent brand interactions. By developing A/B tested subject lines and value-driven copy rooted in sustainability and ESG goals, the outreach bypassed typical spam filters and resonated genuinely with enterprise targets.\n\nI did lead generation for email marketing and LinkedIn outreach for them using Seamless.ai tools and Apollo.io which helped them with great prospects for cold outreach and drove their ROI 3x than before."
    },
    quoteHeader: "Outreach That Cuts Through The Noise",
    quoteText: "\"Nobody likes getting cold emails, unless they actually solve a burning problem. I didn't just 'blast' emails; I engineered a system that landed in the primary inbox and spoke directly to the pain points of compliance officers.\"",
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
    quoteHeader: "Selling the Dream, Not the Hotel",
    quoteText: "\"Travelers don't buy itineraries; they buy memories. I shifted the focus from 'here's where you'll stay' to 'here's how you'll feel,' using visuals that made people stop scrolling and start planning.\"",
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
    quoteHeader: "The Bridge Between Marketing & Dev",
    quoteText: "\"I'm not just a marketer who uses tools; I'm an operator who understands the plumbing. By knowing how n8n and automation actually work, I could hand the dev team blueprints, not just wishlists. It's about being technically fluent enough to translate strategy into working systems.\"",
  },
  "matrix-govt-campaign": {
    title: "Government of West Bengal - AIDS Awareness",
    category: "Social Media & Community Management",
    client: "Matrix Media Solutions | Role: Influencer Outreach & Negotiations Lead",
    challenge: "The Government of West Bengal needed to amplify a public health campaign on AIDS awareness and safety by partnering with influencers and public figures across multiple tiers.",
    solution: "On behalf of Matrix Media Solutions, I led all influencer outreach and negotiations, identifying and coordinating with micro-influencers, macro-influencers, and film actors to secure their participation in promoting the campaign.",
    results: [
      "Liaised with the Government of West Bengal as an official client for the initiative.",
      "Negotiated influencer partnerships across micro, macro, and celebrity tiers.",
      "Managed all client communications and influencer coordination on behalf of Matrix Media Solutions."
    ],
    explanation: {
      title: "Influencer Strategy for a Government Campaign",
      content: "I represented Matrix Media Solutions in all communications with influencers and public figures for this government-backed initiative. I managed the outreach pipeline end-to-end, from vetting influencer profiles and drafting proposals to negotiating deliverables. The strategy combined the broad reach of macro-influencers and film actors with the authentic, community-level trust of micro-influencers to maximize awareness across West Bengal."
    },
    quoteHeader: "Where Strategy Meets Public Impact",
    quoteText: "\"Working with a state government client is a different caliber of responsibility. Every negotiation has to be precise, and the goal is not just engagement metrics - it is genuine public awareness that can save lives.\"",
    customShowcase: "matrix-govt-campaign",
    customArchivalNote: "Due to the official nature of this government engagement, detailed campaign assets and influencer contracts cannot be displayed publicly."
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
    "social-media-management": ["vertical-systems", "bobcat-se", "boutique-travel", "matrix-govt-campaign"],
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
    <div className="min-h-screen flex flex-col relative z-0 noise-overlay">
      <div className="radial-bg" />
      <Navbar />

      <main className="flex-1 pt-44 pb-24 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Back Button */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="mb-20">
            <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to all work
            </Link>
          </motion.div>

          {projects.map((project, projectIndex) => (
            <div key={projectIndex} className={projectIndex > 0 ? "mt-12 pt-8 relative" : "relative"}>
              
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
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-12 relative z-10"
              >
                <div className="flex flex-col mb-12">
                  <div className="flex items-center gap-6 mb-12 accelerate">
                    <span className="mono-label text-primary font-bold italic">
                      {(projectIndex + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="w-16 h-px bg-white/10" />
                    <p className="mono-label text-white/40">
                      {project.category}
                    </p>
                  </div>
                  
                  <h1 className="text-huge font-black uppercase tracking-tighter text-white mb-16 accelerate flex flex-wrap items-center gap-x-6">
                    {project.title.match(/[|\-]/) ? (
                      <>
                        <span>{project.title.split(/[|\-]/)[0].trim()}</span>
                        <span className="h-[0.9em] w-2 md:w-3 bg-primary inline-block mx-2" />
                        <span className="text-white/50 font-medium">{project.title.split(/[|\-]/)[1].trim()}</span>
                      </>
                    ) : project.title}
                  </h1>
                  
                  <div className="inline-flex items-center gap-6 px-8 py-4 bg-zinc-900 border border-white/5 self-start accelerate">
                    <span className="mono-label text-primary font-bold italic">Client</span>
                    <p className="text-xl text-white font-light italic">
                      {project.client}
                    </p>
                  </div>
                </div>

                {/* Consolidated Content Details */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 pt-24 border-t border-white/5">
                  <div className="lg:col-span-8 space-y-24">
                    <div>
                      <h3 className="mono-label text-primary mb-8 font-bold italic">The Challenge</h3>
                      <p className="text-3xl font-light text-muted-foreground leading-relaxed italic">
                        {project.challenge}
                      </p>
                    </div>

                    <div>
                      <h3 className="mono-label text-primary mb-8 font-bold italic">The Solution</h3>
                      <p className="text-2xl font-light text-white/80 leading-relaxed italic">
                        {project.solution}
                      </p>
                    </div>
                  </div>

                  <div className="lg:col-span-4">
                    <div className="bg-zinc-950 p-12 border border-white/5 accelerate">
                      <h3 className="mono-label text-primary mb-12 font-bold italic text-center">Impact & Results</h3>
                      <ul className="space-y-8">
                        {project.results.map((result: string, i: number) => (
                          <li key={i} className="flex items-start gap-6 group">
                            <span className="mono-label text-primary/40 font-bold">0{i + 1}</span>
                            <span className="text-lg text-muted-foreground font-light leading-relaxed group-hover:text-white transition-colors">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

          {/* McGill Marketing Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 max-w-3xl mx-auto px-4"
          >
            <div className="w-24 h-px bg-primary/20 mx-auto mb-10 sm:mb-12" />
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">{project.quoteHeader || "High-Impact Carousels That Demand a Verdict"}</h2>
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
              className="mt-4 mb-8 max-w-5xl mx-auto relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 rounded-[2rem] blur-xl -z-10 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="glass-card p-10 md:p-14 rounded-[2rem] border-primary/20 hover:border-primary/40 transition-colors duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-700 pointer-events-none" />
                <h3 className="text-2xl font-bold tracking-tight mb-6 text-foreground flex items-center gap-4 relative z-10">
                  <div className="w-8 h-[2px] bg-primary/60" />
                  {project.explanation.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-light mt-4 relative z-10 w-full md:w-[90%] lg:w-[80%] whitespace-pre-wrap">
                  {project.explanation.content}
                </p>
              </div>
            </motion.div>
          )}

          {/* Custom Popup Gallery - Masonry Layout for Vertical Content */}
          {project.galleryMode === "popup-grid" && project.images && (
            <div className="mb-48">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-32 px-4"
              >
                <h3 className="text-5xl font-black uppercase tracking-tighter text-white mb-8">Campaign Creatives</h3>
                <p className="text-xl text-muted-foreground font-light italic">
                  Designed in collaboration with expert email designers.
                </p>
                <div className="w-24 h-px bg-primary/40 mx-auto mt-12" />
              </motion.div>
              
              <div className="columns-1 lg:columns-2 gap-12 space-y-12">
                {project.images.map((src: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: (i % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="break-inside-avoid exhibit-card cursor-pointer group"
                    onClick={() => setSelectedImage(src)}
                  >
                    <div className="relative z-10 w-full overflow-hidden rounded-xl">
                      <img
                        src={src}
                        alt={`Creative exhibit ${i + 1}`}
                        className="w-full h-auto object-cover transition-all duration-1000 ease-out group-hover:scale-[1.05]"
                        loading="lazy"
                        onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Custom Showcase Sections (Restored) */}
          {project.customShowcase === "xa-network" && (
            <div className="py-4 text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="exhibit-card max-w-4xl mx-auto py-32 px-12"
              >
                <p className="mono-label text-primary mb-8 font-bold italic">Confidential Archive</p>
                <h3 className="text-4xl font-black uppercase tracking-tighter text-white mb-12">Executive Strategy Assets</h3>
                <p className="text-xl text-muted-foreground font-light italic leading-relaxed">
                  {project.customArchivalNote}
                </p>
              </motion.div>
            </div>
          )}

          {project.customShowcase === "baytech-recovery" && (
            <div className="py-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="exhibit-card max-w-5xl mx-auto p-16"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-8">Lead Gen Architecture</h3>
                    <p className="text-lg text-muted-foreground font-light italic leading-relaxed">
                      Detailed outbound sequences, technographic audience building, and inbox rotation strategies are kept under strict NDA to protect client competitive advantage.
                    </p>
                  </div>
                  <div className="p-8 bg-black/40 rounded-xl border border-white/5 text-center">
                    <p className="mono-label text-primary/40">Data Strategy Restricted</p>
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {project.customShowcase === "matrix-govt-campaign" && (
            <div className="py-4">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="exhibit-card max-w-4xl mx-auto py-24 text-center"
              >
                <p className="mono-label text-primary mb-8 italic">Government Engagement</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter text-white mb-8">Campaign Outreach Log</h3>
                <p className="text-lg text-muted-foreground font-light italic">
                  {project.customArchivalNote}
                </p>
              </motion.div>
            </div>
          )}

          {/* Centered Image (Mini Case Study) */}
          {project.galleryMode === "centered-image" && project.images && (
            <div className="mb-24 w-full flex justify-center">
              <div className="w-full max-w-4xl px-4">
                {project.images.map((src: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="exhibit-card cursor-pointer w-full"
                    onClick={() => setSelectedImage(src)}
                  >
                    <div className="relative z-10 w-full aspect-[16/10] overflow-hidden rounded-xl">
                      <img
                        src={src}
                        alt={`Case study creative ${i + 1}`}
                        className="w-full h-full object-cover object-[center_75%] transition-all duration-700 ease-out group-hover:scale-[1.03]"
                        loading="lazy"
                        onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Multiple Project Galleries - Premium Horizontal Scroll */}
          {project.galleries && (
            <div className="space-y-48">
              {project.galleries.map((gallery: any, galleryIdx: number) => (
                <motion.div
                  key={galleryIdx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5 }}
                  className="w-full relative"
                >
                  {gallery.title && (
                    <div className="mb-12 px-4 text-center">
                      <p className="mono-label text-primary mb-4 italic">Exhibit {galleryIdx + 1}</p>
                      <h3 className="text-4xl font-black uppercase tracking-tighter text-white">{gallery.title}</h3>
                      {gallery.description && <p className="text-xl text-muted-foreground mt-4 font-light italic">{gallery.description}</p>}
                    </div>
                  )}

                  <div className="relative overflow-hidden py-12">
                    <div className="marquee-container accelerate">
                      {[1, 2].map((set) => (
                        <div
                          key={set}
                          className="marquee-content"
                          style={{ '--duration': `${Math.max(gallery.images.length * 4, 20)}s` } as React.CSSProperties}
                        >
                          {gallery.images.map((src: string, index: number) => (
                            <motion.div
                              key={`${set}-${index}`}
                              whileHover={{ scale: 1.02 }}
                              className="exhibit-card h-[720px] shrink-0 relative group cursor-pointer"
                              onClick={() => setSelectedImage(src)}
                            >
                              <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="h-full w-auto object-contain transition-all duration-700"
                                loading="lazy"
                                onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                                onError={(e) => { e.currentTarget.style.display = 'none'; }}
                              />
                            </motion.div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Single Images Grid - Editorial Staggered Layout */}
          {project.singleImages && (
            <div className="mt-40 mb-32">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
              >
                <div className="w-24 h-px bg-primary/40 mx-auto mb-10" />
                <h2 className="text-6xl font-black uppercase tracking-tighter text-white mb-6">The Individual Exhibits</h2>
                <p className="text-xl text-muted-foreground font-light italic px-4">
                  "Stand-alone brilliance. Each frame curated to command the full attention of the jury."
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
                {project.singleImages.map((src: string, i: number) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: (i % 2) * 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative group cursor-pointer exhibit-card accelerate ${i % 2 !== 0 ? 'md:mt-16' : ''}`}
                    onClick={() => setSelectedImage(src)}
                  >
                    <div className="relative z-10 w-full overflow-hidden rounded-xl">
                      <img
                        src={src}
                        alt={`Individual exhibit ${i + 1}`}
                        className="w-full h-auto object-cover transition-all duration-1000 ease-out group-hover:scale-[1.02]"
                        loading="lazy"
                        onLoad={(e) => e.currentTarget.setAttribute('data-loaded', 'true')}
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
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
