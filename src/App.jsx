import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddJournalPage from "./components/pages/AddJournalPage"
import SignInPage from "./components/pages/SignIn"
import SignUpPage from "./components/pages/signUp"

const router = createBrowserRouter([
  { path: '/', element: <AddJournalPage /> },
  { path: '/signin', element: <SignInPage /> },
  { path: '/signup', element: <SignUpPage /> }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App