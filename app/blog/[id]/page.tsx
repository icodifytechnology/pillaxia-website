import { BlogDetailPage } from '@/src/content/BlogDetailPage'

export default async function Page({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  
  return <BlogDetailPage id={id} />
}