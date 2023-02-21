import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "contentful";
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

import type { Post } from "~/types/types";
export const meta: MetaFunction<Post> = ({ data }) => {
  const { post } = data;
  return {
    title: `RubberGoose - Blog: ${post?.fields?.title}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const post = await client.getEntries({ limit: 3, content_type: 'post', order: '-sys.createdAt', 'fields.slug': params.blogSlug });
  return json({ post: post.items[0] })
}
export default function Index() {
  const { post } = useLoaderData<Post>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {post?.fields?.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(post?.fields?.content || '')) }} />
      </div>
    </main>
  )
}
