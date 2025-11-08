import { useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import { Features, UseCases, Pricing, Footer } from './components/Sections.jsx';
import { X } from 'lucide-react';

function App() {
  const [openSignup, setOpenSignup] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header onOpenSignup={() => setOpenSignup(true)} />
      <main>
        <Hero onOpenSignup={() => setOpenSignup(true)} />
        <Features />
        <UseCases />
        <Pricing />
      </main>
      <Footer />

      {/* Floating CTA Widget */}
      <button
        onClick={() => setOpenSignup(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-5 py-3 shadow-lg hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Open signup"
      >
        Start free • 14 days
      </button>

      {/* Minimal Signup Modal */}
      {openSignup && (
        <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setOpenSignup(false)} />
          <div className="relative mx-4 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
            <button
              onClick={() => setOpenSignup(false)}
              className="absolute right-3 top-3 rounded-md p-1 text-slate-500 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600" />
              <h3 className="text-lg font-semibold">Create your NovaSuite account</h3>
            </div>
            <p className="mt-1 text-sm text-slate-600">No credit card required. Get started in under a minute.</p>
            <form className="mt-4 space-y-3">
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Work email</span>
                <input type="email" required placeholder="you@company.com" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </label>
              <label className="block">
                <span className="text-sm font-medium text-slate-700">Password</span>
                <input type="password" required placeholder="••••••••" className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-600" />
              </label>
              <button type="submit" className="w-full rounded-md bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800">Create account</button>
              <p className="text-xs text-slate-500">By signing up you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
