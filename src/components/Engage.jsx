import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Play } from 'lucide-react';
import { motion } from 'framer-motion';

const Engage = () => {
  return (
    <section id="gallery" className="relative w-full bg-[#0a0b10] py-20 text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_30%_30%,rgba(14,165,233,0.14),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(147,51,234,0.18),transparent_40%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Gallery
          </span>
        </motion.h2>

        {/* Gallery grid (images/videos as stylized placeholders) */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {[
            'VR Classroom Session',
            'Headset Experience',
            'Interactive Lab',
            'Surgery Simulation',
            'Engineering Workshop',
            'Campus Demo Day',
          ].map((label, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.6 }}
              className="group relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5"
            >
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,189,248,0.15),rgba(147,51,234,0.15))]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1 text-xs text-white">
                  <Play className="h-3 w-3" />
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact / Book a Demo */}
        <motion.div
          id="contact"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">Contact / Book a Demo</h3>
            <p className="mt-2 text-blue-100/90">Tell us about your institution and we’ll set up a tailored VR demo.</p>
            <form className="mt-4 grid grid-cols-1 gap-3">
              <input required type="text" placeholder="Your name" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-blue-100/60 focus:border-cyan-400/60" />
              <input required type="email" placeholder="Email" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-blue-100/60 focus:border-cyan-400/60" />
              <input type="text" placeholder="Institution / Organization" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-blue-100/60 focus:border-cyan-400/60" />
              <textarea rows={4} placeholder="What would you like to explore in VR?" className="rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-sm outline-none placeholder:text-blue-100/60 focus:border-cyan-400/60" />
              <button type="submit" className="mt-2 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-cyan-600 to-purple-600 px-4 py-2 text-sm font-semibold shadow-[0_0_30px_rgba(79,70,229,0.5)] transition hover:scale-[1.01]">
                Send Inquiry
              </button>
            </form>
          </div>

          <div className="grid gap-4">
            <a
              href="https://wa.me/0000000000?text=Hi%20VirtualRevolution.education%20-%20I%20would%20like%20to%20book%20a%20VR%20demo."
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-green-400/30 bg-green-400/10 p-5 text-green-100 transition hover:bg-green-400/15"
            >
              <MessageCircle className="h-5 w-5" /> WhatsApp: Book a Demo
            </a>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-blue-100/90">
              <div className="mb-2 flex items-center gap-2 text-white">
                <Phone className="h-4 w-4" /> +91 00000 00000
              </div>
              <div className="mb-2 flex items-center gap-2">
                <Mail className="h-4 w-4" /> hello@virtualrevolution.education
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4" /> VirtualRevolution.education, India
              </div>
            </div>
            <iframe
              title="Map"
              className="h-56 w-full rounded-2xl border border-white/10"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.77%2C18.90%2C73.00%2C19.30&layer=mapnik"
            />
          </div>
        </motion.div>
      </div>

      {/* Floating Book a Demo Button */}
      <a
        href="#contact"
        className="fixed bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_34px_rgba(79,70,229,0.6)] transition hover:scale-[1.03]"
      >
        <MessageCircle className="h-4 w-4" /> Book a Demo
      </a>
    </section>
  );
};

export default Engage;
