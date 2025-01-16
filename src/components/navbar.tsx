"use client";

import { useEffect, useState } from "react";

import { Button } from "./ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 z-50 w-full">
      <header
        className={cn(
          "w-full transition-all duration-300 ease-in-out transform",
          isScrolled
            ? "py-2 container mx-auto translate-y-0"
            : "pb-4 translate-y-0"
        )}
      >
        <div
          className={cn(
            "mx-auto backdrop-blur-xl backdrop-saturate-150 border-b border-border/40",
            "shadow-lg shadow-black/10 transition-all duration-300 ease-in-out",
            "hover:shadow-xl hover:shadow-primary/20",
            isScrolled
              ? "bg-background/80 rounded-sm transform translate-y-0"
              : "bg-background transform translate-y-0"
          )}
        >
          <div className="container mx-auto">
            <div className="flex h-16 items-center justify-between px-6">
              <Link
                href="/"
                className="flex items-center space-x-2 transition-transform duration-300 hover:scale-105"
              >
                <span className="font-heading font-bold text-xl sm:text-2xl bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-gradient">
                  LuminaWallet
                </span>
              </Link>
              <nav className="flex items-center space-x-4">
                <Button
                  asChild
                  variant="default"
                  size="lg"
                  className="group relative transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20 active:scale-95"
                >
                  <Link href="/login">Login</Link>
                </Button>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
