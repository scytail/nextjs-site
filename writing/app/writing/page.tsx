import type { Metadata } from 'next'
import TitleCard from '../../components/titleCard'
import { getTitles } from '@/lib/api'

export const revalidate = 60; // ignore cached fetch requests every 60 seconds

export const metadata: Metadata = {
  title: 'The Writing Desk',
  description: 'A collection of written works, fresh from the mind of an amateur wordsmith.',
}

export default async function Page() {
  const titles = await getTitles()

  return (
    <>
      <main className="container mx-auto px-4 max-w-6xl">
        <div className="py-8">
          <h1 className="text-4xl font-semibold italic">Titles</h1>
          <p className="text-gray-700 text-lg mt-2">A collection of my written works, freely available to read online.</p>
        </div>
        <div className="space-y-4">
          {titles.map((t) => (
            <TitleCard
              key={t.id}
              title={t.title_name}
              url={t.title_url}
              summary={t.summary || ''}
            />
          ))}
        </div>
      </main>
    </>
  )
}
