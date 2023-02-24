import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { contentfulClient } from '~/utils/contentful.server'
import PostsList from '~/components/posts-list'

import type { MetaFunction } from '@remix-run/node'
import type { TutorialEntry } from '~/types/types'
import NewsletterSignup from '~/components/newsletter-signup'

export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - Tutorials',
  }
}
export async function loader() {
  const tutorials = (await contentfulClient.getEntries({
    content_type: 'tutorial',
    order: '-sys.createdAt',
  })) as { items: TutorialEntry[] }

  return json({
    tutorials: tutorials.items,
  })
}
export default function Index() {
  const { tutorials } = useLoaderData<typeof loader>()
  return (
    <main className="container mx-auto p-4">
      <div className="mt-8">
        <h1 className="text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl">
          Latest Tutorials
        </h1>
        <p className="text-lg leading-8 text-white">
          Checkout our latest Tutorials
        </p>
      </div>
      <PostsList baseRoute="/tutorials" posts={tutorials} />
      <NewsletterSignup />
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
  )
}
