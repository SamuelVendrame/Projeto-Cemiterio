import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Admin from "./pages/Admin.tsx"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App;