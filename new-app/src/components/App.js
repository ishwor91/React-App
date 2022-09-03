import './App.css';
import AddContact from './AddContact';
import Header from "./Header";
import About from './About';
// import ContactCard from "./ContactCard";
// import Contact from "./AddContact";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
//  use exact for exact path and 
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    {/* <Header/> */}
    <Routes>
    <Route exact path  = "/" element ={[<Header/>, <About/>]} />
      <Route exact path ="/about" element={<About/>} />
      <Route path ="/contact" element ={<AddContact/>}/>
    </Routes>
   {/* <About/> */}
   {/* <Header Home="Home" About="About" Services="Services" Blog="Blog" />  */}
   {/* it's an example of props  */}
   {/* <AddContact/> */}
    </BrowserRouter>
  );
}
export default App;
