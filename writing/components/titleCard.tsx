import React from 'react'

export interface TitleCardProps {
  title: string
  description: string
  icon?: React.ReactNode
}

export default function TitleCard({ title, description, icon }: TitleCardProps) {
  const DefaultIcon = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M6 3h10a2 2 0 0 1 2 2v14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 21V5a2 2 0 0 0-2-2H4v18h16v-2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <article className="flex items-start gap-4 border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow bg-white">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
        {icon ?? DefaultIcon}
      </div>
      <div>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{description}</p>
      </div>
    </article>
  )
}
