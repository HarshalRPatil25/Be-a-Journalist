import { BrowserRouter as Router , Routes ,Route}from 'react-router-dom';
import './App.css';
import Nav from './Component/Pages/NavBar/Nav';
import ContactUs from './Component/Pages/ContactUs';
import Home from './Component/Pages/Home';
import Course from './Component/Pages/Course';
import Payment from './Component/Payment';
function App() {
  return (
    <div >
      <Router>
        <div>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/ContactUs' element={<ContactUs/>} />
            <Route path='/course' element={<Course/>} />
            <Route path='/payment' element={<Payment/>} />
           
          </Routes>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
