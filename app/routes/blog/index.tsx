import type { MetaFunction } from "@remix-run/node";
import { warn } from "console";

export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - Blog'
  }
}
export default function Index() {
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Blog</h1>
    </main>
  )
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <h1 className="text-sm font-medium text-red-800">Oups</h1>
          <div className="mt-2 text-sm text-red-700">
            <pre>{error.message}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
