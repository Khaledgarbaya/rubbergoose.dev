import { json, LoaderArgs, MetaFunction } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { marked } from 'marked'
import sanitizeHtml from 'sanitize-html'
import { TutorialEntry } from '~/types/types'
import { contentfulClient } from '~/utils/contentful.server'

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return { title: 'RubberGoose - Tutorial Not Found' }

  const { lesson } = data
  return {
    title: `RubberGoose - Tutorial: ${lesson?.fields?.title}`,
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const tutorial = (await contentfulClient.getEntries({
    content_type: 'tutorial',
    include: 3,
    'fields.slug': params.tutorialSlug,
  })) as { items: TutorialEntry[] }
  if (tutorial.items.length === 0) {
    throw new Response('Not Found', {
      status: 404,
    })
  }
  if (!tutorial.items[0].fields.lessons) {
    throw new Response('Not Found', {
      status: 404,
    })
  }
  const lesson = tutorial.items[0].fields.lessons.find(
    (lesson) => lesson.fields.slug === params.lessonSlug,
  )
  if (!lesson) {
    throw new Response('Not Found', {
      status: 404,
    })
  }
  return json({ lesson })
}
export default function LessonSlug() {
  const { lesson } = useLoaderData<typeof loader>()
  return (
    <main className='relative mx-auto w-full max-w-7xl items-start border-t border-transparent lg:mt-16'>
      <div className='flex flex-col border-gray-800'>
        <div className='relative flex w-full items-center justify-center'>
          <iframe
            className='w-full aspect-video'
            src={`${lesson.fields.videoUrl}`}
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </div>

      <div className='prose prose-amber max-w-7xl bg-white mx-auto p-8 mt-6 rounded'>
        <h1>{lesson.fields.title}</h1>
        <div
          className='mt-4'
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(marked(lesson.fields.content || '')),
          }}
        />
      </div>
    </main>
  )
}
