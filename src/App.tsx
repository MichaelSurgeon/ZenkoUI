import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className = "App">
        <div className = "Content">
          <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/Home" element={<Home />}/>
            <Route path="/SignUp" element={<SignUp />}/>
            <Route path="/SignIn" element={<SignIn />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
