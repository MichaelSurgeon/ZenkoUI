import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp/SignUp';
import SignIn from './Pages/SignIn/SignIn';
import Home from './Pages/Home/Home';
import DataUpload from './Pages/DataUpload/DataUpload';
import Categories from './Pages/Categories/Categories';
import Account from './Pages/Account/Account';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Content">
          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/DataUpload" element={<DataUpload />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
