import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Send from "./components/Send";
import Dashboard from "./components/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/send" element={<Send/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
      </Routes>
      </BrowserRouter>      
    </>
  )
}

export default App
