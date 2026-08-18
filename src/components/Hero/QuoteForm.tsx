"use client";

import { useState, type FormEvent } from "react";

const fieldClass =
  "w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-body/60 focus:border-brand";

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-2xl bg-white p-6 shadow-2xl shadow-black/20 sm:p-7"
    >
      <h2 className="text-center text-lg font-bold text-ink">
        Request A Free Quote
      </h2>

      <div className="mt-5 grid grid-cols-2 gap-3">
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-ink">
            First Name
          </span>
          <input
            name="firstName"
            required
            placeholder="First Name"
            className={fieldClass}
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs font-semibold text-ink">
            Last Name
          </span>
          <input
            name="lastName"
            required
            placeholder="Last Name"
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-xs font-semibold text-ink">
          Email
        </span>
        <input
          name="email"
          type="email"
          required
          placeholder="Email address"
          className={fieldClass}
        />
      </label>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-xs font-semibold text-ink">
          Company
        </span>
        <input
          name="company"
          placeholder="Company Name"
          className={fieldClass}
        />
      </label>

      <label className="mt-3 block">
        <span className="mb-1.5 block text-xs font-semibold text-ink">
          Project Details
        </span>
        <textarea
          name="details"
          rows={3}
          placeholder="Tell us about your project"
          className={`${fieldClass} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="mt-5 w-full rounded-lg bg-brand py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
      >
        {submitted ? "Thanks — we'll be in touch" : "Get Started"}
      </button>
    </form>
  );
}
