import BlogDetailPage from "@/src/content/BlogDetailPage"

export default async function Page({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params
  
  return <BlogDetailPage slug={slug} />
}