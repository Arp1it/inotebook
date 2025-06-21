import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';

import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import About from './componenets/About';
import NoteState from './context/notes/NoteState';
import Alert from './componenets/Alert';

function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          {/* <Alert /> */}

          <div className="container my-3">
          <Switch>

            <Route path="/" exact element={<Home />} />

            <Route path="/about" exact element={<About />} />

          </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;