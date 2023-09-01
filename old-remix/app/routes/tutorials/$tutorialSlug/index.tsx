import type { LoaderArgs, MetaFunction } from '@remix-run/node'
import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { contentfulClient } from '~/utils/contentful.server'
import { marked } from 'marked'
import { Link, useCatch, useParams } from '@remix-run/react'
import sanitizeHtml from 'sanitize-html'

import type { TutorialFields } from '~/types/types'
import type { Entry } from 'contentful'
import NewsletterSignup from '~/components/newsletter-signup'
export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return { title: 'RubberGoose - Tutorial Not Found' }

  const { title } = data
  return {
    title: `RubberGoose - Tutorial: ${title}`,
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const tutorial = (await contentfulClient.getEntries({
    content_type: 'tutorial',
    'fields.slug': params.tutorialSlug,
  })) as { items: Entry<TutorialFields>[] }
  if (tutorial.items.length === 0) {
    throw new Response('Not Found', {
      status: 404,
    })
  }
  const { lessons, title, content } = tutorial.items[0].fields

  return json({
    title,
    content,
    firstLessonSlug: (lessons && lessons[0]?.fields.slug) ?? null,
  })
}
export default function Index() {
  const { title, content, firstLessonSlug } = useLoaderData<typeof loader>()
  return (
    <main className='container mx-auto p-4'>
      <div className='prose prose-slate max-w-6xl bg-white mx-auto p-8 shadow shadow-slate-300 mt-16 '>
        <h1>{title}</h1>
        <div
          className='mt-4'
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(marked(content || '')),
          }}
        />
        {firstLessonSlug ? (
          <Link
            to={`lessons/${firstLessonSlug}`}
            className='group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2'
          >
            Start Learning
          </Link>
        ) : null}
      </div>
      <NewsletterSignup />
    </main>
  )
}

export function CatchBoundary() {
  const caught = useCatch()
  if (caught.status === 404) {
    return (
      <div className='container mx-auto p-4'>
        <div className='prose prose-amber max-w-6xl bg-white mx-auto p-8 rounded mt-16 '>
          <h1>Page not found</h1>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <Link
            to='/'
            className='rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600'
          >
            Go home
          </Link>
        </div>
      </div>
    )
  }
  throw new Error(`Something went wrong: ${caught.status}`)
}
export function ErrorBoundary() {
  const { tutorialSlug } = useParams()
  return (
    <div className='rounded-md bg-red-50 p-4'>
      <div className='flex'>
        <div className='ml-3'>
          <h1 className='text-sm font-medium text-red-800'>Oups</h1>
          <div className='mt-2 text-sm text-red-700'>
            {`There was an error loading the tutorial page by the slug ${tutorialSlug}. Sorry.`}
          </div>
        </div>
      </div>
    </div>
  )
}
