import { Link, useActionData, useSearchParams } from '@remix-run/react'
import type { ActionArgs } from '@remix-run/node'
import { createUserSession, login, register } from '~/utils/session.server'

import { db } from '~/utils/db.server'
import { badRequest } from '~/utils/request.server'

function validateUsername(username: unknown) {
  if (typeof username !== 'string' || username.length < 3) {
    return `Usernames must be at least 3 characters long`
  }
}

function validatePassword(password: unknown) {
  if (typeof password !== 'string' || password.length < 6) {
    return `Passwords must be at least 6 characters long`
  }
}

function validateUrl(url: string) {
  let urls = ['/dashboard', '/', 'https://rubbergoose.dev']
  if (urls.includes(url)) {
    return url
  }
  return '/'
}

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData()
  const loginType = form.get('loginType')
  const username = form.get('username')
  const password = form.get('password')
  const redirectTo = validateUrl(
    (form.get('redirectTo') as string) || '/dashboard',
  )
  if (
    typeof loginType !== 'string' ||
    typeof username !== 'string' ||
    typeof password !== 'string' ||
    typeof redirectTo !== 'string'
  ) {
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: `Form not submitted correctly.`,
    })
  }

  const fields = { loginType, username, password }
  const fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password),
  }
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({
      fieldErrors,
      fields,
      formError: null,
    })
  }

  switch (loginType) {
    case 'login': {
      // login to get the user
      // if there's no user, return the fields and a formError
      // if there is a user, create their session and redirect to /jokes
      const user = await login({ username, password })
      if (!user) {
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `Username/Password combination is incorrect`,
        })
      }
      return createUserSession(user.id, redirectTo)
    }
    case 'register': {
      const userExists = await db.user.findFirst({
        where: { username },
      })
      if (userExists) {
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `User with username ${username} already exists`,
        })
      }
      // create the user
      const user = await register({ username, password })
      if (!user) {
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `Something went wrong trying to create a new user.`,
        })
      }
      return createUserSession(user.id, redirectTo)
    }
    default: {
      return badRequest({
        fieldErrors: null,
        fields,
        formError: `Login type invalid`,
      })
    }
  }
}

export default function Login() {
  const [searchParams] = useSearchParams()
  const actionData = useActionData<typeof action>()
  return (
    <div className="container">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-24 w-auto"
              src="/images/rubbergoose-glow.png"
              alt="Your Company"
            />
            <h1 className="mt-6 text-center text-3xl font-bold tracking-tight">
              Sign in to your account
            </h1>
          </div>
          <div className="content" data-light="">
            <form method="post" className="mt-8 space-y-6">
              <input
                type="hidden"
                name="redirectTo"
                value={searchParams.get('redirectTo') ?? undefined}
              />
              <fieldset>
                <legend className="sr-only">Login or Register?</legend>
                <label>
                  <input
                    type="radio"
                    name="loginType"
                    value="login"
                    defaultChecked={
                      !actionData?.fields?.loginType ||
                      actionData?.fields?.loginType === 'login'
                    }
                  />{' '}
                  Login
                </label>
                <label>
                  <input
                    type="radio"
                    name="loginType"
                    value="register"
                    defaultChecked={
                      actionData?.fields?.loginType === 'register'
                    }
                  />{' '}
                  Register
                </label>
              </fieldset>
              <div>
                <label htmlFor="username-input">Username</label>
                <input
                  type="text"
                  className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                  id="username-input"
                  name="username"
                  defaultValue={actionData?.fields?.username}
                  aria-invalid={Boolean(actionData?.fieldErrors?.username)}
                  aria-errormessage={
                    actionData?.fieldErrors?.username
                      ? 'username-error'
                      : undefined
                  }
                />
                {actionData?.fieldErrors?.username ? (
                  <p
                    className="text-red-500 text-xs italic"
                    role="alert"
                    id="username-error"
                  >
                    {actionData.fieldErrors.username}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="password-input">Password</label>
                <input
                  className="relative block w-full appearance-none border rounded-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm"
                  id="password-input"
                  name="password"
                  type="password"
                  defaultValue={actionData?.fields?.password}
                  aria-invalid={Boolean(actionData?.fieldErrors?.password)}
                  aria-errormessage={
                    actionData?.fieldErrors?.password
                      ? 'password-error'
                      : undefined
                  }
                />
                {actionData?.fieldErrors?.password ? (
                  <p
                    className="text-red-500 text-xs italic"
                    role="alert"
                    id="password-error"
                  >
                    {actionData.fieldErrors.password}
                  </p>
                ) : null}
              </div>
              <div id="form-error-message">
                {actionData?.formError ? (
                  <p className="text-red-500 text-xs italic" role="alert">
                    {actionData.formError}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="links">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
