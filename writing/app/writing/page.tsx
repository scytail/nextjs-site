import type { Metadata } from 'next'
import TitleCard from '../../components/titleCard'
import { Title } from '../api/models/title'
import { getTitles } from '@/lib/api'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Testing out markdown',
}

export default async function Page() {
  const titles: Title[] = await getTitles()

  return (
    <>
      <header className="py-8 container mx-auto">
          <h1 className="text-4xl font-semibold">Writing</h1>
      </header>
      <main className="container mx-auto px-4">
        <div className="space-y-4">
          {titles.map((t) => (
            <TitleCard
              key={t.id}
              title={t.title}
              url={t.urlTitle}
              summary={t.summary}
            />
          ))}
        </div>
      </main>
    </>
  )
}
