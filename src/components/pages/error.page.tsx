import { useRouteError } from 'react-router-dom'

import { TRouterError } from '@/helpers/types'

/**
 * ErrorPage component displays an error message when an unexpected error occurs.
 * It uses the useRouteError hook from react-router-dom to get the error object.
 * The error object contains the status code, status text, and error message.
 * The component logs the error object to the console and displays the error message to the user.
 * @returns {JSX.Element} The JSX element that displays the error message.
 */
export default function ErrorPage() {
  // Get the error object using the useRouteError hook
  const error: TRouterError = useRouteError() as TRouterError

  // Log the error object to the console
  console.error(error)

  return (
    // JSX element that displays the error message
    <div id="error-page" className={`text-center pt-40 text-2xl`}>
      {/* Heading that displays "Oops!" */}
      <h1>Oops!</h1>

      {/* Paragraph that displays the error message */}
      <p>Sorry, an unexpected error has occurred.</p>

      {/* Paragraph that displays the status text or message from the error object */}
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
