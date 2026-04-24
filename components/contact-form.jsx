"use client";

import { useState } from "react";

import { contactInterestOptions } from "@/content/site";

const initialStatus = {
  type: "idle",
  message: "",
};

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(initialStatus);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setStatus(initialStatus);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Unable to submit the form.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: result.message,
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Unable to submit the form.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" autoComplete="name" required />
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>

        <div className="field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" name="phone" autoComplete="tel" />
        </div>

        <div className="field">
          <label htmlFor="interest">Interest Area</label>
          <select id="interest" name="interest" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {contactInterestOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="field full">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            required
            placeholder="Tell BlackHawk Ventures what you want to build, explore, or discuss."
          />
          <p className="field-help">
            Use this form for partnerships, development discussions, and
            venture inquiries.
          </p>
        </div>

        <div className="sr-only" aria-hidden="true">
          <label htmlFor="companyWebsite">Company website</label>
          <input
            id="companyWebsite"
            name="companyWebsite"
            tabIndex="-1"
            autoComplete="off"
          />
        </div>
      </div>

      <div className="form-actions">
        <button className="button primary" disabled={isSubmitting} type="submit">
          {isSubmitting ? "Sending..." : "Send Inquiry"}
        </button>
        {status.type !== "idle" ? (
          <p className={`form-status ${status.type}`}>{status.message}</p>
        ) : null}
      </div>
    </form>
  );
}
