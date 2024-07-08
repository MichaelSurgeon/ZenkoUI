import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className = "App">
        <div className = "Content">
          <Routes>
            <Route path="/" element={<SignUp />}/>
            <Route path="/SignUp" element={<SignUp />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
