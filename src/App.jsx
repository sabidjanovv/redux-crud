import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Users from "./pages/Users";
import Update from "./pages/Update";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="/edit/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
