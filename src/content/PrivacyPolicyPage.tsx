'use client'

import { ChevronRight, Shield } from 'lucide-react'
import { Newsletter } from '../components/Newsletter'

export function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-[#252872] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-blue-200">Last updated: January 15, 2024</p>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar TOC */}
          <aside className="lg:w-1/4 hidden lg:block">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-[#252872] mb-4 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-[#d91f22]" /> Contents
              </h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  'Information We Collect',
                  'How We Use Your Information',
                  'Information Sharing',
                  'Data Security',
                  'Cookies and Tracking',
                  'Your Rights',
                  "Children's Privacy",
                  'Changes to This Policy',
                  'Contact Us',
                ].map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-[#d91f22] cursor-pointer flex items-center"
                  >
                    <span className="w-6 text-gray-400 font-mono text-xs">
                      {i + 1}.
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 prose prose-lg max-w-none text-gray-700">
              <p className="lead">
                At GyanSewa, we value your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, and safeguard your data when you
                use our website and services.
              </p>

              <h2 className="text-[#252872]">1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when
                you create an account, enroll in a course, or contact us for
                support. This may include your name, email address, phone
                number, and payment information.
              </p>
              <p>
                We also automatically collect certain information about your
                device and usage of our services, including IP address, browser
                type, and pages visited.
              </p>

              <h2 className="text-[#252872]">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>
                  Send you technical notices, updates, and support messages
                </li>
                <li>Respond to your comments and questions</li>
                <li>Personalize your learning experience</li>
              </ul>

              <h2 className="text-[#252872]">3. Information Sharing</h2>
              <p>
                We do not sell your personal information. We may share your
                information with third-party service providers who help us
                operate our business, such as payment processors and hosting
                services. These providers are obligated to protect your
                information.
              </p>

              <h2 className="text-[#252872]">4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the internet is 100% secure.
              </p>

              <h2 className="text-[#252872]">5. Cookies and Tracking</h2>
              <p>
                We use cookies and similar tracking technologies to track the
                activity on our service and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>

              <h2 className="text-[#252872]">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal
                information. You can manage your account settings directly
                within the platform or contact us for assistance.
              </p>

              <h2 className="text-[#252872]">7. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of
                13. We do not knowingly collect personal information from
                children under 13.
              </p>

              <h2 className="text-[#252872]">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date.
              </p>

              <h2 className="text-[#252872]">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at:
              </p>
              <p className="font-bold text-[#252872]">
                info@gyansewa.edu.np
                <br />
                Kathmandu, Nepal
              </p>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  )
}
