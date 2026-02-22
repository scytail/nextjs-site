import React from 'react'
import Markdown from 'react-markdown'
import type { Metadata } from 'next'
import TitleCard from '../../components/titleCard'

type TitleItem = {
  id: string
  title: string
  description: string
}

/**
 * Stub that simulates hitting a database API and returning a list of titles.
 * It waits briefly and returns an array of items with a GUID, title, and description.
 */
export async function fetchTitles(): Promise<TitleItem[]> {
  await new Promise((res) => setTimeout(res, 200))

  return [
    {
      id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      title: 'Short Story Title',
      description: 'This is a short story about a cat. That is all.',
    },
    {
      id: '9b1deb4d-3b7d-4d3b-9f3f-2f8d7b8c1a2b',
      title: 'Novel Title',
      description: 'Check out this full length novel, you certainly will not be disappointed.',
    },
  ]
}

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Testing out markdown',
}

export default async function Page() {
  const titles = await fetchTitles()

  return (
    <>
      <header className="border-b py-4">
        <div className="container mx-auto px-4">
        <h1 className="text-lg font-semibold">Writing</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-xl space-y-4">
          {titles.map((t) => (
            <TitleCard
              key={t.id}
              title={t.title}
              description={t.description}
            />
          ))}
        </div>
      </main>
    </>
  )
}
