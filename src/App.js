import logo from './logo.svg';
import './App.css';
// import Home from './Component/Website/Home';
// import About from './Component/Website/About';
// import Movie from './Component/Website/Movie';
import Video from './Component/React Bootstrap/Video';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { hover } from '@testing-library/user-event/dist/hover';
import Props from './Component/React Bootstrap/Props';
import Boot from './Component/React Bootstrap/Boot';
import Form from './Component/React Bootstrap/Form';
import UseEffectHook from './Component/Hooks/UseEffectHook';
import FormHook from './Component/Hooks/FormHook';
import UseRefHook from './Component/Hooks/useRef/UseRefHook';
import Todolist from './Component/Hooks/Todolist';
import UseContextHook from './Component/Hooks/useContext/UseContextHook';
import UsereducerHook from './Component/Hooks/useReducer/UsereducerHook';
import UseMemoHook from './Component/Hooks/UseMemo/UseMemoHook';
import CRUDoperation from './Component/CRUD/CRUDoperation';
import Editdata from './Component/CRUD/Editdata';
function App() {
  return (
    <div className="App">
      {/* <Form/> */}
      {/* <Props/> */}
      {/* <Boot /> */}
      {/* <FormHook/> */}
      {/* <Video/> */}
      {/* <UseEffectHook/> */}
      {/* <UseRefHook/> */}
      {/* <Todolist/> */}
 
      {/* <UseContextHook/>  */}
      {/* <UseConEx/> */}

      {/* <UsereducerHook/> */}

      {/* <UseMemoHook/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CRUDoperation/>}/>
          <Route path='/edit/:id' element={<Editdata/>}/>
        </Routes>
      </BrowserRouter>



  {/* <Home/> */}
{/* <About/>  */}

      {/* <BrowserRouter>
      <Link to={'/home'} style={{justifyContent:'space-between',padding:'2% 6%',textDecoration:'none',color:'purple',fontSize:'15px',fontWeight:'bold'}}>HOME</Link>
      <Link to={'/about'} style={{justifyContent:'space-between',padding:'2% 6%' ,textDecoration:'none',color:'purple',fontSize:'15px',fontWeight:'bold'}}>ABOUT</Link>
      <Link to ={'/movie'} style={{justifyContent:'space-between',padding:'2% 6%' ,textDecoration:'none',color:'purple',fontSize:'15px',fontWeight:'bold'}} >MOVIE</Link>
      <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/movie' element={<Movie/>}/>

      </Routes>
      </BrowserRouter> */}

      {/* // <BrowserRouter>
      //   <Link to={'/userlogin'}>Login</Link>
      //   <Link to={'/userregister'}>Register</Link>
      //   <Routes>
      //     <Route path='/UserLogin' element={<Web />} />
      //     <Route path='/userRegister' element={<Reg />} />
      //   </Routes>
  // </BrowserRouter> */}
    </div>


  );
}

export default App;
