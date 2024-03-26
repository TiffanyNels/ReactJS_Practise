import './App.css';
import { useToggleButtons } from './components/useToggleButtons';

function App() {
  const [increaseCount, decreaseCount, setToZero, count] = useToggleButtons();

    return (
      <div className="App">
        <button onClick={increaseCount}>Increase</button>
        <button onClick={decreaseCount}>Decrease</button>
        <button onClick={setToZero}>Set to Zero</button>

        {count}
    </div>
    )
}

export default App;