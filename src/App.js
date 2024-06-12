import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Column from './components/Column';
import { useState } from 'react';

function App() {
  const [themee,setThemee]=useState("light");
  const changeThemee=(event)=>{
    document.body.style.backgroundColor = themee === 'light' ? '#212529' : 'white';
    document.body.style.color = themee === 'light' ? 'white' : 'black';

    // Toggle theme
    setThemee(themee === 'light' ? 'dark' : 'light');
  }
  return (
    <><NavBar themee={themee} changeThemee={changeThemee}></NavBar>
    <Column></Column>
    </>
    
  );
}

export default App;
