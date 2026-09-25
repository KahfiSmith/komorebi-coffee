"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cafeData } from "@/data/cafe";
import { Menu, X, ArrowUpRight } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const sections = ["about", "menu", "experience", "gallery", "reviews", "location"];
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const scrollPosition = window.scrollY + 180;
      
      let currentSection = "";
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = sectionId;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press (Accessibility R-32)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#about", label: "About", id: "about" },
    { href: "#menu", label: "Menu", id: "menu" },
    { href: "#experience", label: "Experience", id: "experience" },
    { href: "#gallery", label: "Gallery", id: "gallery" },
    { href: "#reviews", label: "Reviews", id: "reviews" },
    { href: "#location", label: "Location", id: "location" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2DA] shadow-xs py-3.5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#"
            className="group flex flex-col focus-visible:ring-2 focus-visible:ring-[#845D3E] rounded-sm p-1"
            aria-label={`${cafeData.name} Homepage`}
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#1C1917] group-hover:text-[#845D3E] transition-colors">
              KOMOREBI
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#57534E] -mt-1 font-medium">
              Coffee & Dining
            </span>
          </Link>

          {/* Desktop Navigation Links with Active Scroll Spy */}
          <nav
            className="hidden md:flex items-center space-x-7"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors py-2 relative min-h-[44px] flex items-center ${
                    isActive
                      ? "text-[#845D3E] font-semibold"
                      : "text-[#57534E] hover:text-[#1C1917]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-1 left-0 right-0 h-0.5 bg-[#845D3E] rounded-full transition-all" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#reservation"
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1C1917] hover:bg-[#845D3E] rounded-md transition-colors shadow-xs min-h-[44px]"
            >
              Reserve a Table
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-md text-[#1C1917] hover:bg-[#F3EFEA] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#845D3E]"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={isMobileMenuOpen ? "Tutup menu" : "Buka menu navigasi"}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav"
          className="fixed inset-0 top-[65px] bg-[#FAF8F5] z-40 md:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto border-t border-[#E7E2DA] animate-in fade-in duration-200"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-serif font-medium py-3.5 border-b border-[#E7E2DA]/60 min-h-[48px] flex items-center justify-between ${
                    isActive ? "text-[#845D3E] font-bold" : "text-[#1C1917]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-[#57534E]">→</span>
                </a>
              );
            })}
          </nav>

          <div className="pt-8 space-y-4">
            <a
              href="#reservation"
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-6 py-3.5 text-base font-medium text-white bg-[#1C1917] hover:bg-[#845D3E] rounded-md transition-colors min-h-[48px]"
            >
              Reserve a Table
            </a>
            <a
              href={cafeData.contact.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-[#1C1917] bg-[#F3EFEA] hover:bg-[#EBE4DC] rounded-md border border-[#E7E2DA] transition-colors min-h-[48px]"
            >
              <span>Get Directions</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <p className="text-xs text-center text-[#57534E] pt-2">
              Buka setiap hari mulai pukul 07:00 WIB
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
