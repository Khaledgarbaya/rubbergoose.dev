import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { contentfulClient } from "~/utils/contentful.server";
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

import type { Post } from "~/types/types";
export const meta: MetaFunction<Post> = ({ data }) => {
  if (!data) return { title: 'RubberGoose - Blog Not Found' };
  const { post } = data;
  return {
    title: `RubberGoose - Blog: ${post?.fields?.title}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const post = await contentfulClient.getEntries({ content_type: 'post', 'fields.slug': params.blogSlug });
  if (post.items.length === 0) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  return json({ post: post.items[0] })
}
export default function Index() {
  const { post } = useLoaderData<Post>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {post.fields.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(post.fields.content || '')) }} />
      </div>
    </main>
  )
}
