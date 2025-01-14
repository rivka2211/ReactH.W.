import { RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './commponent/HomePage'
import AppLayout from './commponent/movingComp/AppLayout'
import { myRouter } from './Router'

function App() {

  return (
    <>
     <HomePage/>
     <RouterProvider router={myRouter} />
    </>
  )
}

export default App
