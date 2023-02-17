
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData, useRouteLoaderData } from "@remix-run/react";
import { requireUserId } from "~/utils/session.server";

export const meta: MetaFunction = () => {
  return {
    title: 'RubberGoose - Dashboard'
  }
}

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await requireUserId(request);
  return json({ userId })
}
export default function Dashboard() {
  const { userId } = useLoaderData<typeof loader>();
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold">Dashboard user id: {userId}</h1>
    </main>
  )
}
