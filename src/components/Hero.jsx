import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0a0b10] text-white">
      {/* 3D Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient glow overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0b10]/40 to-[#0a0b10]" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-64 rounded-full bg-gradient-to-r from-purple-600/30 via-blue-500/30 to-cyan-400/30 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-32 text-center sm:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl"
        >
          Experience Education Beyond Reality
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-blue-100/80 sm:text-lg"
        >
          Immersive VR learning for schools, colleges, and professional programs. Explore complex concepts with clarity and excitement.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(79,70,229,0.5)] transition hover:scale-[1.02] hover:shadow-[0_0_44px_rgba(79,70,229,0.7)] focus:outline-none focus:ring-2 focus:ring-purple-400/50"
          >
            <Rocket className="h-4 w-4" />
            Try Virtual Learning
          </a>

          <a
            href="#demo"
            className="inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-white/5 px-5 py-3 text-sm font-semibold text-cyan-100 transition hover:bg-white/10"
          >
            <Play className="h-4 w-4" /> VR demo preview
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-12 grid w-full max-w-3xl grid-cols-3 gap-6"
        >
          {[
            { label: 'Schools & Colleges', value: '50+' },
            { label: 'Immersive Modules', value: '150+' },
            { label: 'Avg. Engagement', value: '2.4x' },
          ].map((s, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <div className="text-xs text-blue-100/80">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
