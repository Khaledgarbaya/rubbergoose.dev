var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 41,
        columnNumber: 7
      }, this),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 82,
        columnNumber: 7
      }, this),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node3 = require("@remix-run/node"), import_react3 = require("@remix-run/react"), import_clsx = __toESM(require("clsx"));

// app/components/footer.tsx
var import_react2 = require("@remix-run/react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), navigation = {
  main: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Tutorials", href: "/tutorials" }
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 16,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this)
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 29,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 42,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 41,
        columnNumber: 9
      }, this)
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 51,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 50,
        columnNumber: 9
      }, this)
    },
    {
      name: "YouTube",
      href: "#",
      icon: (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { fill: "currentColor", viewBox: "0 0 24 24", ...props, children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        "path",
        {
          fillRule: "evenodd",
          d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
          clipRule: "evenodd"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.tsx",
          lineNumber: 64,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/footer.tsx",
        lineNumber: 63,
        columnNumber: 9
      }, this)
    }
  ]
};
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("footer", { className: "bg-white mt-auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mx-auto max-w-7xl overflow-hidden py-20 px-6 sm:py-24 lg:px-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "nav",
      {
        className: "-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12",
        "aria-label": "Footer",
        children: navigation.main.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "pb-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
          import_react2.Link,
          {
            to: item.href,
            className: "text-sm leading-6 text-gray-600 hover:text-gray-900",
            children: item.name
          },
          void 0,
          !1,
          {
            fileName: "app/components/footer.tsx",
            lineNumber: 85,
            columnNumber: 15
          },
          this
        ) }, item.name, !1, {
          fileName: "app/components/footer.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, this))
      },
      void 0,
      !1,
      {
        fileName: "app/components/footer.tsx",
        lineNumber: 79,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "mt-10 flex justify-center space-x-10", children: navigation.social.map((item) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
      "a",
      {
        href: item.href,
        className: "text-gray-400 hover:text-gray-500",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("span", { className: "sr-only", children: item.name }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 101,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(item.icon, { className: "h-6 w-6", "aria-hidden": "true" }, void 0, !1, {
            fileName: "app/components/footer.tsx",
            lineNumber: 102,
            columnNumber: 15
          }, this)
        ]
      },
      item.name,
      !0,
      {
        fileName: "app/components/footer.tsx",
        lineNumber: 96,
        columnNumber: 13
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("p", { className: "mt-10 text-center text-xs leading-5 text-gray-500", children: "\xA9 2023 Rubber Goose. All rights reserved." }, void 0, !1, {
      fileName: "app/components/footer.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.tsx",
    lineNumber: 78,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.tsx",
    lineNumber: 77,
    columnNumber: 5
  }, this);
}

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-Z4KR37LG.css";

// app/utils/session.server.ts
var import_bcryptjs = __toESM(require("bcryptjs"));

// app/utils/db.server.ts
var import_client = require("@prisma/client"), db;
global.__db || (global.__db = new import_client.PrismaClient()), db = global.__db;

// app/utils/session.server.ts
var import_node2 = require("@remix-run/node");
async function login({ username, password }) {
  let user = await db.user.findUnique({
    where: { username }
  });
  return !user || !await import_bcryptjs.default.compare(password, user.passwordHash) ? null : { id: user.id, username };
}
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set");
var storage = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "RJ_session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function getUser(request) {
  let userId = await getUserId(request);
  if (typeof userId != "string")
    return null;
  try {
    return await db.user.findUnique({
      where: { id: userId },
      select: { id: !0, username: !0 }
    });
  } catch {
    throw logout(request);
  }
}
async function register({ username, password }) {
  let passwordHash = await import_bcryptjs.default.hash(password, 10);
  return { id: (await db.user.create({
    data: { username, passwordHash }
  })).id, username };
}
async function logout(request) {
  let session = await getUserSession(request);
  return (0, import_node2.redirect)("/login", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}
async function createUserSession(userId, redirectTo) {
  let session = await storage.getSession();
  return session.set("userId", userId), (0, import_node2.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
function getUserSession(request) {
  return storage.getSession(request.headers.get("Cookie"));
}
async function getUserId(request) {
  let userId = (await getUserSession(request)).get("userId");
  return !userId || typeof userId != "string" ? null : userId;
}
async function requireUserId(request, redirectTo = new URL(request.url).pathname) {
  let userId = (await getUserSession(request)).get("userId");
  if (!userId || typeof userId != "string") {
    let searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw (0, import_node2.redirect)(`/login?${searchParams}`);
  }
  return userId;
}

// app/root.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function links() {
  return [
    {
      rel: "icon",
      href: "/favicon.png?v=2",
      type: "image/png"
    },
    {
      rel: "stylesheet",
      href: tailwind_default
    }
  ];
}
var meta = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1"
}), loader = async ({ request }) => {
  let user = await getUser(request);
  return (0, import_node3.json)({ user });
};
function Document({
  children,
  user,
  title
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 54,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("title", { children: title }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 56,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 53,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("body", { className: "bg-slate-900 text-white flex flex-col min-h-screen relative", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "bg-slate-900", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
          "svg",
          {
            className: "absolute inset-0 -z-10 h-full w-full stroke-white/10 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("defs", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "pattern",
                {
                  id: "983e3e4c-de6d-4c3f-8d64-b9761d1534cc",
                  width: 200,
                  height: 200,
                  x: "50%",
                  y: -1,
                  patternUnits: "userSpaceOnUse",
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M.5 200V.5H200", fill: "none" }, void 0, !1, {
                    fileName: "app/root.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/root.tsx",
                  lineNumber: 65,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 64,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("svg", { x: "50%", y: -1, className: "overflow-visible fill-gray-800/20", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z",
                  strokeWidth: 0
                },
                void 0,
                !1,
                {
                  fileName: "app/root.tsx",
                  lineNumber: 77,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/root.tsx",
                lineNumber: 76,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "rect",
                {
                  width: "100%",
                  height: "100%",
                  strokeWidth: 0,
                  fill: "url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
                },
                void 0,
                !1,
                {
                  fileName: "app/root.tsx",
                  lineNumber: 82,
                  columnNumber: 13
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/root.tsx",
            lineNumber: 60,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "container mx-auto flex justify-between items-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react3.NavLink,
              {
                className: ({ isActive }) => (0, import_clsx.default)(
                  isActive ? "border-b border-b-amber-500 text-amber-600" : "text-white"
                ),
                to: "/",
                children: "Rubber goose"
              },
              void 0,
              !1,
              {
                fileName: "app/root.tsx",
                lineNumber: 92,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 91,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react3.NavLink,
              {
                className: ({ isActive }) => (0, import_clsx.default)(
                  isActive ? "border-b border-b-amber-500 text-amber-600" : "text-white"
                ),
                to: "/tutorials",
                children: "Tutorials"
              },
              void 0,
              !1,
              {
                fileName: "app/root.tsx",
                lineNumber: 106,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 105,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react3.NavLink,
              {
                className: ({ isActive }) => (0, import_clsx.default)(
                  isActive ? "border-b border-b-amber-500 text-amber-600" : "text-white"
                ),
                to: "/tips",
                children: "Tips"
              },
              void 0,
              !1,
              {
                fileName: "app/root.tsx",
                lineNumber: 120,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 119,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              import_react3.NavLink,
              {
                className: ({ isActive }) => (0, import_clsx.default)(
                  isActive ? "border-b border-b-amber-500 text-amber-600" : "text-white"
                ),
                to: "/blog",
                children: "Blog"
              },
              void 0,
              !1,
              {
                fileName: "app/root.tsx",
                lineNumber: 134,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 133,
              columnNumber: 15
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 90,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("ul", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("li", { className: "p-4", children: user ? /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex justify-between space-x-4 items-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: `Hi ${user.username}` }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 152,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("form", { action: "/logout", method: "post", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
              "button",
              {
                type: "submit",
                className: "group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
                children: "Logout"
              },
              void 0,
              !1,
              {
                fileName: "app/root.tsx",
                lineNumber: 154,
                columnNumber: 23
              },
              this
            ) }, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 153,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 151,
            columnNumber: 19
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.NavLink, { to: "/login", children: "Login" }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 149,
            columnNumber: 15
          }, this) }, void 0, !1, {
            fileName: "app/root.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/root.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 170,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 171,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 172,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 52,
    columnNumber: 5
  }, this);
}
function App() {
  let { user } = (0, import_react3.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { user, title: "Rubbergoose", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 181,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 180,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  let caught = (0, import_react3.useCatch)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { user: null, title: `${caught.status} ${caught.statusText}`, children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: [
    caught.status,
    " ",
    caught.statusText
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 193,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 192,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 191,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 190,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 189,
    columnNumber: 5
  }, this);
}
function ErrorBoundary({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Document, { user: null, title: "Uh-oh!", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "App Error" }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 208,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 210,
      columnNumber: 15
    }, this) }, void 0, !1, {
      fileName: "app/root.tsx",
      lineNumber: 209,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 207,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 206,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 205,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.tsx",
    lineNumber: 204,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/$tutorialSlug/lessons.tsx
var lessons_exports = {};
__export(lessons_exports, {
  default: () => Lessons,
  loader: () => loader2,
  meta: () => meta2
});
var import_node4 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/utils/contentful.server.ts
var import_contentful = require("contentful"), contentfulClient = (0, import_contentful.createClient)({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

// app/routes/tutorials/$tutorialSlug/lessons.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), meta2 = ({ data }) => {
  var _a, _b;
  if (!data)
    return { title: "RubberGoose - Tutorial Not Found" };
  let { tutorial } = data;
  return {
    title: `RubberGoose - Tutorial: ${(_b = (_a = tutorial.fields.lessons[0]) == null ? void 0 : _a.fields) == null ? void 0 : _b.title}`
  };
}, loader2 = async ({ params }) => {
  let tutorial = await contentfulClient.getEntries({
    content_type: "tutorial",
    include: 3,
    "fields.slug": params.tutorialSlug
  });
  if (tutorial.items.length === 0)
    throw new Response("Not Found", {
      status: 404
    });
  if (!tutorial.items[0].fields.lessons)
    throw new Response("Not Found", {
      status: 404
    });
  return (0, import_node4.json)({
    tutorial: tutorial.items[0]
  });
};
function Lessons() {
  let { tutorial } = (0, import_react4.useLoaderData)(), { lessons, title } = tutorial.fields;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex bg-slate-900 mx-auto container h-full min-h-screen flex-grow flex-col px-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex flex-grow flex-col lg:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative z-50 w-full flex-shrink-0 border-r border-gray-800 lg:max-w-[280px] xl:max-w-xs hidden lg:block", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "top-0 lg:sticky", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("aside", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "py-8 top-0 z-10 h-[150px] bg-gradient-to-t from-transparent via-gray-900 to-gray-900 lg:sticky", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative flex items-center gap-5 border-b border-gray-800 bg-gray-900 px-3 py-1", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h2", { className: "w-full text-2xl font-semibold leading-none", children: title }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 47,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 45,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "group relative h-[400px] overflow-y-auto pb-16 scrollbar-thin scrollbar-thumb-gray-800/70 hover:scrollbar-thumb-gray-700 lg:h-[calc(100vh-180px)]", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("nav", { "aria-label": "lessons navigator", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "space-y-2", children: lessons.map((lesson) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_react4.NavLink,
        {
          to: `${lesson.fields.slug}`,
          className: ({ isActive }) => `flex items-center text-white shadow-xl shadow-black/20 px-2 ${isActive ? "bg-amber-600 text-white" : "text-gray-800 hover:bg-gray-700 hover:text-white"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                className: "w-6 h-6",
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                  "path",
                  {
                    fillRule: "evenodd",
                    d: "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z",
                    clipRule: "evenodd"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
                    lineNumber: 74,
                    columnNumber: 31
                  },
                  this
                )
              },
              void 0,
              !1,
              {
                fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
                lineNumber: 68,
                columnNumber: 29
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("h3", { className: "p-4 text-base overflow-hidden", children: lesson.fields.title }, void 0, !1, {
              fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
              lineNumber: 81,
              columnNumber: 29
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
          lineNumber: 58,
          columnNumber: 27
        },
        this
      ) }, lesson.fields.slug, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 57,
        columnNumber: 25
      }, this)) }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 55,
        columnNumber: 21
      }, this) }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 54,
        columnNumber: 19
      }, this) }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 52,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "pointer-events-none absolute bottom-0 left-0 z-20 h-16 w-full bg-gradient-to-t from-gray-900 to-transparent" }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
        lineNumber: 91,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
      lineNumber: 44,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
      lineNumber: 43,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
      lineNumber: 42,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
    lineNumber: 41,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tutorials/$tutorialSlug/lessons.tsx",
    lineNumber: 40,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx
var lessonSlug_exports = {};
__export(lessonSlug_exports, {
  default: () => LessonSlug,
  loader: () => loader3,
  meta: () => meta3
});
var import_node5 = require("@remix-run/node"), import_react5 = require("@remix-run/react"), import_marked = require("marked"), import_sanitize_html = __toESM(require("sanitize-html"));
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), meta3 = ({ data }) => {
  var _a;
  if (!data)
    return { title: "RubberGoose - Tutorial Not Found" };
  let { lesson } = data;
  return {
    title: `RubberGoose - Tutorial: ${(_a = lesson == null ? void 0 : lesson.fields) == null ? void 0 : _a.title}`
  };
}, loader3 = async ({ params }) => {
  let tutorial = await contentfulClient.getEntries({
    content_type: "tutorial",
    include: 3,
    "fields.slug": params.tutorialSlug
  });
  if (tutorial.items.length === 0)
    throw new Response("Not Found", {
      status: 404
    });
  if (!tutorial.items[0].fields.lessons)
    throw new Response("Not Found", {
      status: 404
    });
  let lesson = tutorial.items[0].fields.lessons.find(
    (lesson2) => lesson2.fields.slug === params.lessonSlug
  );
  if (!lesson)
    throw new Response("Not Found", {
      status: 404
    });
  return (0, import_node5.json)({ lesson });
};
function LessonSlug() {
  let { lesson } = (0, import_react5.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("main", { className: "relative mx-auto w-full max-w-7xl items-start border-t border-transparent lg:mt-16", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex flex-col border-gray-800", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative flex w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
      "iframe",
      {
        className: "w-full aspect-video",
        src: `${lesson.fields.videoUrl}`,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: !0,
        title: "Embedded youtube"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
        lineNumber: 49,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
      lineNumber: 48,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
      lineNumber: 47,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "prose prose-amber max-w-7xl bg-white mx-auto mt-2 p-8 shadow-slate-300", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { children: lesson.fields.title }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "div",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: (0, import_sanitize_html.default)((0, import_marked.marked)(lesson.fields.content || ""))
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
          lineNumber: 61,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/$tutorialSlug/lessons/$lessonSlug.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/$tutorialSlug/lessons/index.tsx
var lessons_exports2 = {};
__export(lessons_exports2, {
  default: () => Lessons2,
  loader: () => loader4,
  meta: () => meta4
});
var import_node6 = require("@remix-run/node"), import_react6 = require("@remix-run/react"), import_marked2 = require("marked"), import_sanitize_html2 = __toESM(require("sanitize-html"));
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta4 = ({ data }) => {
  var _a;
  if (!data)
    return { title: "RubberGoose - Tutorial Not Found" };
  let { lesson } = data;
  return {
    title: `RubberGoose - Tutorial: ${(_a = lesson == null ? void 0 : lesson.fields) == null ? void 0 : _a.title}`
  };
}, loader4 = async ({ params }) => {
  let tutorial = await contentfulClient.getEntries({
    content_type: "tutorial",
    include: 3,
    "fields.slug": params.tutorialSlug
  });
  if (tutorial.items.length === 0)
    throw new Response("Not Found", {
      status: 404
    });
  if (!tutorial.items[0].fields.lessons)
    throw new Response("Not Found", {
      status: 404
    });
  let lesson = tutorial.items[0].fields.lessons[0];
  if (!lesson)
    throw new Response("Not Found", {
      status: 404
    });
  let { title, content, videoUrl } = lesson.fields;
  return (0, import_node6.json)({ title, content, videoUrl });
};
function Lessons2() {
  let { title, content, videoUrl } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("main", { className: "relative mx-auto w-full max-w-7xl items-start border-t border-transparent lg:mt-16 2xl:flex 2xl:border-gray-800", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "flex flex-col border-gray-800 2xl:relative 2xl:h-full 2xl:w-full 2xl:border-r", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "relative flex w-full items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
      "iframe",
      {
        className: "w-full aspect-video",
        src: `${videoUrl}`,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: !0,
        title: "Embedded youtube"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
        lineNumber: 48,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
      lineNumber: 47,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "prose prose-amber max-w-6xl bg-white mx-auto p-8 rounded mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { children: title }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "div",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: (0, import_sanitize_html2.default)((0, import_marked2.marked)(content || ""))
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
          lineNumber: 60,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
      lineNumber: 58,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/$tutorialSlug/lessons/index.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/$tutorialSlug/index.tsx
var tutorialSlug_exports = {};
__export(tutorialSlug_exports, {
  CatchBoundary: () => CatchBoundary2,
  ErrorBoundary: () => ErrorBoundary2,
  default: () => Index,
  loader: () => loader5,
  meta: () => meta5
});
var import_node7 = require("@remix-run/node"), import_react7 = require("@remix-run/react");
var import_marked3 = require("marked"), import_react8 = require("@remix-run/react"), import_sanitize_html3 = __toESM(require("sanitize-html"));

// app/components/newsletter-signup.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function NewsletterSignup() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "p-6 max-w-2xl  mx-auto  flex flex-col items-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      "img",
      {
        src: "/images/envelop.png",
        alt: "Envelope with a newsletter",
        className: "h-full xl:w-full lg:w-1/2 w-full "
      },
      void 0,
      !1,
      {
        fileName: "app/components/newsletter-signup.tsx",
        lineNumber: 5,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/newsletter-signup.tsx",
      lineNumber: 4,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-amber-600 mb-4 text-center mt-4", children: "Subscribe" }, void 0, !1, {
        fileName: "app/components/newsletter-signup.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "text-base leading-normal text-white text-center xl:text-left", children: "Whether article spirits new her covered hastily sitting her. Money witty books nor son add." }, void 0, !1, {
        fileName: "app/components/newsletter-signup.tsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mt-12", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("form", { className: "flex items-stretch", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "input",
          {
            className: "bg-gray-100 rounded-lg rounded-r-none text-base leading-none text-gray-800 p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500",
            type: "email",
            placeholder: "Your Email"
          },
          void 0,
          !1,
          {
            fileName: "app/components/newsletter-signup.tsx",
            lineNumber: 21,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "w-32 rounded-l-none hover:bg-amber-600 bg-amber-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-700", children: "subscribe" }, void 0, !1, {
          fileName: "app/components/newsletter-signup.tsx",
          lineNumber: 26,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/newsletter-signup.tsx",
        lineNumber: 20,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/newsletter-signup.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/newsletter-signup.tsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/newsletter-signup.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/$tutorialSlug/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), meta5 = ({ data }) => {
  if (!data)
    return { title: "RubberGoose - Tutorial Not Found" };
  let { title } = data;
  return {
    title: `RubberGoose - Tutorial: ${title}`
  };
}, loader5 = async ({ params }) => {
  var _a;
  let tutorial = await contentfulClient.getEntries({
    content_type: "tutorial",
    "fields.slug": params.tutorialSlug
  });
  if (tutorial.items.length === 0)
    throw new Response("Not Found", {
      status: 404
    });
  let { lessons, title, content } = tutorial.items[0].fields;
  return (0, import_node7.json)({
    title,
    content,
    firstLessonSlug: (lessons && ((_a = lessons[0]) == null ? void 0 : _a.fields.slug)) ?? null
  });
};
function Index() {
  let { title, content, firstLessonSlug } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "prose prose-slate max-w-6xl bg-white mx-auto p-8 shadow shadow-slate-300 mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: title }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        "div",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: (0, import_sanitize_html3.default)((0, import_marked3.marked)(content || ""))
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
          lineNumber: 45,
          columnNumber: 9
        },
        this
      ),
      firstLessonSlug ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react8.Link,
        {
          to: `lessons/${firstLessonSlug}`,
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
          children: "Start Learning"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
          lineNumber: 52,
          columnNumber: 11
        },
        this
      ) : null
    ] }, void 0, !0, {
      fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
      lineNumber: 60,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function CatchBoundary2() {
  let caught = (0, import_react8.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "prose prose-amber max-w-6xl bg-white mx-auto p-8 rounded mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Page not found" }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Sorry, we couldn\u2019t find the page you\u2019re looking for." }, void 0, !1, {
        fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
        lineNumber: 72,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react8.Link,
        {
          to: "/",
          className: "rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
          children: "Go home"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
          lineNumber: 73,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
      lineNumber: 70,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
      lineNumber: 69,
      columnNumber: 7
    }, this);
  throw new Error(`Something went wrong: ${caught.status}`);
}
function ErrorBoundary2() {
  let { tutorialSlug } = (0, import_react8.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
      lineNumber: 91,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: `There was an error loading the tutorial page by the slug ${tutorialSlug}. Sorry.` }, void 0, !1, {
      fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
    lineNumber: 89,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tutorials/$tutorialSlug/index.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/index.tsx
var tutorials_exports = {};
__export(tutorials_exports, {
  ErrorBoundary: () => ErrorBoundary3,
  default: () => Index2,
  loader: () => loader6,
  meta: () => meta6
});
var import_node8 = require("@remix-run/node"), import_react10 = require("@remix-run/react");

// app/components/posts-list.tsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function PostsList({
  posts,
  baseRoute
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "py-12 max-w-6xl bg-white mx-auto p-8 shadow shadow-slate-300  mt-16", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mx-auto max-w-2xl lg:max-w-4xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-16 space-y-20 lg:mt-20 lg:space-y-20", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
    "article",
    {
      className: "relative isolate flex flex-col gap-8 lg:flex-row",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
            "img",
            {
              src: post.fields.featureImage.fields.file.url,
              alt: "",
              className: "absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
            },
            void 0,
            !1,
            {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 22,
              columnNumber: 19
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" }, void 0, !1, {
            fileName: "app/components/posts-list.tsx",
            lineNumber: 27,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/posts-list.tsx",
          lineNumber: 21,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "bg-gradient-to-l from-slate-100 via-white to-white rounded-xl p-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex items-center gap-x-4 text-xs", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "time",
              {
                dateTime: post.sys.createdAt,
                className: "text-gray-500",
                children: new Intl.DateTimeFormat("en-US", {
                  dateStyle: "long"
                }).format(new Date(post.sys.createdAt))
              },
              void 0,
              !1,
              {
                fileName: "app/components/posts-list.tsx",
                lineNumber: 31,
                columnNumber: 21
              },
              this
            ),
            post.fields.tags && post.fields.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "span",
              {
                className: "relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100",
                children: tag
              },
              tag,
              !1,
              {
                fileName: "app/components/posts-list.tsx",
                lineNumber: 41,
                columnNumber: 25
              },
              this
            ))
          ] }, void 0, !0, {
            fileName: "app/components/posts-list.tsx",
            lineNumber: 30,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "group relative max-w-xl", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h3", { className: "mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react9.Link, { to: `${baseRoute}/${post.fields.slug}`, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "absolute inset-0" }, void 0, !1, {
                fileName: "app/components/posts-list.tsx",
                lineNumber: 52,
                columnNumber: 25
              }, this),
              post.fields.title
            ] }, void 0, !0, {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 51,
              columnNumber: 23
            }, this) }, void 0, !1, {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 50,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "mt-5 text-sm leading-6 text-gray-600", children: post.fields.content.substring(0, 160) }, void 0, !1, {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 56,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/posts-list.tsx",
            lineNumber: 49,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "mt-6 flex border-t border-gray-900/5 pt-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "relative flex items-center gap-x-4", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
              "img",
              {
                src: `${post.fields.author.fields.avatar.fields.file.url}?w=50&h=50&fit=thumb`,
                alt: "",
                className: "h-10 w-10 rounded-full bg-gray-50"
              },
              void 0,
              !1,
              {
                fileName: "app/components/posts-list.tsx",
                lineNumber: 62,
                columnNumber: 23
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "text-sm leading-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { className: "font-semibold text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("a", { href: "#", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("span", { className: "absolute inset-0" }, void 0, !1, {
                fileName: "app/components/posts-list.tsx",
                lineNumber: 70,
                columnNumber: 29
              }, this),
              post.fields.author.fields.fullName
            ] }, void 0, !0, {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 69,
              columnNumber: 27
            }, this) }, void 0, !1, {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 68,
              columnNumber: 25
            }, this) }, void 0, !1, {
              fileName: "app/components/posts-list.tsx",
              lineNumber: 67,
              columnNumber: 23
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/posts-list.tsx",
            lineNumber: 61,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/posts-list.tsx",
            lineNumber: 60,
            columnNumber: 19
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/posts-list.tsx",
          lineNumber: 29,
          columnNumber: 17
        }, this)
      ]
    },
    post.sys.id,
    !0,
    {
      fileName: "app/components/posts-list.tsx",
      lineNumber: 17,
      columnNumber: 15
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/posts-list.tsx",
    lineNumber: 15,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/components/posts-list.tsx",
    lineNumber: 14,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/posts-list.tsx",
    lineNumber: 13,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/posts-list.tsx",
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

// app/routes/tutorials/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), meta6 = () => ({
  title: "RubberGoose - Tutorials"
});
async function loader6() {
  let tutorials = await contentfulClient.getEntries({
    content_type: "tutorial",
    order: "-sys.createdAt"
  });
  return (0, import_node8.json)({
    tutorials: tutorials.items
  });
}
function Index2() {
  let { tutorials } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl", children: "Latest Tutorials" }, void 0, !1, {
        fileName: "app/routes/tutorials/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("p", { className: "text-lg leading-8 text-white", children: "Checkout our latest Tutorials" }, void 0, !1, {
        fileName: "app/routes/tutorials/index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tutorials/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(PostsList, { baseRoute: "/tutorials", posts: tutorials }, void 0, !1, {
      fileName: "app/routes/tutorials/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/tutorials/index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function ErrorBoundary3({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/tutorials/index.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/tutorials/index.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/tutorials/index.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tutorials/index.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/tutorials/index.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tutorials/index.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/blog/$blogSlug.tsx
var blogSlug_exports = {};
__export(blogSlug_exports, {
  CatchBoundary: () => CatchBoundary3,
  ErrorBoundary: () => ErrorBoundary4,
  default: () => Index3,
  loader: () => loader7,
  meta: () => meta7
});
var import_node9 = require("@remix-run/node"), import_react11 = require("@remix-run/react");
var import_marked4 = require("marked"), import_sanitize_html4 = __toESM(require("sanitize-html")), import_react12 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), meta7 = ({ data }) => {
  var _a;
  if (!data)
    return { title: "RubberGoose - Blog Not Found" };
  let { post } = data;
  return {
    title: `RubberGoose - Blog: ${(_a = post == null ? void 0 : post.fields) == null ? void 0 : _a.title}`
  };
}, loader7 = async ({ params }) => {
  let post = await contentfulClient.getEntries({
    content_type: "post",
    "fields.slug": params.blogSlug
  });
  if (post.items.length === 0)
    throw new Response("Not Found", {
      status: 404
    });
  return (0, import_node9.json)({ post: post.items[0] });
};
function Index3() {
  let { post } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "prose prose-slate max-w-6xl bg-white mx-auto p-8 shadow shadow-slate-300 mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: [
        "Blog: ",
        post.fields.title
      ] }, void 0, !0, {
        fileName: "app/routes/blog/$blogSlug.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        "div",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: (0, import_sanitize_html4.default)((0, import_marked4.marked)(post.fields.content || ""))
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog/$blogSlug.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$blogSlug.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/blog/$blogSlug.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$blogSlug.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function CatchBoundary3() {
  let caught = (0, import_react12.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "prose prose-amber max-w-6xl bg-white mx-auto p-8 rounded mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { children: "Page not found" }, void 0, !1, {
        fileName: "app/routes/blog/$blogSlug.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { children: "Sorry, we couldn\u2019t find the page you\u2019re looking for." }, void 0, !1, {
        fileName: "app/routes/blog/$blogSlug.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react12.Link,
        {
          to: "/",
          className: "rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
          children: "Go home"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/blog/$blogSlug.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/blog/$blogSlug.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog/$blogSlug.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this);
  throw new Error(`Something went wrong: ${caught.status}`);
}
function ErrorBoundary4() {
  let { blogSlug } = (0, import_react12.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/blog/$blogSlug.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: `There was an error loading the blog post by the slug ${blogSlug}. Sorry.` }, void 0, !1, {
      fileName: "app/routes/blog/$blogSlug.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/$blogSlug.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/$blogSlug.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/$blogSlug.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/accessibility.tsx
var accessibility_exports = {};
__export(accessibility_exports, {
  default: () => Accessibility,
  meta: () => meta8
});
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), meta8 = () => ({
  title: "RubberGoose - Accessibility"
});
function Accessibility() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("main", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h1", { className: "text-4xl font-bold", children: "Accessibility" }, void 0, !1, {
    fileName: "app/routes/accessibility.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/accessibility.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/tips/$tipSlug.tsx
var tipSlug_exports = {};
__export(tipSlug_exports, {
  CatchBoundary: () => CatchBoundary4,
  ErrorBoundary: () => ErrorBoundary5,
  default: () => Index4,
  loader: () => loader8,
  meta: () => meta9
});
var import_node10 = require("@remix-run/node"), import_react13 = require("@remix-run/react");
var import_marked5 = require("marked"), import_sanitize_html5 = __toESM(require("sanitize-html")), import_react14 = require("@remix-run/react");
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta9 = ({ data }) => {
  if (!data)
    return { title: "RubberGoose - Tip Not Found" };
  let { tip } = data;
  return {
    title: `RubberGoose - Tip: ${tip.fields.title}`
  };
}, loader8 = async ({ params }) => {
  let tip = await contentfulClient.getEntries({
    content_type: "tip",
    "fields.slug": params.tipSlug
  });
  if (tip.items.length === 0)
    throw new Response("Not Found", {
      status: 404
    });
  return (0, import_node10.json)({ tip: tip.items[0] });
};
function Index4() {
  let { tip } = (0, import_react13.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "prose prose-slate max-w-6xl bg-white mx-auto p-8 shadow shadow-slate-300 mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: [
        "Blog: ",
        tip.fields.title
      ] }, void 0, !0, {
        fileName: "app/routes/tips/$tipSlug.tsx",
        lineNumber: 38,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        "div",
        {
          className: "mt-4",
          dangerouslySetInnerHTML: {
            __html: (0, import_sanitize_html5.default)((0, import_marked5.marked)(tip.fields.content || ""))
          }
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tips/$tipSlug.tsx",
          lineNumber: 39,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/tips/$tipSlug.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/tips/$tipSlug.tsx",
      lineNumber: 46,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tips/$tipSlug.tsx",
    lineNumber: 36,
    columnNumber: 5
  }, this);
}
function CatchBoundary4() {
  let caught = (0, import_react14.useCatch)();
  if (caught.status === 404)
    return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "prose prose-amber max-w-6xl bg-white mx-auto p-8 rounded mt-16 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { children: "Page not found" }, void 0, !1, {
        fileName: "app/routes/tips/$tipSlug.tsx",
        lineNumber: 57,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("p", { children: "Sorry, we couldn\u2019t find the page you\u2019re looking for." }, void 0, !1, {
        fileName: "app/routes/tips/$tipSlug.tsx",
        lineNumber: 58,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
        import_react14.Link,
        {
          to: "/",
          className: "rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600",
          children: "Go home"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/tips/$tipSlug.tsx",
          lineNumber: 59,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/tips/$tipSlug.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/tips/$tipSlug.tsx",
      lineNumber: 55,
      columnNumber: 7
    }, this);
  throw new Error(`Something went wrong: ${caught.status}`);
}
function ErrorBoundary5() {
  let { tipSlug } = (0, import_react14.useParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/tips/$tipSlug.tsx",
      lineNumber: 77,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: `There was an error loading the tip page by the slug ${tipSlug}. Sorry.` }, void 0, !1, {
      fileName: "app/routes/tips/$tipSlug.tsx",
      lineNumber: 78,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tips/$tipSlug.tsx",
    lineNumber: 76,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/tips/$tipSlug.tsx",
    lineNumber: 75,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tips/$tipSlug.tsx",
    lineNumber: 74,
    columnNumber: 5
  }, this);
}

// app/routes/healthcheck.tsx
var healthcheck_exports = {};
__export(healthcheck_exports, {
  loader: () => loader9
});
var loader9 = async ({ _request }) => {
  try {
    let url = new URL(`http://localhost:${process.env.PORT ?? 3e3}/`);
    return await Promise.all([
      db.user.count(),
      fetch(url.toString(), { method: "HEAD" }).then((r) => {
        if (!r.ok)
          return Promise.reject(r);
      })
    ]), new Response("OK");
  } catch (error) {
    return console.log("healthcheck \u274C", { error }), new Response("ERROR", { status: 500 });
  }
};

// app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  ErrorBoundary: () => ErrorBoundary6,
  default: () => Index5,
  loader: () => loader10,
  meta: () => meta10
});
var import_node11 = require("@remix-run/node"), import_react15 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), meta10 = () => ({
  title: "RubberGoose - Blog"
});
async function loader10() {
  let posts = await contentfulClient.getEntries({
    content_type: "post",
    order: "-sys.createdAt"
  });
  return (0, import_node11.json)({
    posts: posts.items
  });
}
function Index5() {
  let { posts } = (0, import_react15.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl", children: "From The blog" }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-lg leading-8 text-white", children: "Checkout our latest blog post entries" }, void 0, !1, {
        fileName: "app/routes/blog/index.tsx",
        lineNumber: 32,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(PostsList, { baseRoute: "/blog", posts }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
function ErrorBoundary6({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 47,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 49,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/blog/index.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 46,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 45,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/blog/index.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, this);
}

// app/routes/tips/index.tsx
var tips_exports = {};
__export(tips_exports, {
  ErrorBoundary: () => ErrorBoundary7,
  default: () => Index6,
  loader: () => loader11,
  meta: () => meta11
});
var import_node12 = require("@remix-run/node"), import_react16 = require("@remix-run/react");
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta11 = () => ({
  title: "RubberGoose - Tips"
});
async function loader11() {
  let tips = await contentfulClient.getEntries({
    content_type: "tip",
    order: "-sys.createdAt"
  });
  return (0, import_node12.json)({
    tips: tips.items
  });
}
function Index6() {
  let { tips } = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-4xl font-bold tracking-tight text-amber-600 sm:text-6xl", children: "Hot Tips just out of the oven" }, void 0, !1, {
        fileName: "app/routes/tips/index.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("p", { className: "text-lg leading-8 text-white", children: "Checkout our latest hottest tips" }, void 0, !1, {
        fileName: "app/routes/tips/index.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/tips/index.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(PostsList, { baseRoute: "/tips", posts: tips }, void 0, !1, {
      fileName: "app/routes/tips/index.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/tips/index.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tips/index.tsx",
    lineNumber: 28,
    columnNumber: 5
  }, this);
}
function ErrorBoundary7({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/tips/index.tsx",
      lineNumber: 48,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/tips/index.tsx",
      lineNumber: 50,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/tips/index.tsx",
      lineNumber: 49,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tips/index.tsx",
    lineNumber: 47,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/tips/index.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/tips/index.tsx",
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

// app/routes/dashboard.tsx
var dashboard_exports = {};
__export(dashboard_exports, {
  ErrorBoundary: () => ErrorBoundary8,
  default: () => Dashboard,
  loader: () => loader12,
  meta: () => meta12
});
var import_node13 = require("@remix-run/node"), import_react17 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), meta12 = () => ({
  title: "RubberGoose - Dashboard"
}), loader12 = async ({ request }) => {
  let userId = await requireUserId(request);
  return (0, import_node13.json)({ userId });
};
function Dashboard() {
  let { userId } = (0, import_react17.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("main", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-4xl font-bold", children: [
    "Dashboard user id: ",
    userId
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 18,
    columnNumber: 5
  }, this);
}
function ErrorBoundary8({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4 mx-auto w-full mt-16 max-w-5xl", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 29,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 31,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/dashboard.tsx",
      lineNumber: 30,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 28,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/dashboard.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  action: () => action,
  loader: () => loader13
});
var import_node14 = require("@remix-run/node");
var action = async ({ request }) => logout(request), loader13 = async () => (0, import_node14.redirect)("/");

// app/routes/about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => About,
  meta: () => meta13
});
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), meta13 = () => ({
  title: "RubberGoose - About"
});
function About() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("main", { className: "container mx-auto p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { className: "text-4xl font-bold", children: "About" }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/about.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  ErrorBoundary: () => ErrorBoundary9,
  default: () => Index7,
  loader: () => loader14,
  meta: () => meta14
});
var import_node15 = require("@remix-run/node"), import_react19 = require("@remix-run/react");

// app/components/blog-collection.tsx
var import_react18 = require("@remix-run/react"), import_jsx_dev_runtime18 = require("react/jsx-dev-runtime");
function BlogCollection({
  posts,
  title,
  description,
  baseRoute
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative mt-32 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "absolute inset-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "bg-gradient-to-b from-slate-300 via-white to-white h-1/3 bg-white sm:h-2/3 rounded-xl" }, void 0, !1, {
      fileName: "app/components/blog-collection.tsx",
      lineNumber: 18,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/blog-collection.tsx",
      lineNumber: 17,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "relative mx-auto max-w-7xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h2", { className: "text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl", children: title }, void 0, !1, {
          fileName: "app/components/blog-collection.tsx",
          lineNumber: 22,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4", children: description }, void 0, !1, {
          fileName: "app/components/blog-collection.tsx",
          lineNumber: 25,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/blog-collection.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "div",
        {
          className: "flex flex-col overflow-hidden rounded-lg shadow-lg shadow-slate-900",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
              "img",
              {
                className: "h-48 w-full object-cover",
                src: post.fields.featureImage.fields.file.url,
                alt: ""
              },
              void 0,
              !1,
              {
                fileName: "app/components/blog-collection.tsx",
                lineNumber: 36,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/components/blog-collection.tsx",
              lineNumber: 35,
              columnNumber: 15
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-1 flex-col justify-between bg-white p-6", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex-1", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-sm font-medium text-amber-600", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("a", { href: "#", className: "hover:underline", children: "Category" }, void 0, !1, {
                  fileName: "app/components/blog-collection.tsx",
                  lineNumber: 45,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/blog-collection.tsx",
                  lineNumber: 44,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                  import_react18.Link,
                  {
                    to: `${baseRoute}/${post.fields.slug}`,
                    className: "mt-2 block",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-xl font-semibold text-gray-900", children: post.fields.title }, void 0, !1, {
                        fileName: "app/components/blog-collection.tsx",
                        lineNumber: 53,
                        columnNumber: 21
                      }, this),
                      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "mt-3 text-base text-gray-500", children: post.fields.content.substring(0, 160) }, void 0, !1, {
                        fileName: "app/components/blog-collection.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                      }, this)
                    ]
                  },
                  void 0,
                  !0,
                  {
                    fileName: "app/components/blog-collection.tsx",
                    lineNumber: 49,
                    columnNumber: 19
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/blog-collection.tsx",
                lineNumber: 43,
                columnNumber: 17
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "mt-6 flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex-shrink-0", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("a", { href: "#", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "sr-only", children: post.fields.author.fields.fullName }, void 0, !1, {
                    fileName: "app/components/blog-collection.tsx",
                    lineNumber: 64,
                    columnNumber: 23
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                    "img",
                    {
                      className: "h-10 w-10 rounded-full",
                      src: `https:${post.fields.author.fields.avatar.fields.file.url}?w=50&h=50&fit=thumb&q=100`,
                      alt: post.fields.author.fields.fullName
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/blog-collection.tsx",
                      lineNumber: 67,
                      columnNumber: 23
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/blog-collection.tsx",
                  lineNumber: 63,
                  columnNumber: 21
                }, this) }, void 0, !1, {
                  fileName: "app/components/blog-collection.tsx",
                  lineNumber: 62,
                  columnNumber: 19
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "ml-3", children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-sm font-medium text-gray-900", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("a", { href: "#", className: "hover:underline", children: post.fields.author.fields.fullName }, void 0, !1, {
                    fileName: "app/components/blog-collection.tsx",
                    lineNumber: 76,
                    columnNumber: 23
                  }, this) }, void 0, !1, {
                    fileName: "app/components/blog-collection.tsx",
                    lineNumber: 75,
                    columnNumber: 21
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex space-x-1 text-sm text-gray-500", children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("time", { dateTime: post.sys.createdAt, children: new Intl.DateTimeFormat("en-US", {
                      dateStyle: "long"
                    }).format(new Date(post.sys.createdAt)) }, void 0, !1, {
                      fileName: "app/components/blog-collection.tsx",
                      lineNumber: 81,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { "aria-hidden": "true", children: "\xB7" }, void 0, !1, {
                      fileName: "app/components/blog-collection.tsx",
                      lineNumber: 86,
                      columnNumber: 23
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { children: "2min read" }, void 0, !1, {
                      fileName: "app/components/blog-collection.tsx",
                      lineNumber: 87,
                      columnNumber: 23
                    }, this)
                  ] }, void 0, !0, {
                    fileName: "app/components/blog-collection.tsx",
                    lineNumber: 80,
                    columnNumber: 21
                  }, this)
                ] }, void 0, !0, {
                  fileName: "app/components/blog-collection.tsx",
                  lineNumber: 74,
                  columnNumber: 19
                }, this)
              ] }, void 0, !0, {
                fileName: "app/components/blog-collection.tsx",
                lineNumber: 61,
                columnNumber: 17
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/blog-collection.tsx",
              lineNumber: 42,
              columnNumber: 15
            }, this)
          ]
        },
        post.fields.slug,
        !0,
        {
          fileName: "app/components/blog-collection.tsx",
          lineNumber: 31,
          columnNumber: 13
        },
        this
      )) }, void 0, !1, {
        fileName: "app/components/blog-collection.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/blog-collection.tsx",
      lineNumber: 20,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/blog-collection.tsx",
    lineNumber: 16,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), meta14 = () => ({
  title: "RubberGoose - Learn Web Development"
});
async function loader14() {
  let posts = await contentfulClient.getEntries({
    limit: 3,
    content_type: "post",
    order: "-sys.createdAt"
  }), tutorials = await contentfulClient.getEntries({
    limit: 3,
    content_type: "tutorial",
    order: "-sys.createdAt"
  }), tips = await contentfulClient.getEntries({
    limit: 3,
    content_type: "tip",
    order: "-sys.createdAt"
  });
  return (0, import_node15.json)({
    posts: posts.items,
    tutorials: tutorials.items,
    tips: tips.items
  });
}
function Index7() {
  let { posts, tips, tutorials } = (0, import_react19.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("main", { className: "container mx-auto p-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-wrap-reverse mt-16 items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-full md:w-2/3", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-6xl font-bold text-amber-600 max-w-xl md:max-w-2xl", children: "Build Real World Projects To Learn Web Development" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 45,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-xl py-4 max-w-xl md:max-w-2xl", children: "Here at RubberGoose, we think getting your hands dirty is the greatest way to learn web programming. You can improve your abilities and self-assurance one project at a time with the help of our tutorials." }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 44,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-full md:w-1/3 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("img", { src: "/images/rubbergoose-glow.png", alt: "Rubber Goose" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 56,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 55,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "max-w-3xl mx-auto text-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "my-8", children: "At RubberGoose, it's our goal to offer students a fun and informative way to learn what they need to know to become successful web developers. Developing real-world projects is how we teach web programming because we know that's the best way to learn." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 60,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Tutorials on our site are made to guide you through the entire process of creating a practical application. Working on projects that you can be proud of adding to your portfolio is a great way to master the core concepts, tools, and approaches for web development." }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 59,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      BlogCollection,
      {
        baseRoute: "tutorials",
        posts: tutorials,
        title: "Latest Tutorials",
        description: "Checkout our latest Tutorials"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 73,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      BlogCollection,
      {
        baseRoute: "blog",
        posts,
        title: "From The Blog",
        description: "Checkout our latest blog post entries"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 79,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      BlogCollection,
      {
        baseRoute: "tips",
        posts: tips,
        title: "Hot Tips just out of the oven",
        description: "Checkout our latest hottest tips"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/index.tsx",
        lineNumber: 85,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(NewsletterSignup, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
function ErrorBoundary9({ error }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "rounded-md bg-red-50 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "ml-3", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h1", { className: "text-sm font-medium text-red-800", children: "Oups" }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 101,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "mt-2 text-sm text-red-700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("pre", { children: error.message }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 103,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 102,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 100,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 99,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 98,
    columnNumber: 5
  }, this);
}

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action2,
  default: () => Login
});
var import_react20 = require("@remix-run/react");

// app/utils/request.server.ts
var import_node16 = require("@remix-run/node"), badRequest = (data) => (0, import_node16.json)(data, { status: 400 });

// app/routes/login.tsx
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime");
function validateUsername(username) {
  if (typeof username != "string" || username.length < 3)
    return "Usernames must be at least 3 characters long";
}
function validatePassword(password) {
  if (typeof password != "string" || password.length < 6)
    return "Passwords must be at least 6 characters long";
}
function validateUrl(url) {
  return ["/dashboard", "/", "https://rubbergoose.dev"].includes(url) ? url : "/";
}
var action2 = async ({ request }) => {
  let form = await request.formData(), loginType = form.get("loginType"), username = form.get("username"), password = form.get("password"), redirectTo = validateUrl(
    form.get("redirectTo") || "/dashboard"
  );
  if (typeof loginType != "string" || typeof username != "string" || typeof password != "string" || typeof redirectTo != "string")
    return badRequest({
      fieldErrors: null,
      fields: null,
      formError: "Form not submitted correctly."
    });
  let fields = { loginType, username, password }, fieldErrors = {
    username: validateUsername(username),
    password: validatePassword(password)
  };
  if (Object.values(fieldErrors).some(Boolean))
    return badRequest({
      fieldErrors,
      fields,
      formError: null
    });
  switch (loginType) {
    case "login": {
      let user = await login({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Username/Password combination is incorrect"
      });
    }
    case "register": {
      if (await db.user.findFirst({
        where: { username }
      }))
        return badRequest({
          fieldErrors: null,
          fields,
          formError: `User with username ${username} already exists`
        });
      let user = await register({ username, password });
      return user ? createUserSession(user.id, redirectTo) : badRequest({
        fieldErrors: null,
        fields,
        formError: "Something went wrong trying to create a new user."
      });
    }
    default:
      return badRequest({
        fieldErrors: null,
        fields,
        formError: "Login type invalid"
      });
  }
};
function Login() {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  let [searchParams] = (0, import_react20.useSearchParams)(), actionData = (0, import_react20.useActionData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "w-full max-w-md space-y-8", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "img",
        {
          className: "mx-auto h-24 w-auto",
          src: "/images/rubbergoose-glow.png",
          alt: "Your Company"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 117,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "mt-6 text-center text-3xl font-bold tracking-tight", children: "Sign in to your account" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 122,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 116,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "content", "data-light": "", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("form", { method: "post", className: "mt-8 space-y-6", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "input",
        {
          type: "hidden",
          name: "redirectTo",
          value: searchParams.get("redirectTo") ?? void 0
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 128,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("fieldset", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("legend", { className: "sr-only", children: "Login or Register?" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 134,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "radio",
              name: "loginType",
              value: "login",
              defaultChecked: !((_a = actionData == null ? void 0 : actionData.fields) != null && _a.loginType) || ((_b = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _b.loginType) === "login"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 136,
              columnNumber: 19
            },
            this
          ),
          " ",
          "Login"
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 135,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
            "input",
            {
              type: "radio",
              name: "loginType",
              value: "register",
              defaultChecked: ((_c = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _c.loginType) === "register"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 148,
              columnNumber: 19
            },
            this
          ),
          " ",
          "Register"
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 147,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 133,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "username-input", children: "Username" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 160,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "input",
          {
            type: "text",
            className: "relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm",
            id: "username-input",
            name: "username",
            defaultValue: (_d = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _d.username,
            "aria-invalid": Boolean((_e = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _e.username),
            "aria-errormessage": (_f = actionData == null ? void 0 : actionData.fieldErrors) != null && _f.username ? "username-error" : void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 161,
            columnNumber: 17
          },
          this
        ),
        (_g = actionData == null ? void 0 : actionData.fieldErrors) != null && _g.username ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "p",
          {
            className: "text-red-500 text-xs italic",
            role: "alert",
            id: "username-error",
            children: actionData.fieldErrors.username
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 175,
            columnNumber: 19
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 159,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("label", { htmlFor: "password-input", children: "Password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 185,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "input",
          {
            className: "relative block w-full appearance-none border rounded-md border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-amber-500 focus:outline-none focus:ring-amber-500 sm:text-sm",
            id: "password-input",
            name: "password",
            type: "password",
            defaultValue: (_h = actionData == null ? void 0 : actionData.fields) == null ? void 0 : _h.password,
            "aria-invalid": Boolean((_i = actionData == null ? void 0 : actionData.fieldErrors) == null ? void 0 : _i.password),
            "aria-errormessage": (_j = actionData == null ? void 0 : actionData.fieldErrors) != null && _j.password ? "password-error" : void 0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 186,
            columnNumber: 17
          },
          this
        ),
        (_k = actionData == null ? void 0 : actionData.fieldErrors) != null && _k.password ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          "p",
          {
            className: "text-red-500 text-xs italic",
            role: "alert",
            id: "password-error",
            children: actionData.fieldErrors.password
          },
          void 0,
          !1,
          {
            fileName: "app/routes/login.tsx",
            lineNumber: 200,
            columnNumber: 19
          },
          this
        ) : null
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 184,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { id: "form-error-message", children: actionData != null && actionData.formError ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("p", { className: "text-red-500 text-xs italic", role: "alert", children: actionData.formError }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 211,
        columnNumber: 19
      }, this) : null }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 209,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "group relative flex w-full justify-center rounded-md border border-transparent bg-amber-600 py-2 px-4 text-sm font-medium text-white hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2",
          children: "Submit"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 216,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 127,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 126,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "links", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react20.Link, { to: "/", children: "Home" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 227,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 226,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react20.Link, { to: "/dashboard", children: "Dashboard" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 230,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 229,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 225,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 224,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 115,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 113,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "530b7961", entry: { module: "/build/entry.client-AKGBRJPN.js", imports: ["/build/_shared/chunk-ZILJEIQT.js", "/build/_shared/chunk-7A5WPARO.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-SFESRFBL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-YYOTS5PK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/accessibility": { id: "routes/accessibility", parentId: "root", path: "accessibility", index: void 0, caseSensitive: void 0, module: "/build/routes/accessibility-YZMQF4DE.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog/$blogSlug": { id: "routes/blog/$blogSlug", parentId: "root", path: "blog/:blogSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/blog/$blogSlug-YYTFUA7L.js", imports: ["/build/_shared/chunk-XOVUBN7N.js", "/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/blog/index": { id: "routes/blog/index", parentId: "root", path: "blog", index: !0, caseSensitive: void 0, module: "/build/routes/blog/index-YT2FM3EI.js", imports: ["/build/_shared/chunk-7GMBKQEJ.js", "/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-6WRYQ4CA.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/healthcheck": { id: "routes/healthcheck", parentId: "root", path: "healthcheck", index: void 0, caseSensitive: void 0, module: "/build/routes/healthcheck-FO75TDAZ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-E5OUMYVR.js", imports: ["/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-WPCX75UK.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-TLBEXFRQ.js", imports: void 0, hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tips/$tipSlug": { id: "routes/tips/$tipSlug", parentId: "root", path: "tips/:tipSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/tips/$tipSlug-CDJIGXD3.js", imports: ["/build/_shared/chunk-XOVUBN7N.js", "/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/tips/index": { id: "routes/tips/index", parentId: "root", path: "tips", index: !0, caseSensitive: void 0, module: "/build/routes/tips/index-4XC5BYZD.js", imports: ["/build/_shared/chunk-7GMBKQEJ.js", "/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/tutorials/$tutorialSlug/index": { id: "routes/tutorials/$tutorialSlug/index", parentId: "root", path: "tutorials/:tutorialSlug", index: !0, caseSensitive: void 0, module: "/build/routes/tutorials/$tutorialSlug/index-X6QR7DEU.js", imports: ["/build/_shared/chunk-XOVUBN7N.js", "/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/tutorials/$tutorialSlug/lessons": { id: "routes/tutorials/$tutorialSlug/lessons", parentId: "root", path: "tutorials/:tutorialSlug/lessons", index: void 0, caseSensitive: void 0, module: "/build/routes/tutorials/$tutorialSlug/lessons-DFYIKARX.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tutorials/$tutorialSlug/lessons/$lessonSlug": { id: "routes/tutorials/$tutorialSlug/lessons/$lessonSlug", parentId: "routes/tutorials/$tutorialSlug/lessons", path: ":lessonSlug", index: void 0, caseSensitive: void 0, module: "/build/routes/tutorials/$tutorialSlug/lessons/$lessonSlug-37JGJ7A3.js", imports: ["/build/_shared/chunk-XOVUBN7N.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tutorials/$tutorialSlug/lessons/index": { id: "routes/tutorials/$tutorialSlug/lessons/index", parentId: "routes/tutorials/$tutorialSlug/lessons", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/tutorials/$tutorialSlug/lessons/index-RGIEY32F.js", imports: ["/build/_shared/chunk-XOVUBN7N.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tutorials/index": { id: "routes/tutorials/index", parentId: "root", path: "tutorials", index: !0, caseSensitive: void 0, module: "/build/routes/tutorials/index-XPEY3KFR.js", imports: ["/build/_shared/chunk-7GMBKQEJ.js", "/build/_shared/chunk-YNF7SNCQ.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !0 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-530B7961.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !0, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/tutorials/$tutorialSlug/lessons": {
    id: "routes/tutorials/$tutorialSlug/lessons",
    parentId: "root",
    path: "tutorials/:tutorialSlug/lessons",
    index: void 0,
    caseSensitive: void 0,
    module: lessons_exports
  },
  "routes/tutorials/$tutorialSlug/lessons/$lessonSlug": {
    id: "routes/tutorials/$tutorialSlug/lessons/$lessonSlug",
    parentId: "routes/tutorials/$tutorialSlug/lessons",
    path: ":lessonSlug",
    index: void 0,
    caseSensitive: void 0,
    module: lessonSlug_exports
  },
  "routes/tutorials/$tutorialSlug/lessons/index": {
    id: "routes/tutorials/$tutorialSlug/lessons/index",
    parentId: "routes/tutorials/$tutorialSlug/lessons",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: lessons_exports2
  },
  "routes/tutorials/$tutorialSlug/index": {
    id: "routes/tutorials/$tutorialSlug/index",
    parentId: "root",
    path: "tutorials/:tutorialSlug",
    index: !0,
    caseSensitive: void 0,
    module: tutorialSlug_exports
  },
  "routes/tutorials/index": {
    id: "routes/tutorials/index",
    parentId: "root",
    path: "tutorials",
    index: !0,
    caseSensitive: void 0,
    module: tutorials_exports
  },
  "routes/blog/$blogSlug": {
    id: "routes/blog/$blogSlug",
    parentId: "root",
    path: "blog/:blogSlug",
    index: void 0,
    caseSensitive: void 0,
    module: blogSlug_exports
  },
  "routes/accessibility": {
    id: "routes/accessibility",
    parentId: "root",
    path: "accessibility",
    index: void 0,
    caseSensitive: void 0,
    module: accessibility_exports
  },
  "routes/tips/$tipSlug": {
    id: "routes/tips/$tipSlug",
    parentId: "root",
    path: "tips/:tipSlug",
    index: void 0,
    caseSensitive: void 0,
    module: tipSlug_exports
  },
  "routes/healthcheck": {
    id: "routes/healthcheck",
    parentId: "root",
    path: "healthcheck",
    index: void 0,
    caseSensitive: void 0,
    module: healthcheck_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: !0,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/tips/index": {
    id: "routes/tips/index",
    parentId: "root",
    path: "tips",
    index: !0,
    caseSensitive: void 0,
    module: tips_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
