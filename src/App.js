import logo from "./logo.svg";
import "./App.css";
import Homepage from "./component/HomePage/Homepage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Formcomp from "./component/Forms/Formcomp";
import Checkout from "./component/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/detail" element={<Formcomp />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
      {/* <Homepage /> */}
    </div>
  );
}

export default App;
