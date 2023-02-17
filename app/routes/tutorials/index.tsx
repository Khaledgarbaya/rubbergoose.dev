import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - Tutorials'
  }
}
export default function Index() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Tutorials</h1>
    </main>
  )
}
