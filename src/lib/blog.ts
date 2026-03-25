// ─── Types ────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: string
  slug: string
  title: string
  category: string
  excerpt: string
  body: string
  author: string
  date: string
  readTime: string
  featured: boolean
  imageUrl: string
  tags: string[]
}

/**
 * Inline image tokens used inside body strings.
 * Format: a line containing only  img:<key>
 * BlogDetailPage reads this map to render a next/image block.
 */
export interface InlineImageMeta {
  src: string
  alt: string
  width: number
  height: number
}

export const INLINE_IMAGES: Record<string, InlineImageMeta> = {
  'img:pillaxia-angela':      { src: '/blogs/2.png',                     alt: 'Pillaxia & Angela AI Health Companion',          width: 235, height: 361 },
  'img:ai-discovery':         { src: '/blogs/ai-discovery.jpg',          alt: 'AI and Drug Discovery',                         width: 900, height: 350 },
  'img:medication-sharing-1': { src: '/blogs/medication-sharing-1.jpg',  alt: 'Medication sharing illustration',                width: 800, height: 400 },
  'img:medication-sharing-2': { src: '/blogs/medication-sharing-2.jpg',  alt: 'Everyday medication sharing scenarios',          width: 800, height: 400 },
  'img:relationship-stress':  { src: '/blogs/relationship-stress.png',   alt: 'Couple managing medication together',            width: 900, height: 400 },
  'img:care-hub':             { src: '/blogs/care-hub.png',              alt: 'Care Hub interface showing shared medication',   width: 900, height: 400 },
}

// ─── Image paths ──────────────────────────────────────────────────────────────

const IMG = {
  connectedCare:    '/blogs/connected-care.jpg',
  adherence:        '/blogs/1.png',
  aiMedicine:       '/blogs/ai-in-medicine.jpg',
  medicationSharing:'/blogs/medication-sharing.jpg',
  digitalHealth:    '/blogs/digital-health.jpg',
  careCoordination: '/blogs/care-coordination.jpg',
  valentines:       '/blogs/relationship-stress.png',
} as const

// ─── Full blog bodies ─────────────────────────────────────────────────────────

const BODY_MEDICATION_ADHERENCE = `## Introduction

Every year, people are prescribed a vast amount of medication to keep their health and that of their loved ones intact. Millions of people around the world skip or forget their doses. According to the World Health Organisation (WHO), roughly 50% of patients do not take their medication as prescribed or on time. The result? Preventable hospital visits, unnecessary healthcare costs, and worse health outcomes for patients and their families.

## Why Medication Adherence Matters

Medical adherence is simply how closely someone follows their medical regimen — timing, doses and frequency. Non-adherence isn't just a minor issue; it is estimated to cost the EU approximately €125 billion annually and is associated with higher rates of hospitalisations and complications.

## Why do people forget or skip medication

- **Busy schedules:** Many patients manage multiple prescriptions, which often leads to difficulty keeping track of their medication schedule.
- **Memory issues:** Common in older adults.
- **Side effects & frustration:** Patients stop on their own if they feel worse.
- **Lack of support:** Caregivers are often overwhelmed.

## Digital solutions are changing the game

Apps and smart reminders are stepping in to reduce this burden. But most of the tools are either too basic or too fragmented.

## Introducing Pillaxia & Angela — Your AI Health Companion

img:pillaxia-angela

- Personalised medication reminders
- Symptom tracking and progress logging
- Care Hub shares medication schedules, stores medical history, and provides access to 2000+ expert insights with your family, caregivers, or healthcare providers for €50 per year
- Hands-free assistance, encouragement, and guidance

## Conclusion & Call to Action

Medication adherence doesn't have to be a silent crisis. With the right tools, patients and caregivers can save time, stress, and money while improving health outcomes.`

const BODY_AI_IN_MEDICINE = `## Introduction

Today's healthcare system grapples with three significant hurdles: patients frequently struggle to stick to their medication plans; treatments often lack the personal touch needed for individual patients; and the process of discovering new drugs is both slow and costly. Enter artificial intelligence (AI), which holds the potential to tackle all these issues.

## AI in Personalized Medication Management

When we talk about personalized medication management, it's about more than just tweaking dosages. It's about diving deep into a patient's history, genetics, lifestyle, existing health conditions, and behavior patterns to create the most effective treatment plans. This could involve:

- Anticipating which medications will work best for a patient.
- Modifying schedules and dosages based on side effects or daily habits.
- Sending proactive reminders or alerts when lab results or behaviors indicate potential risks.

Studies show that AI-based tools can boost medication adherence rates by up to **6.7%** compared to usual care — a meaningful improvement leading to fewer hospital visits and better long-term outcomes.

## AI-Powered Medication Adherence Tools

- Smart reminders through voice, push notifications, and wearable alerts.
- Symptom and side effect monitoring with predictive alerts.
- Dashboards for caregivers and clinicians to track adherence.
- Chatbots or voice assistants that answer common medication questions and offer motivation.

A 2024 review highlighted that AI-based interventions can reduce self-medication errors and improve adherence by up to **32.7%**. Among elderly diabetic patients, AI-assisted monitoring improved adherence by 30% and reduced hospitalizations by 25%.

## AI and Drug Discovery: Speeding the Pipeline

img:ai-discovery

Traditional drug discovery takes 10–14 years and costs billions. AI-driven biotech firms are cutting that to 12–18 months for preclinical candidate nominations. AI models scan millions of compounds, simulate trial responses, and guide dosage and inclusion criteria — preventing costly missteps.

The global AI-in-drug-discovery market is projected to grow from USD 4–5 billion in 2025 to USD 18–20 billion by 2030 — a CAGR of nearly 30%.

## Challenges & Ethical Considerations

- **Data Quality & Bias:** AI's accuracy depends on diverse, high-quality datasets.
- **Regulation & Approval:** AI tools must pass rigorous clinical and ethical standards.
- **Privacy & Security:** Sensitive health data must be safeguarded.
- **Overreliance on Tech:** AI should support, not replace, human care.

## What This Means for Pillaxia

- Use AI to predict adherence challenges and send timely alerts.
- Analyze symptom and medication data to optimize schedules.
- Provide educational insights to users about their health trends.
- Equip caregivers and clinicians with intuitive dashboards for real-time insights.

## Conclusion

AI is transforming medicine — making care personal, adherence stronger, and discovery faster. Stay informed, talk to your care team, and explore how AI can improve your health journey.`

const BODY_MEDICATION_SHARING = `## Introduction

In today's complex healthcare landscape, managing medications has become a significant challenge for patients, families, and healthcare providers alike. The solution lies in Pillaxia, which does not isolate this information but shares it responsibly. This article provides a comprehensive overview of the three essential pillars for secure medication sharing: **Permissions**, **Alerts**, and **Audit Trails**.

## Medication sharing basics: what it is, who needs it, and how it protects safety

img:medication-sharing-1

Traditional medication management often operates in silos. A patient might have a paper list, a primary care physician has a record in their Electronic Health Record (EHR), a specialist has another, and the pharmacy has its own dispensing history. This fragmented approach is fraught with risk.

## Understanding Medication Sharing: A Cornerstone of Integrated Care With Pillaxia

Medication sharing refers to the secure and timely exchange of a patient's comprehensive medication information among all relevant stakeholders. The ultimate goal is to establish a **"single source of truth"** — a verified, up-to-date, and readily accessible record that reflects all medications a patient is actively taking.

- **Medication Errors:** Without a singular, accessible record, the potential for medication errors escalates dramatically.
- **Adverse Drug Interactions:** When one clinician is unaware of a medication prescribed by another, the risk of a dangerous interaction increases significantly.
- **Poor Adherence:** Patients may forget doses, become confused by complex schedules, or discontinue medications prematurely.
- **Lack of Visibility:** Informal caregivers and family members often serve as the frontline managers of a patient's health, yet frequently operate with incomplete information.

## Everyday scenarios: parents, adult caregivers, clinicians, and schools

img:medication-sharing-2

The complexities of modern healthcare often involve multiple caregivers and various settings, leading to potential gaps in medication management.

1. Parents managing a child's asthma plan can view and track both controller and rescue inhaler schedules and refill dates, shared with the school nurse for accurate midday dose administration.
2. If a medication dose is not logged as taken within a specified window, the platform sends an immediate alert to both the patient and designated caregivers.
3. An adult child can gain shared access to a parent's heart medication regimen, allowing them to remotely monitor morning doses before starting their workday.
4. The system intelligently tracks medication pill counts and automatically dispatches reminders when prescriptions are nearing depletion.
5. Caregivers can receive simple, non-intrusive notifications confirming that their loved one has self-administered their medication as scheduled.
6. For patients requiring multiple caregivers, logging each administration into Pillaxia or CareHub ensures real-time visibility and prevents dangerous duplicate dosing.
7. Clinicians can review comprehensive medication logs, easily spotting patterns such as several missed nighttime doses, to proactively adjust treatment.

## Who Should See What: Permissions

1. **View-only:** Stay informed and add notes.
2. **Edit:** Manage schedules and log side effects.
3. **Approve:** Clinicians and pharmacists authorize changes.
4. **School Staff:** Document doses, no edits allowed.

## Privacy and consent, made simple

- Consent means the person whose meds are being managed chooses who can see or do what.
- Adults can grant proxy access to spouses, children, and caregivers. Teen access may vary by state or country.
- Make revoking access simple and obvious.
- Keep transparency high — patients should be able to see who accessed their meds list and when.

## Alerts, reminders, and audit trails that keep everyone in sync

- **Dose reminders:** simple yes-or-snooze interface.
- **Refill alerts:** at a set threshold (e.g., one week before running out).
- **Interaction alerts:** one-time alert when a new med is added, rather than constant pings.
- **Missed-dose escalation:** notify the caregiver if a dose isn't logged.
- **Respect quiet hours:** avoid alerting during rest or night unless clinically urgent.
- **Monitor alert fatigue:** reduce or adjust alerts if alerts aren't acted upon.

## Conclusion

Clear permissions, smart alerts, and solid audit trails reduce confusion, improve safety, and ease caregiver burden. When the right people see the right information at the right time, doses get taken, refills don't slip, and everyone sleeps better.

With AI in medication management, we are moving beyond conventional methods to offer solutions that are not only technologically advanced but also deeply empathetic and user-friendly.`

const BODY_VALENTINES = `> "Valentine's Day is a celebration of love, connection, and being present with those who matter most. However, for millions of people managing chronic conditions or caring for loved ones, the romantic ideal often clashes with the rigid reality of medication schedules. Nothing disrupts a candlelit dinner quite like the panic of realizing you missed a dose. At Pillaxia, we believe that managing your health shouldn't require you to sacrifice your peace of mind or your personal life."

## The Invisible Third Wheel: Managing Health in Relationships

img:relationship-stress

For many couples, a chronic health condition acts as an invisible third wheel. The mental load of medication adherence — remembering dosages, refill dates, and timing — can create unspoken stress. When a partner has to constantly remind their loved one to take their medicine, the dynamic can shift from romantic to custodial.

This 'nagging' friction is exactly what Pillaxia aims to eliminate. By offloading the responsibility of remembering to our intuitive mobile platform, you reclaim your role as a partner. Whether you are planning a night out or a cozy evening in, knowing that your health management is automated allows you to be fully present in the moment.

> Managing chronic illness shouldn't mean sacrificing intimacy and spontaneity in your relationship.

## Meet Angela: Your AI Wingwoman for Health

Imagine having a personal assistant dedicated solely to your well-being, one who never sleeps and always remembers the details. Enter **Angela**, Pillaxia's AI-powered intelligent assistant. Angela isn't just a notification system; she is a voice-enabled companion designed to make health management feel human.

Her supportive, conversational tone turns a clinical task into a simple interaction, ensuring you stay on track without disrupting the flow of your evening. With Angela handling the logistics, you are free to focus on the romance:

- 🗣️ **Voice Commands:** "Hey Angela, did I take my evening meds?"
- 📝 **Easy Logging:** "Angela, log a headache side effect."

## The Care Hub: Love Means Sharing (the Right) Data

img:care-hub

True partnership involves supporting each other, but there is a fine line between support and micromanagement. The Pillaxia **Care Hub** facilitates this balance by allowing seamless data sharing between patients, caregivers, and medical teams.

- Share progress without sharing stress
- Enable support without surveillance
- Build trust through transparency

This Valentine's Day, give your partner the gift of peace of mind. Through the Care Hub, your designated loved ones can receive reassurance that you are adhering to your treatment plan without having to ask.

## Self-Love is the Best Love: Adherence as Self-Care

Valentine's Day isn't just about couples; it's a reminder to practice self-love. Adhering to your medication regimen is one of the most profound ways you can care for yourself.

> "Taking care of yourself is the foundation of all healthy relationships — including the one you have with yourself."

## Commonly Asked Questions

### How does Pillaxia help reduce medication anxiety?

Pillaxia reduces anxiety by acting as a reliable external memory. With features like personalized reminders and the intelligent assistant 'Angela,' users no longer have to worry about forgetting a dose or double-dosing. The app tracks everything in real-time, providing immediate reassurance.

### Can I share my medication adherence with my partner using Pillaxia?

Yes, through the Pillaxia 'Care Hub.' This feature allows you to securely share your medication logs and health updates with caregivers or partners. It keeps them informed and reassured without the need for constant verbal check-ins, reducing relationship friction.

### Is the 'Angela' AI assistant difficult to use for non-tech-savvy individuals?

Not at all. Angela is designed to be accessible and intuitive. She uses natural language processing, meaning you can talk to her just like you would a human. The goal is to make complex health management simple and seamless for everyone, regardless of technical skill.

### Does Pillaxia track symptoms alongside medication?

Yes, Pillaxia is an all-in-one platform that includes a symptom and side-effect tracker. This allows you to correlate how you feel with the medications you take, providing valuable data that can be shared with your healthcare professional to optimize your treatment.

## In Summary

This Valentine's Day, let love be the focus, not logistics. Pillaxia is more than just an app; it is a compassionate partner in your health journey, dedicated to simplifying the complex and empowering you to live fully. Whether it is through Angela's voice guidance or the reassurance provided by the Care Hub, our technology is here to support you.`

// ─── Fallback posts ───────────────────────────────────────────────────────────
// These are served when the API is unavailable.
// body is the full rich markdown string (including img: tokens) so
// BlogDetailPage can just render post.body directly — no override map needed.

export const FALLBACK_BLOG_POSTS: BlogPost[] = [
  {
    id: 'l1',
    slug: 'medication-adherence-crisis',
    title: 'Medication Adherence: The Hidden Health Crisis',
    category: 'Medication Adherence',
    excerpt: "50% of patients don't take their meds correctly. Learn why it matters and how Pillaxia's AI can solve medication adherence.",
    body: BODY_MEDICATION_ADHERENCE,
    author: 'Pillaxia Research Team',
    date: '25 September 2025',
    readTime: '5 min read',
    featured: false,
    imageUrl: IMG.adherence,
    tags: ['medication adherence', 'AI', 'digital health'],
  },
  {
    id: 'l2',
    slug: 'ai-in-medicine',
    title: 'How AI Is Reshaping Medicine: Personalized Management, Better Adherence & Faster Discovery',
    category: 'AI in Healthcare',
    excerpt: 'Discover how AI is customizing treatments, boosting medication adherence, and speeding up drug discovery.',
    body: BODY_AI_IN_MEDICINE,
    author: 'Pillaxia Research Team',
    date: '12 October 2025',
    readTime: '7 min read',
    featured: false,
    imageUrl: IMG.aiMedicine,
    tags: ['AI', 'personalized care', 'drug discovery', 'HealthTech'],
  },
  {
    id: 'l3',
    slug: 'medication-sharing',
    title: 'Medication Sharing for Families, Caregivers, and Clinicians',
    category: 'Care Coordination',
    excerpt: 'Learn how secure medication sharing with permissions, alerts, and audit trails improves safety, coordination, and peace of mind.',
    body: BODY_MEDICATION_SHARING,
    author: 'Pillaxia Research Team',
    date: '18 December 2025',
    readTime: '8 min read',
    featured: false,
    imageUrl: IMG.medicationSharing,
    tags: ['medication sharing', 'CareHub', 'caregivers', 'clinicians'],
  },
  {
    id: 'l4',
    slug: 'reclaiming-romance-pillaxia-valentines-day',
    title: "Reclaiming Romance: How Pillaxia Simplifies Medicine Management for a Stress-Free Valentine's Day",
    category: 'Lifestyle & Health',
    excerpt: "Don't let medication schedules kill the mood this Valentine's Day. Discover how Pillaxia and Angela manage your health so you can focus on love.",
    body: BODY_VALENTINES,
    author: 'Pillaxia Research Team',
    date: '14 February 2026',
    readTime: '6 min read',
    featured: false,
    imageUrl: IMG.valentines,
    tags: ['lifestyle', 'relationships', 'Angela', 'CareHub'],
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return FALLBACK_BLOG_POSTS.find((p) => p.slug === slug)
}

export function getFeaturedPost(): BlogPost | undefined {
  return FALLBACK_BLOG_POSTS.find((p) => p.featured)
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  return FALLBACK_BLOG_POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      (p.category === post.category || p.tags.some((t) => post.tags.includes(t)))
  ).slice(0, limit)
}