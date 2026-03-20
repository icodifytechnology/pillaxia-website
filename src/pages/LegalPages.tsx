import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';
const LegalLayout = ({
  title,
  date,
  children




}: {title: string;date: string;children: React.ReactNode;}) =>
<main className="pt-32 pb-20 mesh-dark min-h-screen relative">
    <div className="absolute top-0 left-0 right-0 neon-line" />
    <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
      <AnimatedSection>
        <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-[#3b9eff] mb-12">Last updated: {date}</p>
        <div className="prose prose-slate prose-invert max-w-none text-slate-300">
          {children}
        </div>
      </AnimatedSection>
    </div>
  </main>;

export function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" date="January 2025">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        1. Information We Collect
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        We collect information that you provide directly to us, including
        personal information such as your name, email address, and professional
        credentials when you register for an account. For patients, we also
        collect health-related data as inputted by you or your healthcare
        provider.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        2. How We Use Information
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        We use the information we collect to provide, maintain, and improve our
        services, to process transactions, to send you related information, and
        to monitor and analyze trends, usage, and activities in connection with
        our services.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        3. Data Sharing
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        We share patient data only with authorized healthcare providers and
        family members as explicitly permitted by the patient. We do not sell
        personal information to third parties.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        4. Data Security
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        We implement appropriate technical and organizational measures to
        protect the security of your personal information. However, please note
        that no system is completely secure.
      </p>
    </LegalLayout>);

}
export function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" date="January 2025">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Acceptance</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        By accessing or using the Pillaxia platform, you agree to be bound by
        these Terms of Service and all applicable laws and regulations.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Services</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia provides a connected care infrastructure. We are a technology
        provider, not a healthcare provider. Our services do not replace
        professional medical advice, diagnosis, or treatment.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        3. User Accounts
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        You are responsible for safeguarding the password that you use to access
        the service and for any activities or actions under your password.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        4. Acceptable Use
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        You agree not to misuse the services or help anyone else do so. You must
        not use the services to do anything unlawful, misleading, or fraudulent.
      </p>
    </LegalLayout>);

}
export function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" date="January 2025">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        1. What Are Cookies
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Cookies are small text files that are placed on your computer or mobile
        device when you visit a website. They are widely used to make websites
        work more efficiently and provide information to the owners of the site.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        2. Types of Cookies Used
      </h2>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>
          <strong className="text-white">Essential Cookies:</strong> Required
          for the operation of our platform.
        </li>
        <li>
          <strong className="text-white">Analytics Cookies:</strong> Help us
          understand how visitors interact with our website.
        </li>
        <li>
          <strong className="text-white">Functional Cookies:</strong> Used to
          recognize you when you return to our website.
        </li>
        <li>
          <strong className="text-white">Marketing Cookies:</strong> Used to
          track visitors across websites to display relevant ads.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">
        3. Managing Cookies
      </h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Most web browsers allow some control of most cookies through the browser
        settings. To find out more about cookies, including how to see what
        cookies have been set, visit www.aboutcookies.org.
      </p>
    </LegalLayout>);

}