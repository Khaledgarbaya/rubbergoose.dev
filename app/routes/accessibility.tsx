import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - Accessibility',
  }
}
export default function Accessibility() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Accessibility</h1>
    </main>
  )
}
