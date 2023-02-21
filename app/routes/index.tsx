import { json, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BlogCollection from "~/components/blog-collection";
import { contentfulClient } from "~/utils/contentful.server";
import type { Post, Tip, Tutorial } from "~/types/types";
export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - Learn Web Development'
  }
}

export async function loader() {

  const posts = await contentfulClient.getEntries({ limit: 3, content_type: 'post', order: '-sys.createdAt' });
  const tutorials = await contentfulClient.getEntries({ limit: 3, content_type: 'tutorial', order: '-sys.createdAt' });
  const tips = await contentfulClient.getEntries({ limit: 3, content_type: 'tip', order: '-sys.createdAt' });

  return json({ posts: posts.items, tutorials: tutorials.items, tips: tips.items });
}
export default function Index() {
  const { posts, tips, tutorials } = useLoaderData<{ posts: Post[], tips: Tip[], tutorials: Tutorial[] }>();
  return (
    <main className="container mx-auto p-4">
      <div className="flex flex-wrap-reverse mt-16 items-center justify-center">
        <div className="w-full md:w-2/3">
          <h1 className="text-6xl font-bold text-amber-600 max-w-xl md:max-w-2xl">Build Real Wrold Projects To Learn Web Development</h1>
          <p className="text-xl py-4 max-w-xl md:max-w-2xl">Here at RubberGoose, we think getting your hands dirty is the greatest way to learn web programming. You can improve your abilities and self-assurance one project at a time with the help of our tutorials.</p>
        </div>
        <div className="w-full md:w-1/3 ">
          <img src="/images/rubbergoose-glow.png" alt="Rubber Goose" />
        </div>
      </div>
      <div className="max-w-3xl mx-auto text-xl">
        <p className="my-8">
          At RubberGoose, it's our goal to offer students a fun and informative way to learn what they need to know to become successful web developers. Developing real-world projects is how we teach web programming because we know that's the best way to learn.
        </p>
        <p>
          Tutorials on our site are made to guide you through the entire process of creating a practical application. Working on projects that you can be proud of adding to your portfolio is a great way to master the core concepts, tools, and approaches for web development.
        </p>
      </div>
      <BlogCollection baseRoute="tutorials" posts={tutorials} title="Latest Tutorials" description="Checkout our latest Tutorials" />
      <BlogCollection baseRoute="blog" posts={posts} title="From The Blog" description="Checkout our latest blog post entries" />
      <BlogCollection baseRoute="tips" posts={tips} title="Hot Tips just out of the oven" description="Checkout our latest hottest tips" />
    </main>
  )
}


export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="ml-3">
          <h1 className="text-sm font-medium text-red-800">Oups</h1>
          <div className="mt-2 text-sm text-red-700">
            <pre>{error.message}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
