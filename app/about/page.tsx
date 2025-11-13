// app/about/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About – Absolute Timer | DC Comics Countdowns",
  description: "Learn about Absolute Timer: a personal project with live countdowns for Absolute DC comic releases.",
};

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">About Absolute Timer</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
        <p>
          <strong>Absolute Timer</strong> is a personal project created by <strong>Jhon Mario Durango Rodríguez</strong>. 
          It's a simple tool for fans of <strong>Absolute DC Comics</strong>, providing <strong>live countdown timers</strong> 
          for upcoming releases.
        </p>
        <p>
          Features include:
        </p>
        <ul className="text-gray-300 space-y-2 list-disc list-inside">
          <li>Real-time countdowns with progress bars</li>
          <li>Official comic covers</li>
          <li>Daily updates based on DC's release schedule</li>
          <li>No intrusive ads or trackers</li>
        </ul>
        <p>
          Data is sourced from official DC Comics announcements. This project is non-profit and built with passion for the Absolute Universe.
        </p>
        <p className="mt-6">
          <strong>Tech Stack:</strong> Next.js, Tailwind CSS, Vercel.
        </p>
        <p className="text-sm text-gray-500">
          Got questions? Email: <a href="mailto:contact@absolutetimer.dev" className="text-yellow-500 hover:underline">contact@absolutetimer.dev</a>
        </p>
      </div>
    </div>
  );
}