import PetCards from './components/PetCards';
import Navbar from './components/Navbar';
import './components/Navbar.scss';
import './app.scss';
import Button from "./components/Button"
// import { Routes, Route } from "react-router-dom";
// import { routes } from "./routes/routes";


function App() {
  return (
    <div className="App">
      <Navbar />
      <hr />
      <div className='Main-Top'>
          <h1>Pet List</h1>
          <Button />
      </div>
      <PetCards />
    </div>
  );
}

export default App;