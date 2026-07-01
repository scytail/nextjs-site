import React from 'react'

export interface TitleCardProps {
  title: string
  url: string
  summary: string
}

export default function TitleCard({ title, url, summary }: TitleCardProps) {
  return (
    <article className="flex items-start">
      <div className="border-l-4 border-cyan-500 pl-4">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-200 hover:text-cyan-500 w-fit ease-in-out duration-200"><a href={`/writing/${url}`}>{title}</a></h2>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{summary}</p>
      </div>
    </article>
  )
}
