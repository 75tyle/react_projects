import './App.css';
import Accordian from './components/accordian';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />

      {/* Random color component */}
      <RandomColor/>

      {/* Star Rating */}
      <StarRating />
    </div>
  );
}

export default App;
