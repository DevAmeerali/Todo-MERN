import React, { useState, useEffect } from 'react';
import { Navbar } from "./components/navbar/navbar";
import { Home } from "./components/home/home";
import { Footer } from "./components/footer/footer";
import { About } from './components/about/about';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Signup } from './components/signup/signup';
import { Signin } from './components/signup/signin';
import { Todo } from './components/todo/Todo';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
