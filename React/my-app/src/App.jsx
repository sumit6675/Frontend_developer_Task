import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
import BarGraph from "./Components/Chart"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <BarGraph/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
