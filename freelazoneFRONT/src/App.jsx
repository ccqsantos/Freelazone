import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Join from "./pages/Join";
import About from "./pages/About";
import Help from "./pages/Help";
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <Header/>
      <main>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/join' element={<Join/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/help' element={<Help/>}></Route>
        </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;