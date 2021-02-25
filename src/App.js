import logo from './logo.svg';
import './App.css';
import Todo from './Todo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Todo />
    </div>
  );
}

export default App;
