import './App.css';
import { Provider } from 'react-redux';           //es para leer la tineda 
import generateStore from './store';
import {Routes,Route, Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login';
import NavBar from './components/NavBar';



function App() {
  const store = generateStore()
  return (

    <Provider store={store}>   
      <Routes>
        
        <Route path="/" element={<Login/>}/>  
        <Route path="/informacion"  element={<NavBar/>}/>
      </Routes> 
    </Provider>
    
  );
}


export default App;
