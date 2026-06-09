import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";


const App = () => (
  <BrowserRouter>
    <Header appTitle="RouterDemo" />

    <Routes>
      <Route path="/" element={<Home /> } />
      <Route path="/about" element={<AboutUs /> } />
      <Route path="*" element={
        <div className="alert alert-danger m-5 p-4 fw-bold">
          <p>No Such Path Found</p>
        </div>
       } />
    </Routes>
  </BrowserRouter>
);

export default App