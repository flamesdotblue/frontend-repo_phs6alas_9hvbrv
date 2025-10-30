import React from 'react';
import { User, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full bg-[#0a0b10] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_70%_50%,rgba(6,182,212,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-extrabold tracking-tight sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
            About VirtualRevolution.education
          </span>
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-cyan-300" />
              <h3 className="text-lg font-semibold">Our Mission</h3>
            </div>
            <p className="mt-3 text-blue-100/90">
              We transform traditional learning through immersive virtual reality. From 5th grade to advanced professional programs, we make complex concepts feel intuitive, interactive, and unforgettable.
            </p>
            <p className="mt-3 text-blue-100/80">
              Our VR classrooms simulate labs, surgeries, engineering systems, and real-world problem solving—boosting retention and engagement for every learner.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <User className="h-5 w-5 text-purple-300" />
              <h3 className="text-lg font-semibold">Founder’s Note</h3>
            </div>
            <p className="mt-3 text-blue-100/90">
              “Education should be an experience, not a download. At VirtualRevolution.education, we blend science, design, and technology to help students learn by doing.”
            </p>
            <p className="mt-3 font-semibold text-white">— Yohesh, Founder</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
