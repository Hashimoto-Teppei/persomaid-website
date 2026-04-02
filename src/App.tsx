import { createBrowserRouter, RouterProvider } from "react-router"

import { HomePage } from "./pages/HomePage"
import { NotFoundPage } from "./pages/NotFoundPage"
import { PrivacyPolicyPage } from "./pages/PrivacyPolicyPage"
import { TermsPage } from "./pages/TermsPage"

const router = createBrowserRouter(
  [
    { path: "/", element: <HomePage /> },
    { path: "/privacy", element: <PrivacyPolicyPage /> },
    { path: "/terms", element: <TermsPage /> },
    { path: "*", element: <NotFoundPage /> },
  ],
  { basename: import.meta.env.BASE_URL },
)

export default function App() {
  return <RouterProvider router={router} />
}
