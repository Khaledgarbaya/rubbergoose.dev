import type { LoaderArgs, LoaderFunction, MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import Footer from "~/components/footer";
import stylesheet from "~/styles/tailwind.css";
import { getUser } from "./utils/session.server";

export function links() {
  return [
    // add a favicon
    {
      rel: "icon",
      href: "/favicon.png?v=2",
      type: "image/png",
    },
    {
      rel: "stylesheet",
      href: stylesheet,
    },
  ];
}
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Rubber Goose",
  viewport: "width=device-width,initial-scale=1",
});

export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  const user = await getUser(request)
  return json({ user })
}

export default function App() {
  const { user } = useLoaderData<typeof loader>()
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-900 text-white flex flex-col min-h-screen">
        <nav className="container mx-auto flex justify-between items-center">
          <ul className="flex">
            <li className="p-4">
              <Link to="/">Rubber goose</Link>
            </li>
            <li className="p-4">
              <Link to="/tutorials">Tutorials</Link>
            </li>
            <li className="p-4">
              <Link to="/tips">Tips</Link>
            </li>
            <li className="p-4">
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
          <ul className="flex">
            <li className="p-4">
              {user ? (
                <div className="flex justify-between space-x-4 items-center">
                  <span>{`Hi ${user.username}`}</span>
                  <form action="/logout" method="post">
                    <button type="submit" className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
                      Logout
                    </button>
                  </form>
                </div>
              ) : (
                <Link to="/login">Login</Link>
              )}
            </li>
          </ul>
        </nav>
        <Outlet />
        <ScrollRestoration />
        <LiveReload />
        <Footer />
      </body>
    </html>
  );
}
