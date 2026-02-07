import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Popcat',
  description: 'Click at your own risk',
}

export default function PopcatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>{children}</>
  )
}
