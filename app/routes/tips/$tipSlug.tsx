import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { contentfulClient } from "~/utils/contentful.server";
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

import type { Tip } from "~/types/types";
export const meta: MetaFunction<{ tip: Tip }> = ({ data }) => {
  if (!data) return { title: 'RubberGoose - Tip Not Found' };
  const { tip } = data;
  return {
    title: `RubberGoose - Tip: ${tip.fields.title}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const tip = await contentfulClient.getEntries({ content_type: 'tip', 'fields.slug': params.tipSlug });
  if (tip.items.length === 0) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  return json({ tip: tip.items[0] })
}
export default function Index() {
  const { tip } = useLoaderData<{ tip: Tip }>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {tip.fields.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(tip.fields.content || '')) }} />
      </div>
    </main>
  )
}
