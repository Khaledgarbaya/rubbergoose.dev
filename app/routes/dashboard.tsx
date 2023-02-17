
import { json, LoaderArgs, MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="rounded-md bg-red-50 p-4 mx-auto w-full mt-16 max-w-5xl">
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
