import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ExpProvider } from "./context/Expanse"
import Dashboard from "./pages/Dashboard"
import GettingStarted from "./pages/GettingStarted"
import Login from "./pages/Login"


function App() {

  const router = createBrowserRouter([
    {
      path: '/expanse-tracker',
      element: <GettingStarted />
    },
    {
      path: '/expanse-tracker/login',
      element: <Login />
    },
    {
      path: '/expanse-tracker/dashboard',
      element: <Dashboard />
    },
  ])

  return (
    <>
    <ExpProvider>
        <RouterProvider router={router} />
    </ExpProvider>
    </>
  )
}

export default App
