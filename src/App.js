import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Friends from './components/Friends/Friends'
import About from './components/About/About';
import Error from './components/Error/Error';
/* import  */

function App() {
  return (
    <div className="App">
      <h1>A react router site</h1>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
