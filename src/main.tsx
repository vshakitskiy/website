import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import RootLayout from "layout"
import HomePage from "pages/home"
import "index.css"
import { ThemeProvider } from "components/providers/theme"
import ProjectsPage from "pages/projects"
import TechnologiesPage from "pages/technologies"
import EtcPage from "pages/etc"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/technologies",
        element: <TechnologiesPage />,
      },
      {
        path: "/etc",
        element: <EtcPage />,
      },
      {
        path: "/*",
        element: <></>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
)
