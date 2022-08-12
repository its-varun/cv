import Main from './Main'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from './Project'
import Contact from './Contact'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/project" element={<Project/>} />
          <Route exact path="/contact" element={<Contact/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
