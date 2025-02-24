"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "./Button";
import { ThemeToggle } from "./Theme-toggle";
import exp from "constants";

// Dynamically import icons to optimize loading
const FileText = dynamic(() =>
  import("lucide-react").then((mod) => mod.FileText),
);
const LayoutGrid = dynamic(() =>
  import("lucide-react").then((mod) => mod.LayoutGrid),
);
const Menu = dynamic(() => import("lucide-react").then((mod) => mod.Menu));
const X = dynamic(() => import("lucide-react").then((mod) => mod.X));
const LineChart = dynamic(() =>
  import("lucide-react").then((mod) => mod.LineChart),
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    {
      href: "https://blog.drjforrest.com",
      icon: FileText,
      label: "Blog",
      external: true,
    },
    {
      href: "https://drjforrest.com",
      icon: LayoutGrid,
      label: "Main",
      external: true,
    },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left Side: Logo + Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-foreground hover:text-primary"
        >
          <LineChart className="w-8 h-8" />
          <span className="font-semibold text-lg sm:text-xl">
            Dr. Jamie I. Forrest
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 text-foreground hover:text-primary transition"
            >
              <div>
                <link.icon className="w-5 h-5" />
              </div>
              <span className="hidden sm:inline">{link.label}</span>
            </Link>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            className="hover:bg-accent/10"
          >
            <div>
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </div>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border/50">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 p-2 rounded-md hover:bg-accent/10 transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon className="h-5 w-5" />
                  {link.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export { Header };
