import{ useContext, useState } from 'react';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard';
import Kanban from './Components/Kaban';
import Orders from './Components/Orders';
import Employees from './Components/Employees';
import Customers from './Components/Customers';
import Calendar from './Components/Calendar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './Components/Themecontext';
import './App.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme}  main_wrapper`}>
      <Router>
        <div className="dashboard_main_container">
          <Sidebar /> 
          <div className="dashboard_right_side">
            <Header toggleTheme={() => setDarkMode(!darkMode)} />
            <div className="p-4">
              <Routes>
              <Route path="/" exact element={<Home/>} />
                <Route path="/ecommerce" exact element={<Dashboard/>} />
                <Route path="/kanban" element={<Kanban/>} />
                <Route path="/orders" element={<Orders/>} />
                <Route path="/employees" element={<Employees/>} />
                <Route path="/customers" element={<Customers/>} />
                <Route path="/calendar" element={<Calendar/>} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
