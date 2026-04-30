import Home from "./pages/Home";
import Login from "./pages/Login";
import Join from "./pages/Join";
import About from "./pages/About";
import Help from "./pages/Help";
import { Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Freelancers from "./pages/Freelancers";

function App() {

  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="join" element={<Join />} />
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<Profile />} />
          <Route path="projects" element={<Projects />} />
          <Route path="freelancers" element={<Freelancers />} />
          <Route path="help" element={<Help />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;