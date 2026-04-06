import type { SidebarSection } from "./types";

const brandName = { full: "The News Bureau", short: "TNB" };

const paths = {
  articles: {
    id: "articles",
    href: "/articles",
  },
  users: {
    id: "users",
    href: "/users",
  },
  myArticles: {
    id: "my-articles",
    href: "/users/articles",
  },
  apiDocs: {
    id: "api-docs",
    href: "http://localhost:4000/api-docs",
  },
};

export const items: SidebarSection[] = [
  {
    id: "primary",
    className: "space-y-2",
    items: [
      {
        id: "overview",
        kind: "link",
        label: brandName.short,
        to: "/",
        icon: (
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            aria-hidden="true"
          >
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="5"
              ry="10"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <ellipse
              cx="12"
              cy="12"
              rx="10"
              ry="5"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="2"
              y1="12"
              x2="22"
              y2="12"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        ),
      },
      {
        id: "pages",
        kind: "link",
        label: "All Articles",
        to: paths.articles.href,
        icon: (
          <svg
            aria-hidden="true"
            className="shrink-0 w-6 h-6 transition duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        id: "articles",
        kind: "link",
        label: "My Articles",
        to: paths.myArticles.href,
        icon: (
          <svg
            aria-hidden="true"
            className="shrink-0 w-6 h-6 transition duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        id: "account",
        kind: "group",
        label: "Account",
        submenuId: "dropdown-account",
        icon: (
          <svg
            aria-hidden="true"
            className="shrink-0 w-6 h-6 transition duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
        children: [
          { id: "find-users", label: "Find users", to: paths.users.href },
          { id: "logout", label: "Log out", to: "#" },
        ],
      },
    ],
  },
  {
    id: "secondary",
    className:
      "pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700",
    items: [
      {
        id: "docs",
        kind: "link",
        label: "Docs",
        to: paths.apiDocs.href,
        icon: (
          <svg
            aria-hidden="true"
            className="shrink-0 w-6 h-6 transition duration-200"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            ></path>
          </svg>
        ),
      },
      {
        id: "help",
        kind: "link",
        label: "Help",
        to: "/help",
        icon: (
          <svg
            aria-hidden="true"
            className="shrink-0 w-6 h-6 transition duration-200"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2.75a7 7 0 0 0-4.68 12.2c.7.62 1.18 1.4 1.38 2.3.08.35.38.6.74.6h5.16c.36 0 .66-.25.74-.6.2-.9.68-1.68 1.38-2.3A7 7 0 0 0 12 2.75Z" />
            <path d="M9 18.5a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 .75.75V19a3 3 0 0 1-6 0v-.5Z" />
            <path d="M9.5 20.75a2.5 2.5 0 0 0 5 0h-5Z" />
            <path d="M10.2 10.3a.75.75 0 1 1 1.06-1.06L12 9.98l.74-.74a.75.75 0 1 1 1.06 1.06L13 11.1v1.15a.75.75 0 0 1-1.5 0V11.1l-1.3-.8Z" />
          </svg>
        ),
      },
    ],
  },
];
