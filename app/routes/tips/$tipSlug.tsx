import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "contentful";
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

import type { Tip } from "~/types/types";
export const meta: MetaFunction<{ tip: Tip }> = ({ data }) => {
  const { tip } = data;
  return {
    title: `RubberGoose - Blog: ${tip?.fields?.title}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });
  const tip = await client.getEntries({ content_type: 'tip', order: '-sys.createdAt', 'fields.slug': params.tipSlug });
  return json({ tip: tip.items[0] })
}
export default function Index() {
  const { tip } = useLoaderData<{ tip: Tip }>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {tip?.fields?.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(tip?.fields?.content || '')) }} />
      </div>
    </main>
  )
}
