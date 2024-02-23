import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Login from './pages/Login'
import Nav from './components/Nav'

export default function App() {
  return (
    //Routing between the different pages
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </BrowserRouter>
  )
}