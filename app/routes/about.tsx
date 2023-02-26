import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - About',
  }
}
export default function About() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">About</h1>
    </main>
  )
}
