const Footer = () => (
  <footer className="bg-transparent border-t border-white/5 py-24 px-6 md:px-16 lg:px-24">
    <div className="max-w-[1400px] mx-auto flex flex-col gap-12">
      <p className="text-xl text-white/40 max-w-3xl leading-relaxed italic border-l-2 border-primary pl-8 py-2">
        Note: Because much of my work involves proprietary systems and internal operations, this portfolio represents only a curated glimpse into my full skill set.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-12 border-t border-white/5">
        <span className="mono-label text-white/20">© {new Date().getFullYear()} Rudraksh Chatterjee</span>
        <span className="mono-label text-primary italic font-bold">Crafted with intention</span>
      </div>
    </div>
  </footer>
);

export default Footer;
