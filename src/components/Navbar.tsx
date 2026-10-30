"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cafeData } from "@/data/cafe";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EASE_KOMOREBI, SPRING_TACTILE } from "@/lib/motion";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

const NAV_LINKS = [
  { href: "#about", label: "About", id: "about" },
  { href: "#menu", label: "Menu", id: "menu" },
  { href: "#experience", label: "Experience", id: "experience" },
  { href: "#gallery", label: "Gallery", id: "gallery" },
  { href: "#reviews", label: "Reviews", id: "reviews" },
  { href: "#location", label: "Location", id: "location" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const { scrollTo } = useSmoothScroll();

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      scrollTo(href, { offset: -75, duration: 1.35 });
    }
  };

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    scrollTo(0, { duration: 1.35 });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
      if (scrollY < 180) {
        setActiveSection("");
      }
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;
      if (progressBarRef.current) {
        progressBarRef.current.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionElements = NAV_LINKS.map((l) =>
      document.getElementById(l.id)
    ).filter(Boolean) as HTMLElement[];

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0 }
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

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

  return (
    <>
      <div
        ref={progressBarRef}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-[#845D3E] origin-left scale-x-0 transition-transform duration-150 ease-out pointer-events-none z-[60]"
        aria-hidden="true"
      />

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E7E2DA] shadow-xs py-3.5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="#"
              onClick={handleBrandClick}
              className="group flex flex-col focus-visible:ring-2 focus-visible:ring-[#845D3E] rounded-sm p-1 transition-transform"
              aria-label={`${cafeData.name} Homepage`}
            >
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-[#1C1917] group-hover:text-[#845D3E] transition-colors">
                KOMOREBI
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#57534E] -mt-1 font-medium group-hover:tracking-[0.24em] transition-all">
                Coffee & Dining
              </span>
            </Link>

            <nav
              className="hidden md:flex items-center space-x-7"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-sm font-medium transition-colors py-2 relative min-h-[44px] flex items-center ${
                      isActive
                        ? "text-[#845D3E] font-semibold"
                        : "text-[#57534E] hover:text-[#1C1917]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-1.5 left-0 right-0 h-0.5 bg-[#845D3E] rounded-full"
                        transition={SPRING_TACTILE}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <motion.a
                href="#reservation"
                onClick={(e) => handleNavClick(e, "#reservation")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={SPRING_TACTILE}
                className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-[#1C1917] hover:bg-[#845D3E] rounded-md transition-colors shadow-xs min-h-[44px]"
              >
                Reserve a Table
              </motion.a>
            </div>

            <div className="flex md:hidden items-center">
              <motion.button
                type="button"
                whileTap={{ scale: 0.92 }}
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
              </motion.button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-nav"
              data-lenis-prevent
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: EASE_KOMOREBI }}
              className="fixed inset-0 top-[65px] bg-[#FAF8F5]/98 backdrop-blur-xl z-40 md:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto border-t border-[#E7E2DA]"
            >
              <motion.nav
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
                  },
                }}
                className="flex flex-col space-y-2"
                aria-label="Mobile Navigation"
              >
                {NAV_LINKS.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      variants={{
                        hidden: { opacity: 0, x: -16 },
                        visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE_KOMOREBI } },
                      }}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`text-lg font-serif font-medium py-3.5 border-b border-[#E7E2DA]/60 min-h-[48px] flex items-center justify-between ${
                        isActive ? "text-[#845D3E] font-bold" : "text-[#1C1917]"
                      }`}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <span>{link.label}</span>
                      <span className="text-xs text-[#57534E]">→</span>
                    </motion.a>
                  );
                })}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
                className="pt-8 space-y-4"
              >
                <a
                  href="#reservation"
                  onClick={(e) => handleNavClick(e, "#reservation")}
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
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
