
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "contentful";
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

import type { Tutorial } from "~/types/types";
export const meta: MetaFunction<Tutorial> = ({ data }) => {
  const { tutorial } = data;
  return {
    title: `RubberGoose - Blog: ${tutorial?.fields?.title}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const tutorial = await client.getEntries({ content_type: 'tutorial', 'fields.slug': params.tutorialSlug });
  return json({ tutorial: tutorial.items[0] })
}
export default function Index() {
  const { tutorial } = useLoaderData<{ tutorial: Tutorial }>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {tutorial?.fields?.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(tutorial?.fields?.content || '')) }} />
      </div>
    </main>
  )
}
