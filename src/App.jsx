import './App.css';
import { Provider } from 'react-redux';           //es para leer la tineda 
import generateStore from './store';
import {Routes,Route, Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login';
import NavBar from './components/NavBar';
import Create from './components/Create';
import Navegacion from './components/Navegacion';



function App() {
 
  const store = generateStore()
  return (
    <Provider store={store}>   
      <Routes> 
        <Route path="/" element={<Login/>}/>  
        <Route path="/create"  element={<Create/>}/>
        {/* <Route path="/navegacion"  element={<Navegacion/>}/> */}
      </Routes> 
    </Provider>
    
  );
}


export default App;
