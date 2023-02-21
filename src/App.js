
import './App.css';
import FuncCompo from './Components/FuncCompo';
import ClassCompo from './Components/ClassCompo';
import { useState } from 'react';
function App() {
  const [functClick, setFuncClick] =useState(false);
  const [functClick2,setFuncClick2]=useState(false);
  return (
    <div className="App">
     <h1 style={{color:'black',textShadow:'2px 2px cyan',textAlign:'center'}}>Styling using Functional and Class Components</h1>
       <button id="btn-1" onClick={()=>setFuncClick(!functClick)}>To see styling in Functional Component</button>
       <button id="btn-2" onClick={()=>setFuncClick2(!functClick2)}>To see styling in Class Component</button>
       {functClick && <FuncCompo/>}
       {functClick2 && <ClassCompo/>}   
    </div>
  );
}

export default App;
