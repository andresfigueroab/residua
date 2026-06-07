"use client";

import { useState } from "react";

const employeeRanges = [
  "1–10",
  "11–50",
  "51–200",
  "201–500",
  "501–1,000",
  "1,001–5,000",
  "5,000+",
];

const services = [
  "Residue Intelligence",
  "Culture Transformation",
  "Carbon Visibility Reporting",
  "Civic Intelligence & Stakeholder Mapping",
  "Public Opinion Research",
  "Infrastructure Sentiment Studies",
  "Not sure yet",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    setState(res.ok ? "success" : "error");
  }

  if (state === "error") {
    return (
      <div className="bg-white border border-red-200 rounded-xl p-12 text-center">
        <h3 className="text-xl font-bold text-charcoal mb-3">Something went wrong.</h3>
        <p className="text-gray-600 text-sm max-w-sm mx-auto mb-6">
          We couldn't send your message. Please try again or email us directly at{" "}
          <a href="mailto:sales@residua.earth" className="text-teal-700 underline">sales@residua.earth</a>.
        </p>
        <button
          onClick={() => setState("idle")}
          className="px-6 py-3 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 transition-colors text-sm"
        >
          Try again
        </button>
      </div>
    );
  }

  if (state === "success") {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
        <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-6 h-6 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-charcoal mb-3">Message received.</h3>
        <p className="text-gray-600 text-sm max-w-sm mx-auto">
          We'll review your submission and reach out within two business days. We read every message before responding.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 space-y-6">
      {/* Row 1: Company + Role */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Company Name <span className="text-teal-700">*</span>
          </label>
          <input
            type="text"
            name="company"
            required
            placeholder="Acme Corp"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Your Role <span className="text-teal-700">*</span>
          </label>
          <input
            type="text"
            name="role"
            required
            placeholder="VP of Sustainability"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Name + Email */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Your Name <span className="text-teal-700">*</span>
          </label>
          <input
            type="text"
            name="name"
            required
            placeholder="Jane Smith"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Work Email <span className="text-teal-700">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            placeholder="jane@acmecorp.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
          />
        </div>
      </div>

      {/* Row 3: Address + ZIP */}
      <div className="grid sm:grid-cols-3 gap-6">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Company Address <span className="text-teal-700">*</span>
          </label>
          <input
            type="text"
            name="address"
            required
            placeholder="123 Main St, Chicago, IL"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            ZIP Code <span className="text-teal-700">*</span>
          </label>
          <input
            type="text"
            name="zipcode"
            required
            placeholder="60601"
            pattern="[0-9]{5}(-[0-9]{4})?"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors"
          />
        </div>
      </div>

      {/* Row 4: Employees + Service */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Number of Employees <span className="text-teal-700">*</span>
          </label>
          <select
            name="employees"
            required
            defaultValue=""
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-white"
          >
            <option value="" disabled>Select range</option>
            {employeeRanges.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Service of interest
          </label>
          <select
            name="service"
            defaultValue=""
            className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors bg-white"
          >
            <option value="">Select a service (optional)</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Tell us about your situation <span className="text-teal-700">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Describe the challenge you're facing or the outcome you're trying to achieve. The more specific, the better."
          className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm text-charcoal placeholder-gray-400 focus:outline-none focus:border-teal-700 focus:ring-1 focus:ring-teal-700 transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="w-full py-4 bg-teal-700 text-white font-semibold rounded-lg hover:bg-teal-800 disabled:opacity-60 transition-colors text-sm"
      >
        {state === "submitting" ? "Sending…" : "Send message →"}
      </button>

      <p className="text-xs text-gray-400 text-center">
        We respond within two business days. Fields marked <span className="text-teal-700">*</span> are required.
      </p>
    </form>
  );
}
