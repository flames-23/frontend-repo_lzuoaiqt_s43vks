import { motion } from 'framer-motion';
import { Shield, BarChart3, Bot, Layers, Settings, Zap, Users, Star, Check, ArrowRight } from 'lucide-react';

export function Features() {
  const items = [
    { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2, SSO/SAML, audit logs, and role-based access.' },
    { icon: BarChart3, title: 'Advanced Analytics', desc: 'Real-time dashboards and cohort analysis at scale.' },
    { icon: Bot, title: 'Automation', desc: 'Trigger no-code workflows to eliminate manual steps.' },
    { icon: Layers, title: 'Scalability', desc: 'Multi-region, horizontal scaling, and auto-optimizations.' },
    { icon: Settings, title: 'Customization', desc: 'APIs and SDKs to tailor to your enterprise ecosystem.' },
    { icon: Zap, title: 'Performance', desc: 'Ultra-low latency with global edge delivery.' },
    { icon: Users, title: 'Collaboration', desc: 'Granular permissions and shared workspaces.' },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 text-center"
        >
          Everything enterprises need
        </motion.h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function UseCases() {
  const steps = [
    { title: 'Consolidate', desc: 'Unify tools across departments and regions.' },
    { title: 'Automate', desc: 'Replace manual processes with intelligent flows.' },
    { title: 'Measure', desc: 'Visualize KPIs and drill into variance.' },
    { title: 'Scale', desc: 'Expand globally with governance and controls.' },
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl font-bold text-slate-900"
            >
              Solve complex corporate workflows
            </motion.h2>
            <p className="mt-3 text-slate-600">
              A guided, step-by-step path from chaos to clarity—built for finance, ops, and IT teams.
            </p>
            <ul className="mt-6 space-y-3">
              {steps.map((s, idx) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs font-bold">
                    {idx + 1}
                  </span>
                  <div>
                    <div className="font-semibold text-slate-900">{s.title}</div>
                    <div className="text-sm text-slate-600">{s.desc}</div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.04 }}
                    className="rounded-xl border border-slate-200 p-4 hover:border-indigo-200 hover:shadow transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-slate-800">Workflow {i + 1}</div>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Best practice templates for rapid rollout.</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  const plans = [
    { name: 'Starter', priceM: 29, features: ['Up to 5 users', 'Basic automation', 'Email support'] },
    { name: 'Growth', priceM: 79, features: ['Up to 25 users', 'Advanced analytics', 'Priority support'] },
    { name: 'Enterprise', priceM: 199, features: ['Unlimited users', 'SSO/SAML', 'Dedicated CSM'] },
  ];
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center">Simple pricing</h2>
        <p className="mt-2 text-center text-slate-600">Switch anytime. 14-day free trial on all plans.</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{p.name}</h3>
                <Star className="h-4 w-4 text-amber-500" aria-hidden="true" />
              </div>
              <div className="mt-4 text-3xl font-bold">${p.priceM}<span className="text-sm font-normal text-slate-500">/mo</span></div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                    <Check className="h-4 w-4 text-green-600" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#signup" className="mt-6 inline-flex w-full items-center justify-center rounded-md bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800">Choose {p.name}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer id="contact" className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
            <span className="font-semibold text-white">NovaSuite</span>
          </div>
          <p className="mt-3 text-sm text-slate-400">The modern operating layer for enterprise teams.</p>
          <form className="mt-4 flex gap-2">
            <input aria-label="Email for newsletter" type="email" required placeholder="Enter your email" className="flex-1 rounded-md bg-slate-900 border border-slate-800 px-3 py-2 text-sm placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-600" />
            <button className="rounded-md bg-white text-slate-900 px-3 py-2 text-sm font-semibold">Subscribe</button>
          </form>
        </div>
        <div>
          <div className="font-semibold text-white">Product</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#features" className="hover:text-white">Features</a></li>
            <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#blog" className="hover:text-white">Blog</a></li>
            <li><a href="#careers" className="hover:text-white">Careers</a></li>
            <li><a href="#security" className="hover:text-white">Security</a></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-white">Contact</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>hello@novasuite.io</li>
            <li>+1 (415) 555-0172</li>
            <li>San Francisco, CA</li>
          </ul>
          <div className="mt-4 text-xs text-slate-500">© {new Date().getFullYear()} NovaSuite Inc.</div>
        </div>
      </div>
    </footer>
  );
}
