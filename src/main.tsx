import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import '@/index.css'

import HomePage from './components/pages/home.page'
import CommoditiesPage from '@/components/pages/commodities.page'
import ErrorPage from '@/components/pages/error.page'
import NavSidebar from '@/components/pages/nav-sidebar'

/**
 * Create a new instance of the QueryClient.
 * QueryClient is used for managing and caching server-state in the application.
 * This includes data fetched from the server, data fetched and managed by React Query,
 * and data fetched and managed by the user application.
 */
const queryClient = new QueryClient()

/**
 * Create a new router.
 * The router is responsible for managing the navigation state of the application.
 * It defines the routes of the application and the components that should be rendered for each route.
 */
const router = createBrowserRouter([
  /**
   * Define a route for the root path ('/').
   * The root path consists of a navigation sidebar, a home page, and a commodities page.
   */
  {
    path: '/',
    element: <NavSidebar />, // Render the navigation sidebar on the root path
    children: [
      {
        path: '', // Render the home page on the root path
        element: <HomePage />,
      },
      {
        path: '/commodities', // Render the commodities page on the '/commodities' path
        element: <CommoditiesPage />,
      },
    ],
    /**
     * Define an error page to be rendered when an error occurs.
     * The error page will be rendered when the path matches but the element or children throw an error.
     */
    errorElement: <ErrorPage />,
  },
])

/**
 * Render the application in the root element of the HTML document.
 * Wrap the application with the QueryClientProvider and RouterProvider components.
 * The QueryClientProvider provides the QueryClient to all components in the application.
 * The RouterProvider provides the router to all components in the application.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* Wrap the application with the QueryClientProvider */}
    <QueryClientProvider client={queryClient}>
      {/* Wrap the application with the RouterProvider */}
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)

