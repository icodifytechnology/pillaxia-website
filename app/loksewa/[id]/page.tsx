import { QuestionSetPage } from '@/src/content/QuestionSetPage'

export default async function Page({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  
  return <QuestionSetPage id={id} />
}