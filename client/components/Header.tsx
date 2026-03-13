import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Me", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/" && !location.hash) return true;
    if (href.startsWith("/#") && location.pathname === "/" && location.hash === href.substring(1)) return true;
    if (href === location.pathname) return true;
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-12",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-primary-foreground font-bold text-xl group-hover:scale-110 transition-transform">
            SD
          </div>
          <span className="font-bold text-xl hidden sm:inline-block">AHMAD<span className="text-primary">  ALISHA</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 bg-secondary/50 backdrop-blur-md p-1 rounded-full border border-border/50">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return item.href.startsWith("/") && !item.href.includes("#") ? (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all",
                  active
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full w-10 h-10 bg-secondary/50 border border-border/50"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Link to="/book">
            <Button className="rounded-full hidden md:flex items-center gap-2 group">
              Book a Meeting
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse group-hover:bg-white" />
            </Button>
          </Link>

          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col p-6 gap-4">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    active ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium transition-colors",
                    active ? "text-primary" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  {item.name}
                </a>
              );
            })}
            <Link to="/book" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-4 rounded-xl">Book a Meeting</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
