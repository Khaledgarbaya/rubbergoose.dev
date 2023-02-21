
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { contentfulClient } from "~/utils/contentful.server";
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

import type { Tutorial } from "~/types/types";
export const meta: MetaFunction<Tutorial> = ({ data }) => {
  if (!data) return { title: 'RubberGoose - Tutorial Not Found' };

  const { tutorial } = data;
  return {
    title: `RubberGoose - Tutorial: ${tutorial?.fields?.title}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  const tutorial = await contentfulClient.getEntries({ content_type: 'tutorial', 'fields.slug': params.tutorialSlug });
  if (tutorial.items.length === 0) {
    throw new Response("Not Found", {
      status: 404
    });
  }
  return json({ tutorial: tutorial.items[0] })
}
export default function Index() {
  const { tutorial } = useLoaderData<{ tutorial: Tutorial }>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {tutorial.fields.title}</h1>
        <div className="mt-4" dangerouslySetInnerHTML={{ __html: sanitizeHtml(marked(tutorial.fields.content || '')) }} />
      </div>
    </main>
  )
}
