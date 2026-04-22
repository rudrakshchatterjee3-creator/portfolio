import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const links = [
  { label: "Expertise", href: "/#about" },
  { label: "Portfolio", href: "/#work" },
  { label: "Connect", href: "/#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5 accelerate">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-8 md:px-16 h-24 accelerate">
        <Link to="/" className="text-xl font-black uppercase tracking-tighter text-white group accelerate">
          Rudraksh <span className="text-primary group-hover:italic transition-all duration-500 accelerate">Chatterjee</span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-16 accelerate">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="mono-label text-white/40 hover:text-primary transition-all duration-300 accelerate">
              {l.label}
            </a>
          ))}
          <a
            href="mailto:rudraksh.chatterjee3@gmail.com"
            className="bg-white text-black px-8 py-3 font-black text-sm uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 accelerate"
          >
            Talk to us
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center md:hidden">
          <button onClick={() => setOpen(!open)} className="text-white p-2">
            {open ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-8 py-12 space-y-8 h-screen">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-4xl font-black uppercase text-white hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:rudraksh.chatterjee3@gmail.com"
            className="block bg-primary text-white text-center py-6 font-black text-xl uppercase tracking-widest"
          >
            Talk to us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
