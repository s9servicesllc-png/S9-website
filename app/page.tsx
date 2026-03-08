"use client";

import { useState } from "react";

export default function HomePage() {
  const [showStormForm, setShowStormForm] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl border border-yellow-500/20 bg-slate-900 p-8 shadow-2xl md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
            Serving Howell and surrounding areas
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
            S9 SERVICES
          </h1>

          <h2 className="mt-3 text-xl font-semibold text-slate-200 md:text-2xl">
            Reliable Roofing & Exterior Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Premium exterior company specializing in roofing, siding, windows,
            and doors. Built for homeowners who want reliable service, clear
            communication, and craftsmanship that lasts.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-200">
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Roofing
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Siding
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Windows
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Doors
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
              Storm Restoration
            </span>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="tel:6163027699"
              className="rounded-2xl bg-yellow-500 px-6 py-3 font-bold uppercase tracking-wide text-slate-950"
            >
              Call / Text 616-302-7699
            </a>

            <button
              onClick={() => setShowStormForm(true)}
              className="rounded-2xl border border-yellow-500/60 px-6 py-3 font-bold uppercase tracking-wide text-yellow-400"
            >
              Storm Damage / Insurance Claim
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-yellow-500">What We Do</h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Full roof replacements</li>
              <li>• Siding replacement</li>
              <li>• Window replacement</li>
              <li>• Exterior door installation</li>
              <li>• New build exterior work</li>
              <li>• Large storm restoration projects</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-2xl font-bold text-yellow-500">
              Why Homeowners Choose S9
            </h3>
            <ul className="mt-5 space-y-3 text-slate-300">
              <li>• Reliable communication</li>
              <li>• Fast turnaround</li>
              <li>• Detail-oriented craftsmanship</li>
              <li>• Friendly, easy-to-work-with service</li>
              <li>• Great pricing for the value</li>
              <li>• Premium finished appearance</li>
            </ul>
          </div>
        </div>
      </section>

      {showStormForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4">
          <div className="relative w-full max-w-2xl rounded-3xl border border-yellow-500/20 bg-slate-950 p-8 shadow-2xl">
            <button
              onClick={() => setShowStormForm(false)}
              className="absolute right-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-300"
            >
              Close
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-yellow-500">
              Storm Damage / Insurance Claim
            </p>

            <h3 className="mt-3 text-3xl font-black">
              Start your storm damage request
            </h3>

            <p className="mt-4 text-slate-300">
              Fill this out and we’ll follow up about your possible wind or hail
              damage.
            </p>

            <form className="mt-8 grid gap-4">
              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400"
                />
                <input
                  type="text"
                  placeholder="Property Address"
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                  <option className="text-slate-950">Roof Damage</option>
                  <option className="text-slate-950">Siding Damage</option>
                  <option className="text-slate-950">Window Damage</option>
                  <option className="text-slate-950">
                    Multiple Exterior Areas
                  </option>
                </select>

                <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white">
                  <option className="text-slate-950">Claim not filed yet</option>
                  <option className="text-slate-950">Claim already filed</option>
                  <option className="text-slate-950">
                    Adjuster already scheduled
                  </option>
                  <option className="text-slate-950">Approved claim</option>
                </select>
              </div>

              <textarea
                rows={5}
                placeholder="Describe the damage or what happened"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400"
              />

              <button
                type="submit"
                className="rounded-2xl bg-yellow-500 px-6 py-4 font-bold uppercase tracking-wide text-slate-950"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}
