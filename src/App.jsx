import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Engage from './components/Engage';
import { Rocket } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0b10] text-white antialiased">
      {/* Top navigation */}
      <header className="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-black/30 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="flex items-center gap-2 text-sm font-semibold">
            <Rocket className="h-4 w-4 text-cyan-300" />
            <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
              VirtualRevolution.education
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-blue-100/80 sm:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#gallery" className="hover:text-white">Gallery</a>
            <a href="#contact" className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 hover:bg-cyan-300/20">Book a Demo</a>
          </nav>
        </div>
      </header>

      {/* Content sections */}
      <main className="scroll-smooth">
        <Hero />
        <About />
        <Programs />
        <Engage />
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-blue-100/70">
          <p>© {new Date().getFullYear()} VirtualRevolution.education. All rights reserved.</p>
          <p className="mt-1">Built for immersive, modern, and accessible learning.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
