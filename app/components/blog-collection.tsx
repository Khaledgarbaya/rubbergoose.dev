import { Link } from '@remix-run/react'
import type { PostFields, TipFields, TutorialFields } from '~/types/types'
import type { Entry } from 'contentful'

export default function BlogCollection({
  posts,
  title,
  description,
  baseRoute,
}: {
  baseRoute: string
  posts: Entry<PostFields>[] | Entry<TutorialFields>[] | Entry<TipFields>[]
  title?: string
  description?: string
}) {
  return (
    <div className="relative mt-32 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="bg-gradient-to-b from-slate-300 via-white to-white h-1/3 bg-white sm:h-2/3 rounded-xl" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            {description}
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: any) => (
            <div
              key={post.fields.slug}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg shadow-slate-900"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.fields.featureImage.fields.file.url}
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-amber-600">
                    <a href="#" className="hover:underline">
                      Category
                    </a>
                  </p>
                  <Link
                    to={`${baseRoute}/${post.fields.slug}`}
                    className="mt-2 block"
                  >
                    <p className="text-xl font-semibold text-gray-900">
                      {post.fields.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.fields.content.substring(0, 160)}
                    </p>
                  </Link>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="#">
                      <span className="sr-only">
                        {post.fields.author.fields.fullName}
                      </span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={`https:${post.fields.author.fields.avatar.fields.file.url}?w=50&h=50&fit=thumb&q=100`}
                        alt={post.fields.author.fields.fullName}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href="#" className="hover:underline">
                        {post.fields.author.fields.fullName}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.sys.createdAt}>
                        {new Intl.DateTimeFormat('en-US', {
                          dateStyle: 'long',
                        }).format(new Date(post.sys.createdAt))}
                      </time>
                      <span aria-hidden="true">&middot;</span>
                      <span>2min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
