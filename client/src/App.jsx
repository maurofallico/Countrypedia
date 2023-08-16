import './App.css'
import { Route, Routes } from "react-router-dom";
import Landing from "./views/Landing/Landing.jsx";
import Home from "./views/Home/Home.jsx";
import Detail from './views/Detail/Detail.jsx'
import Form from './views/Form/Form.jsx';
import Activities from './views/Activities/Activities.jsx'

function App() {
 
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />}  />
        
        <Route exact path="/home" element ={<Home />} />

        <Route path="/:code" element ={<Detail />} />

        <Route path="/form" element ={<Form />} />

        <Route path="/activities" element ={<Activities />} />

      </Routes>
    </div>
  )
}

export default App
