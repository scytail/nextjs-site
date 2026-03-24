import React from 'react'

export interface TitleCardProps {
  title: string
  url: string
  summary: string
  icon?: React.ReactNode
}

export default function TitleCard({ title, url, summary }: TitleCardProps) {
  return (
    <article className="flex items-start">
      <div className="border-l-4 border-blue-500 pl-4">
        <h2 className="text-lg font-semibold text-gray-900 hover:text-blue-500 w-fit ease-in-out duration-200"><a href={`/writing/${url}`}>{title}</a></h2>
        <p className="mt-1 text-sm text-gray-600">{summary}</p>
      </div>
    </article>
  )
}
