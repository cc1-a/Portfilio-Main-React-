import { BrowserRouter, Routes, Route} from "react-router-dom"
import { Home } from "./pages/home"
import { notFound } from "./pages/notFound"

function App() {


  return (
    <>
      <BrowserRouter>

      <Routes>
        <Route index element={<Home/>}/>
        <Route path="*"  element={<notFound/>}/>
      </Routes>

      </BrowserRouter>
    </>
  )
}

export default App
