import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Components/navbar';
import Hero from './pages/hero';
import ErrorPage from './pages/error';
import WorksPage from './pages/works';
import Services from "./pages/services"
import About from './pages/about';
import Blog from './pages/blog';
import Contact from './pages/contact';
import ScrollUp from './Components/scrollup';
function App() {
  return (
    <BrowserRouter>
      <main>
        <ScrollUp />
        <Navbar />
        <Routes>
          <Route index path='/' element={<Hero />} />
          <Route path='/services' element={<Services />} />
          <Route path='/works' element={<WorksPage />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
