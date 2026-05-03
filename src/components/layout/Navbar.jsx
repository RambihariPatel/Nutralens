import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="/logo.jpg" alt="NutraLens Logo" className="h-8 w-auto rounded-md shadow-sm" />
          <span className="font-bold text-xl tracking-tight text-slate-900 dark:text-white">Nutralens</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Features</a>
          <a href="#products" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Products</a>
          <a href="#community" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Community</a>
          <a href="#resources" className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white">Resources</a>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/auth">
            <Button variant="ghost" className="hidden sm:inline-flex">Log in</Button>
          </Link>
          <Link to="/auth">
            <Button className="bg-gradient-to-r from-emerald-400 to-emerald-600 hover:from-emerald-500 hover:to-emerald-700 shadow-emerald-500/20">Sign up</Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
