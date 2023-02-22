import { Link } from "@remix-run/react";
import type { PostFields, TipFields, TutorialFields } from "~/types/types";
import type { Entry } from "contentful";

export default function PostsList({
  posts,
  title,
  description,
  baseRoute,
}: {
  baseRoute: string;
  posts: Entry<PostFields | TipFields | TutorialFields>[];
  title?: string;
  description?: string;
}) {
  return (
    <div className="py-24 sm:py-32 max-w-6xl bg-white mx-auto p-8 rounded mt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {title}
          </h1>
          <p className="mt-2 text-lg leading-8 text-gray-600">{description}</p>
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
            {posts.map((post) => (
              <article
                key={post.sys.id}
                className="relative isolate flex flex-col gap-8 lg:flex-row"
              >
                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                  <img
                    src={post.fields.featureImage.fields.file.url}
                    alt=""
                    className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={post.sys.createdAt}
                      className="text-gray-500"
                    >
                      {post.sys.createdAt}
                    </time>
                    {post.fields.tags &&
                      (post.fields.tags as string[]).map((tag: string) => (
                        <span
                          key={tag}
                          className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <div className="group relative max-w-xl">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <Link to={`${baseRoute}/${post.fields.slug}`}>
                        <span className="absolute inset-0" />
                        {post.fields.title}
                      </Link>
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-gray-600">
                      {post.fields.content.substring(0, 160)}
                    </p>
                  </div>
                  <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                    <div className="relative flex items-center gap-x-4">
                      <img
                        src={`${post.fields.author.fields.avatar.fields.file.url}?w=50&h=50&fit=thumb`}
                        alt=""
                        className="h-10 w-10 rounded-full bg-gray-50"
                      />
                      <div className="text-sm leading-6">
                        <p className="font-semibold text-gray-900">
                          <a href="#">
                            <span className="absolute inset-0" />
                            {post.fields.author.fields.fullName}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
