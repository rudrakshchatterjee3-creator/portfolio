const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto flex flex-col gap-6">
      <p className="text-xs text-muted-foreground/80 max-w-3xl leading-relaxed italic border-l border-border/40 pl-4 py-1">
        Note: Because much of my work involves proprietary systems and internal operations, this portfolio represents only a curated glimpse into my full skill set.
      </p>
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
        <span>© {new Date().getFullYear()} Rudraksh Chatterjee</span>
        <span className="italic font-light">Crafted with intention</span>
      </div>
    </div>
  </footer>
);

export default Footer;
