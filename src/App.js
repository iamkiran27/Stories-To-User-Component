

import {Route, Routes} from "react-router";
import MainPage from './pages/MainPage';



function App() {
  return (
    
     <Routes>
       <Route strict exact path="/" element={<MainPage/>}/>
      
       
      </Routes>
     
  );
}

export default App;
