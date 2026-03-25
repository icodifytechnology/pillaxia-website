import { useQuery, useMutation, QueryClient } from '@tanstack/react-query';
import { BlogPost, FALLBACK_BLOG_POSTS } from './blog';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1
    }
  }
});

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