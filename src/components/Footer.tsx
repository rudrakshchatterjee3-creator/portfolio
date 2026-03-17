const Footer = () => (
  <footer className="border-t border-border/30 py-10 px-6 md:px-16 lg:px-24">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground tracking-wider">
      <span>© {new Date().getFullYear()} Rudraksh Chatterjee</span>
      <span className="italic font-light">Crafted with intention</span>
    </div>
  </footer>
);

export default Footer;
