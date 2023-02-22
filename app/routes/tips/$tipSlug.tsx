import type { LoaderArgs, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { contentfulClient } from "~/utils/contentful.server";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import { Link, useCatch, useParams } from "@remix-run/react";

import type { TipFileds } from "~/types/types";
import type { Entry } from "contentful";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data) return { title: "RubberGoose - Tip Not Found" };
  const { tip } = data;
  return {
    title: `RubberGoose - Tip: ${tip.fields.title}`,
  };
};

export const loader = async ({ params }: LoaderArgs) => {
  const tip = await contentfulClient.getEntries({
    content_type: "tip",
    "fields.slug": params.tipSlug,
  });
  if (tip.items.length === 0) {
    throw new Response("Not Found", {
      status: 404,
    });
  }
  return json({ tip: tip.items[0] as Entry<TipFileds> });
};
export default function Index() {
  const { tip } = useLoaderData<typeof loader>();
  return (
    <main className="container mx-auto p-4">
      <div className="prose prose-slate max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
        <h1>Blog: {tip.fields.title}</h1>
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{
            __html: sanitizeHtml(marked(tip.fields.content || "")),
          }}
        />
      </div>
    </main>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div className="container mx-auto p-4">
        <div className="prose prose-amber max-w-6xl bg-white mx-auto p-8 rounded mt-16 ">
          <h1>Page not found</h1>
          <p>Sorry, we couldn’t find the page you’re looking for.</p>
          <Link
            to="/"
            className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
          >
            Go home
          </Link>
        </div>
      </div>
    );
  }
  throw new Error(`Something went wrong: ${caught.status}`);
}
export function ErrorBoundary() {
  const { tipSlug } = useParams();
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <h1 className="text-sm font-medium text-red-800">Oups</h1>
          <div className="mt-2 text-sm text-red-700">
            {`There was an error loading the tip page by the slug ${tipSlug}. Sorry.`}
          </div>
        </div>
      </div>
    </div>
  );
}
