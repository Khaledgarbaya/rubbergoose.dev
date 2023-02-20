import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction<typeof loader> = ({ data, params }) => {
  console.log(data, params)
  return {
    title: `RubberGoose - Blog: ${data.blogSlug}`
  }
}

export const loader = async ({ params }: LoaderArgs) => {
  return json({ ...params })
}
export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Blog: {data.blogSlug}</h1>
    </main>
  )
}
