import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AddJournalPage from "./components/pages/AddJournalPage"
import SignInPage from "./components/pages/SignIn"
import SignUpPage from "./components/pages/SignUp"
import JournalUser from "./components/pages/JournalUser"

const router = createBrowserRouter([
  { path: '/', element: <AddJournalPage /> },
  { path: '/signin', element: <SignInPage /> },
  { path: '/signup', element: <SignUpPage /> },
  { path: '/journal', element: <JournalUser /> }
])

const generateRandom = Math.floor(Math.random() * (98 - 60 + 1)) + 60;
console.log(generateRandom)

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App