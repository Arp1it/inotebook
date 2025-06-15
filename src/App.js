import './App.css';
import{
  BrowserRouter as Router,
  Route,
  Routes as Switch
} from 'react-router-dom';

import Navbar from './componenets/Navbar';
import Home from './componenets/Home';
import About from './componenets/About';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>

        <Route path="/" exact element={<Home />} />

        <Route path="/about" exact element={<About />} />

      </Switch>
    </Router>
  );
}

export default App;
