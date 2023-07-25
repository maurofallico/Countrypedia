import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import Detail from './views/Detail/Detail.jsx'


function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}  />
        
        <Route exact path="/home" element ={<Home />} />

        <Route path="/:code" element ={<Detail />} />

      </Routes>
    </div>
  )
}

export default App
