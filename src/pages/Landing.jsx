import React from "react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";
import { Activity, Camera, Leaf, Zap, Users, BookOpen, Package, FileText, Video, Terminal } from "lucide-react";

export function Landing() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-slate-50 dark:bg-slate-950 -z-10" />
        <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] rounded-full bg-blue-500/10 blur-3xl -z-10" />

        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col space-y-8">
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-600 dark:text-emerald-400 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                Smart Vision. Personalized Nutrition.
              </div>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                AI-powered retrofitted <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">vending machine</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-lg">
                Upgraded AI-powered & retrofitted vending machine that dispenses customized healthy snacks for gym owners, boutique office managers, and smart-city vendors.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/auth">
                  <Button size="lg" className="w-full sm:w-auto text-base bg-gradient-to-r from-emerald-400 to-emerald-600 shadow-emerald-500/25 shadow-lg">Get started</Button>
                </Link>
                <a href="#demo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto text-base backdrop-blur-sm bg-white/50 dark:bg-slate-900/50">Visit now</Button>
                </a>
              </div>
            </div>
            
            <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none">
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl shadow-emerald-900/20 aspect-[4/3] bg-slate-100 dark:bg-slate-900 flex items-center justify-center">
                <img 
                  src="/hero.jpg" 
                  alt="AI Vending Machine" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-slate-900 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Eliminates Generic Vending Waste</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Our AI recognizes returning users and dispenses customized, goal-oriented healthy snacks tailored specifically for them.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-6">
                <Camera className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">AI Vision Retrofit</h3>
              <p className="text-slate-600 dark:text-slate-400">Software interface to calibrate the camera module and manage user biometric profiles securely.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Smart Dispense Logic</h3>
              <p className="text-slate-600 dark:text-slate-400">Configuration tools to set "recipes" for healthy snack mixes like Protein Mix, Keto Crunch, and more.</p>
            </div>
            
            <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-6">
                <Activity className="w-6 h-6 text-amber-600 dark:text-amber-400" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Predictive Inventory</h3>
              <p className="text-slate-600 dark:text-slate-400">Real-time tracking of ingredients with AI-driven restock alerts based on consumption trends.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Package className="w-8 h-8 text-emerald-500" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Products</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            From the NutraLens AI Camera Module to our comprehensive Operator Dashboard, we provide the complete hardware-software ecosystem required to upgrade your standard vending machines.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-white dark:bg-slate-900 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <Users className="w-8 h-8 text-blue-500" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Community</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
            Join hundreds of gym owners and boutique office managers who are revolutionizing the way personalized nutrition is delivered in their spaces.
          </p>
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-20 bg-slate-50 dark:bg-slate-950 scroll-mt-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center gap-4 mb-8">
            <BookOpen className="w-8 h-8 text-amber-500" />
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Resources</h2>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mb-12">
            Access our installation guides, API documentation for the Smart Dispense Logic, and best practices for creating healthy snack "recipes".
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <a href="#" className="block p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-emerald-500/30 group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <FileText className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Installation Guide</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Step-by-step instructions for retrofitting your standard vending machines with the NutraLens AI module.</p>
            </a>
            
            <a href="#" className="block p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-emerald-500/30 group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <Terminal className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">API Documentation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Integrate the Smart Dispense Logic directly into your existing management software or mobile app.</p>
            </a>
            
            <a href="#" className="block p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 hover:border-emerald-500/30 group">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500 transition-colors">
                <Video className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Video Tutorials</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">Watch our experts configure recipes, calibrate the AI vision camera, and interpret the analytics dashboard.</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
