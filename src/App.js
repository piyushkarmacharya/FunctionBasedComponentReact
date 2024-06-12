import logo from './logo.svg';
import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Column from './components/Column';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  const [themee,setThemee]=useState("light");
  const [alert,setAlert]=useState(null);
  const showAlert=(msg,alertType)=>{
    setAlert({
      msg:msg,
      alertType:alertType}
    );

    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
  
  const changeThemee=(event)=>{
    document.body.style.backgroundColor = themee === 'light' ? '#212529' : 'white';
    document.body.style.color = themee === 'light' ? 'white' : 'black';
    if(themee=='light'){
      showAlert('Converted to Dark mode','success');
    }else{
      showAlert('Converted to Light mode','success');
    }
    // Toggle theme
    setThemee(themee === 'light' ? 'dark' : 'light');
    
  }
  return (
    <><NavBar themee={themee} changeThemee={changeThemee}></NavBar>
    <Alert alert={alert} ></Alert>
    <Column></Column>
    
    </>
    
  );
}

export default App;
