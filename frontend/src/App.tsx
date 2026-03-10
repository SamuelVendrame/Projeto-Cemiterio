import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home.tsx"
import Admin from "./pages/Admin.tsx"
import Footer from "./components/footer/Footer.tsx"

const App = () => {
  return (
     <div className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default App;