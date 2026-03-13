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
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  featured: boolean;
  imageUrl?: string;
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
'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&q=80',
'https://images.unsplash.com/photo-1530497610245-b1d01281136d?w=600&q=80',
'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80',
'https://images.unsplash.com/photo-1576671081837-49000212a370?w=600&q=80',
'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=600&q=80'];


const FALLBACK_BLOG_POSTS: BlogPost[] = [
{
  id: '1',
  title:
  'How Connected Care Reduces Hospitalisation Rates in Chronic Conditions',
  category: 'Chronic Disease Management',
  excerpt:
  'New evidence suggests that platforms bridging clinicians and patients between visits can reduce avoidable hospitalisations by up to 30%. We explore the mechanisms behind this and what it means for health systems.',
  author: 'Pillaxia Research Team',
  date: '4 March 2026',
  readTime: '6 min read',
  featured: true,
  imageUrl: BLOG_IMAGES[0]
},
{
  id: '2',
  title: 'Why Medication Adherence Is the Silent Crisis in Chronic Care',
  category: 'Medication Adherence',
  excerpt:
  "Nearly 50% of chronic disease patients don't take medications as prescribed. We look at the root causes — and how connected platforms can help.",
  author: 'Pillaxia Research Team',
  date: '25 February 2026',
  readTime: '5 min read',
  featured: false,
  imageUrl: BLOG_IMAGES[1]
},
{
  id: '3',
  title: 'The Role of AI in Predicting Patient Risk for Chronic Conditions',
  category: 'AI in Healthcare',
  excerpt:
  "Machine learning models are beginning to identify at-risk patients before symptoms escalate. Here's how Pillaxia is exploring predictive care.",
  author: 'Pillaxia Research Team',
  date: '18 February 2026',
  readTime: '7 min read',
  featured: false,
  imageUrl: BLOG_IMAGES[2]
},
{
  id: '4',
  title: 'Pharmacy Integration: Closing the Last Mile in Patient Care',
  category: 'Pharmacy Integration',
  excerpt:
  'Pharmacies are often the most accessible healthcare touchpoint. We explore how integrating them into care networks improves outcomes.',
  author: 'Pillaxia Research Team',
  date: '10 February 2026',
  readTime: '5 min read',
  featured: false,
  imageUrl: BLOG_IMAGES[3]
},
{
  id: '5',
  title: 'Building a Digital Health Platform That Clinicians Actually Use',
  category: 'Digital Health',
  excerpt:
  'Adoption is the biggest challenge in health tech. We share our approach to designing tools clinicians want to use every day.',
  author: 'Pillaxia Research Team',
  date: '3 February 2026',
  readTime: '6 min read',
  featured: false,
  imageUrl: BLOG_IMAGES[4]
},
{
  id: '6',
  title: 'How Care Coordination Reduces Readmission Rates',
  category: 'Care Coordination',
  excerpt:
  'Fragmented handoffs between providers lead to preventable readmissions. Connected care platforms offer a solution.',
  author: 'Pillaxia Research Team',
  date: '27 January 2026',
  readTime: '5 min read',
  featured: false,
  imageUrl: BLOG_IMAGES[5]
}];


const FALLBACK_PRESS_RELEASES: PressRelease[] = [
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