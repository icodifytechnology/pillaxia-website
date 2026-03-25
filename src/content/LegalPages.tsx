'use client';

import React from 'react';
import { AnimatedSection } from '../components/ui/AnimatedSection';

const LegalLayout = ({
  title,
  date,
  children
}: {title: string; date: string; children: React.ReactNode}) =>
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
    <LegalLayout title="Privacy Policy" date="January 2026">
      <p className="text-slate-300 mb-6 leading-relaxed">
        Welcome to Pillaxia. We are committed to protecting the privacy and security of our users'
        information. This Privacy Policy outlines our practices concerning the collection, use, and
        disclosure of your information when you use the Pillaxia app and services. By using our
        services, you agree to the collection and use of information in accordance with this policy.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Information Collection and Use</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        For a better experience while using our service, we may require you to provide us with certain
        personally identifiable information, including but not limited to:
      </p>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>
          <strong className="text-white">Personal Data:</strong> Name, date of birth, contact
          information (such as email address, phone number, and physical address), health information
          relating to your medication regimen, and any other health data you choose to provide us.
        </li>
        <li>
          <strong className="text-white">Usage Data:</strong> This may include information such as
          your device's Internet Protocol address (e.g., IP address), browser type, browser version,
          our service pages that you visit, the time and date of your visit, the time spent on those
          pages, unique device identifiers, and other diagnostic data.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Data Collection Technologies</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        We use cookies and similar tracking technologies to track activity on our service and hold
        certain information. These technologies are used to enhance your experience and gather
        information that helps us improve our service.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Use of Data</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">Pillaxia uses the collected data to:</p>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>Provide and maintain our service</li>
        <li>Notify you about changes to our service</li>
        <li>Allow you to participate in interactive features of our service when you choose to do so</li>
        <li>Provide customer care and support</li>
        <li>Provide analysis or valuable information so that we can improve the service</li>
        <li>Monitor the usage of the service</li>
        <li>Detect, prevent, and address technical issues</li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. Data Sharing and Disclosure</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pillaxia may disclose your personal data in the good faith belief that such action is necessary to:
      </p>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>Comply with a legal obligation</li>
        <li>Protect and defend the rights or property of Pillaxia</li>
        <li>Prevent or investigate possible wrongdoing</li>
        <li>
          Share data with third-party service providers or business partners who assist in delivering
          the service, such as data analysis, payment processing, providing customer support, or
          conducting clinical research
        </li>
        <li>For scientific research purposes</li>
        <li>
          To address emergencies, such as situations that could threaten the life or safety of a person
        </li>
        <li>
          For public health activities, including preventing or controlling disease, injury, or
          disability, under the guidance of health authorities
        </li>
        <li>In the event of a merger, acquisition, or sale of all or a portion of its assets</li>
        <li>
          Sharing data that has been de-identified or anonymized, meaning it cannot reasonably be
          used to identify an individual
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Data Storage & Protection</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia stores all personal and health-related data on secure, encrypted servers. We employ
        industry-standard data storage solutions that comply with applicable healthcare regulations to
        ensure data integrity and security. Data is backed up regularly to prevent data loss. We
        implement robust security measures to protect your data from unauthorized access, alteration,
        disclosure, or destruction. These measures include the use of encryption technologies during
        data transfer, firewalls, secure server facilities, and stringent access controls on who can
        see and use the information. We continually assess new technologies for protecting information
        and upgrade our systems when appropriate.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. User Rights</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pillaxia recognises and supports the following user rights regarding personal data:
      </p>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>
          <strong className="text-white">Right to Access:</strong> You have the right to access your
          personal information to verify the legality of our use of it. You can request a copy of
          your personal data.
        </li>
        <li>
          <strong className="text-white">Right to Correct:</strong> You are entitled to correct any
          inaccuracies in your personal data.
        </li>
        <li>
          <strong className="text-white">Right to Erasure:</strong> Also known as the 'right to be
          forgotten,' you may request the deletion of your personal data when it is no longer
          necessary for us to retain it.
        </li>
        <li>
          <strong className="text-white">Right to Restrict Processing:</strong> You can request that
          we restrict the processing of your personal data, under certain conditions.
        </li>
        <li>
          <strong className="text-white">Right to Object to Processing:</strong> You have the right
          to object to how we process your personal data, under certain conditions.
        </li>
        <li>
          <strong className="text-white">Right to Data Portability:</strong> You can request that we
          transfer the data that we have collected to another organization, or directly to you, under
          certain conditions.
        </li>
      </ul>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia is committed to facilitating these rights efficiently and without undue delay.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Cookies and Tracking Technologies</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pillaxia uses cookies and similar tracking technologies to track the activity on our service
        and hold certain information. We use these technologies for several purposes:
      </p>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>
          <strong className="text-white">Essential Cookies:</strong> Necessary for the website to
          function and cannot be switched off in our systems.
        </li>
        <li>
          <strong className="text-white">Performance and Analytics Cookies:</strong> Allow us to
          count visits and traffic sources so we can measure and improve the performance of our site.
        </li>
        <li>
          <strong className="text-white">Functional Cookies:</strong> Enable the website to provide
          enhanced functionality and personalization.
        </li>
        <li>
          <strong className="text-white">Advertising Cookies:</strong> May be set through our site
          by our advertising partners to build a profile of your interests and show you relevant
          adverts on other sites.
        </li>
        <li>
          <strong className="text-white">Security Cookies:</strong> Used to authenticate users and
          protect user data from unauthorized parties.
        </li>
        <li>
          <strong className="text-white">Customisation Cookies:</strong> Help Pillaxia store
          preferences set by users such as account name, language, and location, to provide
          personalized content and enhance the user experience.
        </li>
      </ul>
      <p className="text-slate-300 mb-6 leading-relaxed">
        You can manage your cookie preferences through your browser settings.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. International Data Transfers</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia is based and operates exclusively in Ireland. All personal data collected by Pillaxia
        is stored on servers located within Ireland. The data we collect from our users is processed
        and stored locally in accordance with Irish data protection laws, which adhere to the strict
        standards set by the European Union's General Data Protection Regulation (GDPR). Currently,
        we do not transfer user data internationally or outside of Ireland.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Data Retention</h2>
      <p className="text-slate-300 mb-4 leading-relaxed">
        Pillaxia retains personal data for operational, legal, and audit purposes for as long as is
        necessary for the purposes set out in this Privacy Policy. The following are the specific
        retention periods for different categories of data:
      </p>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>
          <strong className="text-white">User Personal and Health Data:</strong> Retained for the
          duration of the user's active engagement with the app plus a standard period of 5 years
          post the last interaction to comply with healthcare regulatory requirements.
        </li>
        <li>
          <strong className="text-white">System Logs and Operational Data:</strong> Retained for
          the duration of the user's active engagement with the app, and no longer than one year post
          the last interaction, except in cases where longer retention is required for security
          investigations or regulatory compliance.
        </li>
        <li>
          <strong className="text-white">Financial Transactions and Billing Information:</strong>{' '}
          Retained for 7 years to comply with tax and accounting legal requirements.
        </li>
        <li>
          <strong className="text-white">Customer Service Records:</strong> Retained for 3 years to
          accommodate potential claims and queries.
        </li>
      </ul>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Upon the expiry of the retention periods, data shall be permanently deleted from all storage
        media. Where deletion is technically infeasible, data will be securely anonymized to prevent
        identification of individuals.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Children's Privacy</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia recognizes the importance of protecting the privacy and safety of children,
        especially when it comes to their personal health data. Pillaxia does not knowingly collect
        any personal information from children under the age of consent without the consent of the
        child's parent or guardian. Before collecting, using, or disclosing personal information from
        a child, Pillaxia requires verified parental consent. Parents or guardians are given full
        control over the information provided by and about their child, including the rights to review
        the child's personal information, request deletion, and refuse further collection or use of
        the child's information.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to the Privacy Policy</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia reserves the right to amend this policy as required. Should our operational scope
        change in the future, we will update this policy accordingly and implement all necessary
        safeguards to ensure that your personal data remains protected in compliance with applicable
        data protection laws.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">12. Contact Information</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        For questions or concerns about our privacy practices, or to review, update, or delete you or
        your child's personal information, please contact our Data Protection Officer at{' '}
        <a href="mailto:connect@pillaxia.com" className="text-[#3b9eff] hover:underline">
          connect@pillaxia.com
        </a>.
      </p>
    </LegalLayout>
  );
}

export function TermsPage() {
  return (
    <LegalLayout title="Terms & Conditions" date="January 2026">
      <p className="text-slate-300 mb-6 leading-relaxed">
        Welcome to Pillaxia! These Terms and Conditions form an agreement between you (the user) and
        Pillaxia (the "Service") regarding your use of the Pillaxia app and associated services,
        which leverage advanced AI technology to help you manage your medication regimen. By accessing
        or using Pillaxia in any way, you agree to comply with these Terms and Conditions. If you do
        not agree to all of these terms, you are not authorized to use the service.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. Service Description</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia provides an innovative application that utilizes artificial intelligence to offer
        personalized medication management services. This includes setting reminders for medication
        intake, tracking your medication usage, and providing you with health-related information
        based on your input. Our service is designed to help you manage your health better but is not
        intended to replace professional medical advice or treatment from qualified healthcare
        providers. Users are encouraged to consult health professionals for any medical concerns.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Eligibility</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        You must be at least 18 years of age to access and use Pillaxia, or if you are under 18, you
        must have permission and be directly supervised by a parent or guardian who agrees to be bound
        by these Terms. By using Pillaxia, you represent and warrant that you have the right,
        authority, and capacity to enter into these Terms and to abide by all of the terms and
        conditions set forth herein. The service is not available to persons whose access has been
        previously terminated or suspended by Pillaxia.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. User Responsibilities</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        As a user of Pillaxia, you are responsible for maintaining the confidentiality of your account
        information, including your password, and for all activities that occur under your account.
        You agree to immediately notify Pillaxia of any unauthorized use of your account or password
        or any other breach of security. You may not use anyone else's ID, password, or account at
        any time without the express permission and consent of the holder of that ID, password, or
        account. Pillaxia cannot and will not be liable for any loss or damage arising from your
        failure to comply with these obligations.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">4. AI Ethics and Usage</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia's AI, Angela, operates within the strictest ethical standards, ensuring respect for
        user privacy and unbiased decision-making processes. Angela is designed to assist users by
        providing information and reminders based on the data users have entered into the app. It is
        crucial that users provide accurate and current information to facilitate effective assistance.
        Misuse or manipulation of Angela's functionalities can lead to suboptimal performance and is
        strictly prohibited.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">5. Privacy and Data Protection</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Your privacy is critically important to us. Pillaxia adheres to the highest standards of data
        protection laws applicable in the jurisdictions in which it operates, including compliance
        with the General Data Protection Regulation (GDPR) for users in the European Union. Personal
        data collected by Pillaxia is processed only as necessary for the provision of our services
        and is never sold or shared without consent, except as required by law. Please refer to our
        Privacy Policy for detailed information on how we collect, use, and protect your data.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">6. Intellectual Property</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        The content provided through Pillaxia, including all information, tools, graphics, and images,
        is owned by or licensed to Pillaxia and is protected by copyright and intellectual property
        laws. Unauthorized use of any content that appears on Pillaxia without express written
        permission from us is a violation of copyright laws and may result in legal action.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">7. Limitation of Liability</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia makes no representations or warranties of any kind, express or implied, as to the
        operation of the service or the information, content, materials, or products included on the
        service. You expressly agree that your use of the service is at your sole risk. Under no
        circumstances shall Pillaxia, its officers, directors, employees, or agents be liable for any
        direct, indirect, punitive, incidental, special, or consequential damages that result from the
        use of or inability to use this service. This limitation applies whether the alleged liability
        is based on contract, tort, negligence, strict liability, or any other basis, even if Pillaxia
        has been advised of the possibility of such damage.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">8. Modifications to the Service</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia reserves the right to make changes to the services, website, policies, and these
        Terms and Conditions at any time without prior notice. If Pillaxia decides to change these
        Terms and Conditions, we will post the revised Terms and Conditions on the app and update the
        "Last Modified" date to reflect the date of the changes. By continuing to use Pillaxia after
        we post any such changes, you accept the new Terms and Conditions with the modifications.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">9. Termination</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Pillaxia may terminate your access to the app or your account with immediate effect if you
        breach any of these terms, misuse the service, or if we reasonably suspect that you have
        breached the terms. Upon termination, your right to use the service will cease immediately,
        and you must cease all use of the service. The termination may also include the deletion of
        your account and all related information, files, and content associated with or inside your
        account.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">10. Governing Law</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        These Terms and Conditions and any dispute or claim arising out of or in connection with them
        or their subject matter or formation (including non-contractual disputes or claims) are
        governed by and construed in accordance with the laws of [Your Country/State].
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">11. Changes to Terms</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time.
        If a revision is material, we will provide at least 30 days' notice prior to any new terms
        taking effect. What constitutes a material change will be determined at our sole discretion.
        For any questions about these Terms and Conditions, please contact us via email at{' '}
        <a href="mailto:connect@pillaxia.com" className="text-[#3b9eff] hover:underline">
          connect@pillaxia.com
        </a>
        , or via our website at{' '}
        <a href="https://pillaxia.com" className="text-[#3b9eff] hover:underline">
          pillaxia.com
        </a>.
      </p>
    </LegalLayout>
  );
}

export function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" date="January 2025">
      <h2 className="text-2xl font-bold text-white mt-8 mb-4">1. What Are Cookies</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Cookies are small text files that are placed on your computer or mobile device when you visit
        a website. They are widely used to make websites work more efficiently and provide information
        to the owners of the site.
      </p>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">2. Types of Cookies Used</h2>
      <ul className="list-disc pl-6 text-slate-300 mb-6 space-y-2">
        <li>
          <strong className="text-white">Essential Cookies:</strong> Necessary for the website to
          function and cannot be switched off in our systems.
        </li>
        <li>
          <strong className="text-white">Performance and Analytics Cookies:</strong> Allow us to
          count visits and traffic sources so we can measure and improve the performance of our site.
        </li>
        <li>
          <strong className="text-white">Functional Cookies:</strong> Enable the website to provide
          enhanced functionality and personalization.
        </li>
        <li>
          <strong className="text-white">Advertising Cookies:</strong> May be set through our site
          by our advertising partners to build a profile of your interests and show you relevant
          adverts on other sites.
        </li>
        <li>
          <strong className="text-white">Security Cookies:</strong> Used to authenticate users and
          protect user data from unauthorized parties.
        </li>
        <li>
          <strong className="text-white">Customisation Cookies:</strong> Help Pillaxia store
          preferences set by users such as account name, language, and location, to provide
          personalized content and enhance the user experience.
        </li>
      </ul>

      <h2 className="text-2xl font-bold text-white mt-8 mb-4">3. Managing Cookies</h2>
      <p className="text-slate-300 mb-6 leading-relaxed">
        Most web browsers allow some control of most cookies through the browser settings. To find
        out more about cookies, including how to see what cookies have been set, visit{' '}
        <a
          href="https://www.aboutcookies.org"
          className="text-[#3b9eff] hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          www.aboutcookies.org
        </a>.
      </p>
    </LegalLayout>
  );
}