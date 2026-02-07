import React from 'react'
import Markdown from 'react-markdown'

export default function Page() {
    const markdownContent = `# Header\n\nThis is some **markdown** content.\n\n- Item 1\n- Item 2\n- Item 3`
  return (
    <main className="container mx-auto px-4 py-8">
      <Markdown>{markdownContent}</Markdown>
    </main>
  )
}
