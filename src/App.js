import './App.css';
import { Routes, Route } from "react-router-dom"
import Header from './components/Header/Header'
import Friends from './components/Friends/Friends'
import About from './components/About/About';
import Error from './components/Error/Error';
import Navbar from './components/Navbar/Navbar';
import FriendDetail from './components/FriendDetail/FriendDetail'
import Posts from './components/Posts/Posts';
/* import  */

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/friends' element={<Friends />}></Route>
        <Route path="/friends/:friendID" element={<FriendDetail />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/posts' element={<Posts />}></Route>
        <Route path='/*' element={<Error />}></Route>
      </Routes>
    </div >
  );
}

export default App;
