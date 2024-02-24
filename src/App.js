import './App.css';
import Signup from './component/Signup';
import Signin from './component/Signin';
import Home from './component/Home';
import {
  BrowserRouter, Routes,
  Route
} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/" element={<Signup />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App;
