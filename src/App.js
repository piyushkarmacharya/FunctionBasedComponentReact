import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Column from './components/Column';
import { useState } from 'react';

function App() {
  const [themee,setThemee]=useState("light");
  const changeThemee=(state)=>{
    if(themee=='light'){
      setThemee('dark');
    }else{
      setThemee('light');
    }
  }
  return (
    <div className={`bg-${themee} text-${themee=='light'?'dark':'light'} min-vh-100`} >
    <NavBar themee={themee} changeThemee={changeThemee}></NavBar>
    <Column></Column>
    </div>
  );
}

export default App;
