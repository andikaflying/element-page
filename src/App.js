import logo from './logo.svg';
import './App.css';
import './Skel.css';
import './Style.css';
import './StyleXLarge.css';
import Main from './pages/Main';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />}></Route>
          <Route exact path='/employee-page' element={<EmployeePage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
