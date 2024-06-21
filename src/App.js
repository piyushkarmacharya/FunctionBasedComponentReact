import './App.css';
import './components/NavBar'
import NavBar from './components/NavBar';
import Column from './components/Column';
import Alert from './components/Alert';
import { useState } from 'react';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';


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
    if(themee==='light'){
      showAlert('Converted to Dark mode','success');
    }else{
      showAlert('Converted to Light mode','success');
    }
    // Toggle theme
    setThemee(themee === 'light' ? 'dark' : 'light');
    
  }
  const router=createBrowserRouter([
    {
      path:"/",
      element:<><NavBar themee={themee} changeThemee={changeThemee}/><Home/></>
    },
    {
      path:"/column",
      element:<><NavBar themee={themee} changeThemee={changeThemee}/><Column/></>
    },
    {
      path:"/about",
      element:<><NavBar themee={themee} changeThemee={changeThemee}/><About/></>
    },
    {
      path:"/user/:username",
      element:<><NavBar themee={themee} changeThemee={changeThemee}/><User/></>
    }
  ]);
  return (
    <>
   
    <RouterProvider router={router}/>
    <Alert alert={alert} ></Alert>
    
    </>
    
  );
}

export default App;
