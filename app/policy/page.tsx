// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Absolute Timer",
  description: "Privacy policy for Absolute Timer: No personal data collected, anonymous analytics only.",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-white mb-6">Privacy Policy</h1>
      <div className="prose prose-invert max-w-none text-gray-300 space-y-4">
        {/* HEADER */}
        <p><strong>Effective Date:</strong> {new Date().toLocaleDateString()}</p>
        <p>
          <strong>Website:</strong> Absolute Timer | 
          <strong> URL:</strong> <a href="https://absolutetimer.dev" className="text-yellow-500 hover:underline">https://absolutetimer.dev</a>
        </p>

        {/* INTRODUCTION */}
        <h2>Introduction</h2>
        <p>
          Welcome to <strong>Absolute Timer</strong> (the "Website"), a <strong>fan-made countdown tool</strong> for upcoming <strong>Absolute DC comic releases</strong>.
        </p>
        <p className="font-medium text-yellow-400">
          We are <strong>not affiliated with, endorsed by, or officially connected to DC Comics, Warner Bros., or any of their subsidiaries</strong>. 
          This is a personal project created by Jhon Mario Durango .
        </p>
        <p>
          This Privacy Policy explains how we handle your privacy when you visit our Website. We are committed to transparency and compliance with applicable laws, including:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>General Data Protection Regulation (GDPR)</li>
          <li>California Consumer Privacy Act (CCPA) + California Privacy Rights Act (CPRA)</li>
        </ul>
        <p>By using the Website, you agree to the practices described below. If you do not agree, please do not use the Website.</p>

        {/* DATA COLLECTION */}
        <h2>Data Collection</h2>
        <p>
          <strong>We do not collect any personal data from you.</strong> There are no forms, logins, or registration required to use the countdown timers.
        </p>
        <p>The Website is a static tool for displaying release schedules and live countdowns. No personal information (name, email, IP, etc.) is collected or stored by us.</p>

        {/* COOKIES */}
        <h2>Cookies</h2>
        <p>
          The Website <strong>does not use cookies for tracking or personalization</strong>.
        </p>

        {/* THIRD-PARTY SERVICES */}
        <h2>Third-Party Services</h2>

        <h3>Vercel Analytics (Anonymous)</h3>
        <p>
          We use <strong>Vercel Analytics</strong> to collect <strong>anonymous usage data</strong> (page views, referrers, device type). This data:
        </p>
        <ul className="list-disc list-inside ml-4 space-y-1">
          <li>Is fully anonymized</li>
          <li>Does not include personal information</li>
          <li>Uses no cookies</li>
        </ul>
        <p>
          We have no control over Vercel’s practices. For more information, see their <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Privacy Policy</a>.
        </p>

        <h3>No Ads or Other Third-Party Services</h3>
        <p>
          <strong>Currently, the Website does not display advertisements or integrate with any other third-party services that may collect data.</strong> 
          If ads or additional features are added in the future, this Privacy Policy will be updated accordingly.
        </p>

        {/* SECURITY */}
        <h2>Security</h2>
        <p>
          We implement reasonable technical and organizational measures to protect the Website. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
        </p>

        {/* CHANGES */}
        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy to reflect changes in our practices or legal requirements. The updated version will be posted here with a new "Effective Date." 
          Your continued use of the Website after changes constitutes acceptance of the updated policy.
        </p>

        {/* CONTACT */}
        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>
          <strong>Absolute Timer</strong><br />
          Email: <a href="mailto:contact@absolutetimer.dev" className="text-yellow-500 hover:underline">contact@absolutetimer.dev</a><br />
          Website: <a href="https://absolutetimer.dev" className="text-yellow-500 hover:underline">https://absolutetimer.dev</a>
        </p>

        {/* FINAL DISCLAIMER */}
        <p className="mt-8 text-sm italic text-gray-500 border-t border-gray-700 pt-4">
          <em>
            Absolute Timer is a fan project. All comic titles, characters, and artwork are © DC Comics. 
            This site is not affiliated with DC Comics or Warner Bros.
          </em>
        </p>
      </div>
    </div>
  );
}