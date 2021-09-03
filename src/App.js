import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/hello">
              <p>Hello World!</p>
              <p>
                <a href="/" className="App-link">Back to index</a>
              </p>
              <p>
                <label onClick={props.auth.logout} className="App-link">Logout</label>
              </p>
            </Route>
            <Route path="/">
              <p>
                <a href="/hello" className="App-link">Go to Hello World</a>
              </p>
              <p>
                <label onClick={props.auth.logout} className="App-link">Logout</label>
              </p>
            </Route>
          </Switch>
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
    </Router>
  );
}

export default App;
