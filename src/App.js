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
import Login from './componenets/Login';
import Sign from './componenets/Sign';
import { useState } from 'react';

function App() {
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert(null)
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 2333);
  }

  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert} />

          <div className="container my-3">
            <Switch>

              <Route path="/" exact element={<Home showAlert={showAlert} />} />

              <Route path="/about" exact element={<About />} />

              <Route path="/login" exact element={<Login showAlert={showAlert} />} />

              <Route path="/sign" exact element={<Sign showAlert={showAlert} />} />

            </Switch>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;