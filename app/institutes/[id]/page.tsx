import { InstituteDetailPage } from '@/src/content/InstituteDetailPage'

export default async function Page({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  
  return <InstituteDetailPage id={id} />
}