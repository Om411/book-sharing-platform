// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UploadBook from './pages/UploadBook';
import RequestedBooks from './pages/RequestedBooks';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/upload-book" element={<UploadBook />} />
        <Route path="/requested-books" element={<RequestedBooks />} />
      </Routes>
    </Router>
  );
}

export default App;
