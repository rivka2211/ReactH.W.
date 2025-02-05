import { RouterProvider } from 'react-router-dom'
import './App.css'
import { myRouter } from './Router'
import { initialUser, UserContext, UserReducer } from './commponent/UserReducer'
import { useReducer } from 'react'
import AppLayout from './commponent/AppLayout'
import HomePage from './commponent/HomePage'

function App() {
  const [state, dispatch] = useReducer(UserReducer, initialUser);

  return (
    <>
      <UserContext value={[state, dispatch]}>
      <RouterProvider router={myRouter} />
        <HomePage/>
      </UserContext>
    </>
  )
}

export default App
