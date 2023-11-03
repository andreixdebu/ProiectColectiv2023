import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import PresentationImage from './components/PresentationImage';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="homepage">
        <PresentationImage />
        <Homepage />
      </div>
    </div>
  );
}

export default App;
