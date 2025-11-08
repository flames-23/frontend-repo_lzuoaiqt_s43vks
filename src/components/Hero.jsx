import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero({ onOpenSignup }) {
  return (
    <section id="home" className="relative min-h-[90vh] w-full pt-20">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/IKzHtP5ThSO83edK/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white pointer-events-none" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center gap-6 py-24">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center rounded-full bg-slate-900 text-white px-3 py-1 text-xs font-semibold shadow"
        >
          Enterprise-grade. Startup-fast.
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900"
        >
          The multipurpose platform for modern corporate teams
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl text-slate-700 text-lg"
        >
          Orchestrate analytics, workflows, and scale without friction. Secure, compliant, and delightful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <button
            onClick={onOpenSignup}
            className="rounded-md bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-600"
          >
            Start free trial
          </button>
          <a
            href="#features"
            className="rounded-md px-6 py-3 font-semibold text-slate-900 hover:text-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-900"
          >
            View features
          </a>
        </motion.div>
      </div>
    </section>
  );
}
