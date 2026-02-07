import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Writing',
  description: 'Testing out markdown',
}

export default function WritingContainerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="border-b py-4">
        <div className="container mx-auto px-4">
        <h1 className="text-lg font-semibold">Writing</h1>
        </div>
      </header>
      <>{children}</>
    </>
  )
}
