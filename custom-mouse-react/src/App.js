import logo from './logo.svg';
import './App.css';
//import af npm package:
import { CustomCursorParticles, FollowingCircle } from 'mouse-effect-test';

function App() {
  return (
    <div className="App">
      <CustomCursorParticles particleColor="105, 155, 0" radius={10}/>
      <FollowingCircle   />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
