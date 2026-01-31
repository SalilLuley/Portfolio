import React from "react";

export default function Footer() {
  return (
    <footer className="mx-auto mb-10 w-full max-w-5xl rounded-2xl border border-white/10 bg-white/80 px-6 py-6 text-center text-gray-600 shadow-sm backdrop-blur">
      <small className="mb-2 block text-xs">
        &copy; 2026 Salil. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting. Crafted with help
        from AI agents as I continue learning and exploring agentic workflows.
      </p>
    </footer>
  );
}
