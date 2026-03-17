import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

const links = [
  { label: "Expertise", href: "#about" },
  { label: "Portfolio", href: "#work" },
  { label: "Connect", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/30">
      <div className="flex items-center justify-between px-6 md:px-16 lg:px-24 h-16">
        <a href="#" className="text-sm font-semibold tracking-[0.15em] uppercase text-foreground">
          Rudraksh <span className="text-primary">Chatterjee</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors tracking-[0.15em] uppercase font-medium">
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1aeMODThizb19hej8OZ6bLguG5aMZUnfd/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent flex items-center gap-2 px-5 py-2 rounded text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity tracking-wide"
          >
            <Download className="w-3 h-3" />
            CV
          </a>
          <ModeToggle />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground p-2">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-xl px-6 py-8 space-y-5">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-xs text-muted-foreground hover:text-foreground transition-colors tracking-[0.15em] uppercase font-medium"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://drive.google.com/file/d/1aeMODThizb19hej8OZ6bLguG5aMZUnfd/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="gradient-accent inline-flex items-center gap-2 px-5 py-2 rounded text-xs font-medium text-primary-foreground tracking-wide"
          >
            <Download className="w-3 h-3" />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
