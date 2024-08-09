import { Link, Outlet, useLocation } from 'react-router-dom'
import { HomeIcon, ListBulletIcon } from '@radix-ui/react-icons'

import { cn } from '@/helpers/utils.ts'

/**
 * The NavSidebar component is a sidebar that displays the navigation links for the application.
 * It is a part of the layout and is rendered on all pages.
 */
export default function NavSidebar() {
  // Get the current location from the react-router-dom library
  const location = useLocation()

  return (
    // The main container for the sidebar and content
    <div className="flex">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-screen w-[269px] overflow-auto bg-secondary p-8">
        {/* The navigation links container */}
        <div className="flex flex-col space-y-16">
          {/* The application title */}
          <h1 className="pl-4">
            <span className="text-cyan-600 font-bold">Clepher StockApp</span>
          </h1>
          {/* The navigation links */}
          <div className="flex flex-col space-y-6 pl-4">
            {/* The link to the home page */}
            <Link
              to={`/`}
              className={cn(
                'flex items-center space-x-4 text-sm font-semibold',
                // Apply the active styles if the current path is the home page
                location.pathname === '/'
                  ? 'text-secondary-foreground'
                  : 'text-secondary-muted',
              )}
            >
              <HomeIcon />
              <span>Home</span>
            </Link>
            {/* The link to the commodities page */}
            <Link
              to={`/commodities`}
              className={cn(
                  'flex items-center space-x-4 text-sm font-semibold',
                  // Apply the active styles if the current path is the commodities page
                  location.pathname === '/commodities'
                    ? 'text-secondary-foreground'
                    : 'text-secondary-muted',
                )}
            >
              <ListBulletIcon />
              <span>Commodities</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="ml-[269px] h-screen flex-grow overflow-auto p-6">
        {/* The main content of the page */}
        <Outlet />
      </div>
    </div>
  )
}
