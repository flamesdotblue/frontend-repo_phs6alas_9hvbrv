import React from 'react';
import { GraduationCap, Stethoscope, Wrench, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const programs = [
  {
    title: 'School Program',
    desc: 'Standards-aligned VR for grades 5–12. Explore space, cells, energy, and more through interactive simulations.',
    icon: GraduationCap,
    color: 'from-blue-600/30 to-cyan-500/20',
  },
  {
    title: 'College Program',
    desc: 'Immersive concept visualizations for physics, chemistry, data structures, and advanced labs.',
    icon: Cpu,
    color: 'from-indigo-600/30 to-purple-500/20',
  },
  {
    title: 'Medical VR',
    desc: 'Surgery rehearsal, anatomy exploration, and emergency response scenarios in a risk-free environment.',
    icon: Stethoscope,
    color: 'from-rose-600/30 to-fuchsia-500/20',
  },
  {
    title: 'Engineering & Skills',
    desc: 'Mechanics, circuits, CNC, welding, electrical safety, and industry-ready modules for hands-on training.',
    icon: Wrench,
    color: 'from-emerald-600/30 to-teal-500/20',
  },
];

const Programs = () => {
  return (
    <section id="programs" className="relative w-full bg-[#0a0b10] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(14,165,233,0.18),transparent_40%),radial-gradient(circle_at_80%_50%,rgba(168,85,247,0.16),transparent_42%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Courses & Programs
          </span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {programs.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.6 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur`}
            >
              <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${p.color} blur-3xl transition group-hover:scale-125`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl border border-white/10 bg-white/10 p-3">
                  <p.icon className="h-6 w-6 text-cyan-200" />
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-blue-100/90">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-cyan-200/80">
                  <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1">Interactive</span>
                  <span className="rounded-full border border-purple-300/30 bg-purple-300/10 px-3 py-1">Assessment-ready</span>
                  <span className="rounded-full border border-blue-300/30 bg-blue-300/10 px-3 py-1">Guided Labs</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional: testimonial slider & partners */}
        <motion.div
          id="demo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold">What learners say</h4>
            <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
              {[
                'I finally understood circuits after the VR lab! — Priya (Grade 10)',
                'Surgery rehearsal made me confident before my OSCE. — Aditya (MBBS)',
                'Our diploma students loved the CNC simulator. — Prof. Meera',
              ].map((t, i) => (
                <div key={i} className="min-w-[260px] rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-4 text-sm text-blue-100/90">
                  {t}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h4 className="text-lg font-semibold">Our partners</h4>
            <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {['Aurora Public School', 'Zenith College', 'MedCore Institute', 'TechWorks Poly', 'Stellar High', 'Bluewave Uni'].map((n) => (
                <div key={n} className="rounded-lg border border-white/10 bg-gradient-to-br from-blue-400/10 to-purple-400/10 p-3 text-center text-xs text-blue-100/80">
                  {n}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programs;
