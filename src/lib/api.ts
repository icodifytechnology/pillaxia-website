import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1
    }
  }
});

// --- TYPES ---
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  body?: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  imageUrl?: string;
  tags?: string[];
}

export interface PressRelease {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  tab: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organisation: string;
  role: string;
  message: string;
}

// --- FALLBACK DATA ---
const BLOG_IMAGES = [
  'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80',
  'https://images.unsplash.com/photo-1530497610245-b1d01281136d?w=600&q=80',
  'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
  'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80',
  'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80'];


export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'connected-care-reduces-hospitalisation-rates',
    title: 'How Connected Care Reduces Hospitalisation Rates in Chronic Conditions',
    category: 'Chronic Disease Management',
    excerpt:
      'New evidence suggests that platforms bridging clinicians and patients between visits can reduce avoidable hospitalisations by up to 30%. We explore the mechanisms behind this and what it means for health systems.',
    body: `## The Problem With Episodic Care
 
Chronic conditions don't follow appointment schedules. A patient with heart failure, diabetes, or COPD may see their clinician once every three months — but their health changes daily. By the time warning signs surface in a scheduled review, they have often escalated into a crisis.
 
This is the fundamental gap that connected care platforms are designed to close.
 
## What the Evidence Shows
 
A growing body of research points to a consistent finding: patients enrolled in continuous monitoring and engagement programmes have meaningfully better outcomes than those receiving standard episodic care.
 
> "Patients in connected care programmes had 28% fewer emergency admissions compared to matched controls receiving standard care."
 
Key findings from recent studies:
 
- Remote patient monitoring reduces 30-day readmission rates by up to 26%
- Medication adherence improves by 18–22% with digital follow-up
- Clinician workload does not increase when care is well-structured
 
## How Pillaxia Addresses This Gap
 
Pillaxia is designed around the insight that care must be continuous, not episodic.
 
### Continuous Visibility
 
PillaxiaRx gives clinicians a real-time view of patient adherence, symptom changes, and risk flags — without requiring additional appointments. Alerts surface only when action is needed, protecting clinician time while ensuring nothing is missed.
 
### Structured Follow-Up
 
Care plans created at discharge or consultation are shared directly with patients via the Pillaxia app. Medication reminders, symptom check-ins, and follow-up prompts happen automatically.
 
### Shared Care
 
CareHub enables families and caregivers to participate appropriately — seeing what they need to see, contributing where they can, without overstepping clinical boundaries.
 
## What This Means for Health Systems
 
---
 
The downstream effects extend beyond individual patients.
 
1. Reduced A&E attendance from patients whose deterioration was caught early
2. Shorter inpatient stays when admissions do occur
3. More efficient use of outpatient appointment capacity
4. Better data for commissioning and service planning
 
## Conclusion
 
Connected care is not a technology play. It is a care model — one that recognises the reality of chronic illness and responds to it with infrastructure that matches the need. Pillaxia is building that infrastructure.`,
    author: 'Pillaxia Research Team',
    date: '4 March 2026',
    readTime: '6 min read',
    featured: true,
    imageUrl: BLOG_IMAGES[0],
    tags: ['chronic care', 'hospitalisation', 'connected care', 'outcomes'],
  },
  {
    id: '2',
    slug: 'medication-adherence-silent-crisis',
    title: 'Why Medication Adherence Is the Silent Crisis in Chronic Care',
    category: 'Medication Adherence',
    excerpt:
      "Nearly 50% of chronic disease patients don't take medications as prescribed. We look at the root causes — and how connected platforms can help.",
    body: `## A Problem Hidden in Plain Sight
 
Non-adherence to prescribed medication is one of the most significant — and most underacknowledged — challenges in healthcare. Globally, it is estimated that around 50% of patients with chronic conditions do not take their medications as prescribed.
 
The consequences are substantial: preventable hospitalisations, disease progression, and billions in avoidable healthcare spending.
 
> "Non-adherence to medication is responsible for approximately 125,000 deaths and up to 25% of hospitalisations annually in the United States alone."
 
## Why Patients Don't Adhere
 
The reasons are rarely simple. Common barriers include:
 
- Forgetting — particularly for medications taken multiple times daily
- Side effects that patients feel are worse than the condition
- Complexity of regimens involving multiple drugs
- Cost of medications
- Lack of understanding of why medications matter
- Feeling well and believing medication is no longer needed
 
### The Role of Emotional Burden
 
Chronic illness carries significant psychological weight. Depression and anxiety are far more prevalent in patients with long-term conditions — and both are strongly associated with lower adherence. A patient who feels overwhelmed may disengage entirely from their care.
 
## What Connected Care Changes
 
Digital platforms do not solve adherence by nagging patients. The evidence for simple reminder apps is modest at best. What makes a meaningful difference is structured, personalised, empathetic support.
 
Pillaxia addresses adherence through three channels:
 
1. **Angela** — an AI companion that checks in with patients, understands their barriers, and adjusts its approach accordingly
2. **Clinician visibility** — PillaxiaRx surfaces adherence data so clinicians can intervene early
3. **Family involvement** — CareHub allows trusted supporters to play an appropriate role without being intrusive
 
## Conclusion
 
Adherence is not a patient failure. It is a systems failure — one that connected care platforms are uniquely positioned to address.`,
    author: 'Pillaxia Research Team',
    date: '25 February 2026',
    readTime: '5 min read',
    featured: false,
    imageUrl: BLOG_IMAGES[1],
    tags: ['medication adherence', 'chronic disease', 'patient engagement'],
  },
  {
    id: '3',
    slug: 'ai-predicting-patient-risk-chronic-conditions',
    title: 'The Role of AI in Predicting Patient Risk for Chronic Conditions',
    category: 'AI in Healthcare',
    excerpt:
      "Machine learning models are beginning to identify at-risk patients before symptoms escalate. Here's how Pillaxia is exploring predictive care.",
    body: `## From Reactive to Predictive
 
Healthcare has historically been reactive — patients present with a problem, clinicians respond. For acute illness, this model works. For chronic conditions, it is catastrophically inefficient.
 
The promise of AI in healthcare is a shift from reactive to predictive: identifying patients who are likely to deteriorate before they do.
 
## What the Data Shows
 
Chronic disease generates enormous amounts of data — medication records, symptom logs, appointment history, lab results. Most of this data sits in silos, never analysed for patterns that could save lives.
 
Machine learning models trained on longitudinal patient data have demonstrated the ability to:
 
- Predict hospital readmission with up to 80% accuracy
- Identify patients at high risk of medication non-adherence
- Flag early signs of disease progression weeks before clinical presentation
 
> "The most valuable insight is often not what a patient reports — it's the pattern of what they don't report."
 
## How Pillaxia Approaches Predictive Care
 
Pillaxia's platform is designed to accumulate the longitudinal data that makes predictive modelling possible.
 
### Symptom and Adherence Tracking
 
Every interaction a patient has with the Pillaxia app contributes to a growing picture of their health trajectory. Changes in symptom frequency, adherence patterns, or engagement level can be early indicators of deterioration.
 
### Risk Stratification for Clinicians
 
PillaxiaRx surfaces risk scores to clinicians, enabling proactive outreach to high-risk patients before a crisis develops. This is not about replacing clinical judgement — it is about ensuring that judgement is directed where it is most needed.
 
## The Road Ahead
 
We are at the beginning of what AI can do in chronic care. As our dataset grows and models mature, the predictive capability of the Pillaxia platform will deepen. The goal is a system that catches problems before patients even know they have them.`,
    author: 'Pillaxia Research Team',
    date: '18 February 2026',
    readTime: '7 min read',
    featured: false,
    imageUrl: BLOG_IMAGES[2],
    tags: ['AI', 'predictive care', 'machine learning', 'risk stratification'],
  },
  {
    id: '4',
    slug: 'pharmacy-integration-closing-the-last-mile',
    title: 'Pharmacy Integration: Closing the Last Mile in Patient Care',
    category: 'Pharmacy Integration',
    excerpt:
      'Pharmacies are often the most accessible healthcare touchpoint. We explore how integrating them into care networks improves outcomes.',
    body: `## The Untapped Potential of Pharmacy
 
In most communities, pharmacies are the most frequently visited healthcare setting — more so than GP surgeries, clinics, or hospitals. Patients interact with their pharmacist monthly, sometimes weekly. Yet pharmacies are rarely integrated into coordinated care networks.
 
This is a significant missed opportunity.
 
## What Integration Looks Like
 
Pharmacy integration in a connected care model means pharmacies can see:
 
- What medications a patient is prescribed and by whom
- Whether a patient is collecting prescriptions on schedule
- Any flags raised by the clinical team or the patient themselves
 
And contribute:
 
1. Real-time dispensing data back to the clinical team
2. Adherence alerts when a patient misses a collection
3. Medication counselling notes that inform the wider care record
 
> "When a patient stops collecting their blood pressure medication, someone should know. Today, often no one does."
 
## The Role of Pillaxia
 
Pillaxia is building pharmacy integration as a core component of the care network. Through CareHub, pharmacies become active participants in the care loop — not isolated dispensing points.
 
### What This Enables
 
- Earlier identification of adherence problems
- Better coordination between prescribers and dispensers
- Reduced duplicate prescribing and medication errors
- A richer dataset for clinical decision-making
 
## Conclusion
 
The last mile of care — the journey from prescription to patient — has long been invisible to the clinical team. Pharmacy integration makes it visible.`,
    author: 'Pillaxia Research Team',
    date: '10 February 2026',
    readTime: '5 min read',
    featured: false,
    imageUrl: BLOG_IMAGES[3],
    tags: ['pharmacy', 'integration', 'care coordination', 'last mile'],
  },
  {
    id: '5',
    slug: 'building-digital-health-platform-clinicians-use',
    title: 'Building a Digital Health Platform That Clinicians Actually Use',
    category: 'Digital Health',
    excerpt:
      'Adoption is the biggest challenge in health tech. We share our approach to designing tools clinicians want to use every day.',
    body: `## The Adoption Problem
 
Healthcare technology has a graveyard full of well-intentioned platforms that clinicians refused to use. Electronic health records that increased documentation burden. Patient portals that no one logged into. Dashboards that showed everything except what clinicians needed.
 
The failure mode is consistent: platforms built by technologists who didn't deeply understand clinical workflows.
 
## What Clinicians Actually Need
 
Designing for clinicians starts with honest observation of how they work.
 
> "A clinician seeing 25 patients in a morning does not have time to learn a new system. The tool has to fit their workflow — not the other way around."
 
Through extensive clinical engagement, we identified the core principles:
 
- **Zero additional burden** — if it takes more time, it won't be used
- **Actionable signals** — not data dumps, but clear indications of what needs attention
- **Workflow integration** — fits into existing systems, not alongside them
- **Trust** — clinicians must be confident in the accuracy of what they see
 
## How Pillaxia Was Designed
 
Every feature in PillaxiaRx was developed in partnership with clinicians. The interface surfaces only what is actionable. Alerts are calibrated to avoid fatigue. Integration with existing EHR systems means no duplicate data entry.
 
### The Result
 
In pilot settings, clinician adoption rates exceeded 85% within the first month — significantly higher than industry benchmarks for health technology platforms.
 
## The Lesson
 
The best health technology disappears into the background. It makes the right thing easier and the wrong thing harder, without demanding attention it hasn't earned.`,
    author: 'Pillaxia Research Team',
    date: '3 February 2026',
    readTime: '6 min read',
    featured: false,
    imageUrl: BLOG_IMAGES[4],
    tags: ['digital health', 'clinician adoption', 'UX', 'design'],
  },
  {
    id: '6',
    slug: 'care-coordination-reduces-readmission-rates',
    title: 'How Care Coordination Reduces Readmission Rates',
    category: 'Care Coordination',
    excerpt:
      'Fragmented handoffs between providers lead to preventable readmissions. Connected care platforms offer a solution.',
    body: `## The Handoff Problem
 
The most dangerous moment in a patient's care journey is the handoff — when responsibility transfers from one provider to another. From hospital to GP. From specialist to primary care. From inpatient to home.
 
Research consistently shows that breakdowns in communication at these transition points are a leading cause of preventable readmissions.
 
## The Numbers
 
In the UK, up to 20% of hospital readmissions within 30 days are considered preventable. In the US, preventable readmissions cost Medicare alone over $26 billion annually.
 
The common thread in preventable readmissions:
 
1. Incomplete discharge information reaching the GP
2. Patients not understanding their post-discharge care plan
3. Medication changes not clearly communicated
4. No structured follow-up within the first 7 days
 
> "Most readmissions don't happen because of medical failure. They happen because of communication failure."
 
## What Connected Care Changes
 
A connected care platform transforms the discharge process from a handoff into a handshake — an ongoing relationship between the hospital, the community, and the patient.
 
### Structured Discharge Plans
 
Through PillaxiaRx, discharge care plans are created digitally and shared directly with the patient app, the GP, and relevant community providers — simultaneously, at the point of discharge.
 
### Automated Follow-Up
 
The Pillaxia app prompts patients to check in after discharge, flagging any concerning symptoms or adherence issues that may indicate deterioration.
 
### Closed Loop Communication
 
Any alert triggered by a patient after discharge is visible to the appropriate clinical team — ensuring nothing falls through the gaps between providers.
 
## Conclusion
 
Readmission reduction is not primarily a clinical problem. It is a coordination problem. Pillaxia is built to solve it.`,
    author: 'Pillaxia Research Team',
    date: '27 January 2026',
    readTime: '5 min read',
    featured: false,
    imageUrl: BLOG_IMAGES[5],
    tags: ['care coordination', 'readmissions', 'discharge', 'handoffs'],
  },
];

export const FALLBACK_PRESS_RELEASES: PressRelease[] = [
  {
    id: '1',
    date: '3 March 2026',
    category: 'Product Launch',
    title:
      'Pillaxia Launches CareHub — Enabling Shared Chronic Care Coordination Across Ireland',
    excerpt:
      'CareHub brings patients, clinicians, pharmacists, and families into a single care network with role-based access and full auditability.',
    tab: 'Press Releases'
  },
  {
    id: '2',
    date: '10 February 2026',
    category: 'Award',
    title: 'Pillaxia Receives AIBF Business All-Stars Accreditation for 2026',
    excerpt:
      'All-Ireland Business Foundation recognises Pillaxia for innovation, leadership, and contribution to the Irish business landscape.',
    tab: 'Press Releases'
  },
  {
    id: '3',
    date: '20 January 2026',
    category: 'Partnership',
    title:
      'Pillaxia Partners with Leading Irish Pharmacy Chain for Chronic Care Pilot',
    excerpt:
      'A new partnership will see Pillaxia integrated into pharmacy workflows across 50+ locations in Ireland.',
    tab: 'Press Releases'
  },
  {
    id: '4',
    date: '5 January 2026',
    category: 'Company News',
    title: 'Pillaxia Expands Operations to Nigeria',
    excerpt:
      'Pillaxia begins onboarding healthcare partners in Lagos and Abuja as part of its Africa expansion strategy.',
    tab: 'Press Releases'
  },
  {
    id: '5',
    date: '15 December 2025',
    category: 'News',
    title: 'Irish Times: How Pillaxia Is Reimagining Chronic Care',
    excerpt:
      'Feature article exploring Pillaxia approach to connected care infrastructure.',
    tab: 'News & Coverage'
  },
  {
    id: '6',
    date: '1 March 2026',
    category: 'Event',
    title: 'Pillaxia at Health Innovation Summit 2026 — Dublin',
    excerpt:
      'Join us at the Health Innovation Summit to see a live demo of CareHub and meet the team.',
    tab: 'Events'
  }];


// --- HOOKS ---

export function useBlogPosts() {
  return useQuery({
    queryKey: ['blogPosts'],
    queryFn: async (): Promise<BlogPost[]> => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Return fallback data for now
      return FALLBACK_BLOG_POSTS;
    }
  });
}

export function useBlogPost(slug: string) {
  return useQuery({
    queryKey: ['blogPost', slug],
    queryFn: async (): Promise<BlogPost | undefined> => {
      await new Promise((resolve) => setTimeout(resolve, 600));
      return FALLBACK_BLOG_POSTS.find((p) => p.slug === slug);
    },
    enabled: !!slug,
  });
}

export function usePressReleases() {
  return useQuery({
    queryKey: ['pressReleases'],
    queryFn: async (): Promise<PressRelease[]> => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 800));
      // Return fallback data for now
      return FALLBACK_PRESS_RELEASES;
    }
  });
}

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log('Contact form submitted successfully:', data);
      return { success: true };
    }
  });
}