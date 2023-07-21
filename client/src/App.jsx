import './App.css'
import { Route, Routes, useNavigate } from "react-router-dom";
import Landing from "./components/Landing/Landing.jsx";
import Home from "./components/Home/Home.jsx";


function App() {

  const navigate = useNavigate()

  const enter = () =>{
    navigate('/home')
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing enter={enter} />}  />
        
        <Route path="/home" element ={<Home />} />

      </Routes>
    </div>
  )
}

export default App
