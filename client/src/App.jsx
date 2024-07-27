import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import About from "./Pages/About";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </Router>
  )
  
}

export default App
