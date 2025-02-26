import './App.css';
import Nav from './Componets/Nav'
import {Routes,Route} from 'react-router-dom'
import Contact from './Componets/Contact'
import CompanyCollabration from './Componets/CompanyCollabration'
import Internship from './Componets/Internship'
import GraduateProgram from './Componets/GraduateProgram'
import Home from './Componets/Home'
import JobPortal from './Componets/JobPortal'
import InterneesPortal from './Componets/InterneesPortal'
import Footer from './Componets/Footer'
import TypedEffect from './Componets/TypedEffect';


function App() {
  return (
    <>
    <Nav></Nav>
    <Routes>
      <Route path={'/'} element = {<Home></Home>} ></Route>
      <Route path={'internship'} element = {<Internship></Internship>} ></Route>
      <Route path={'graduateprogram'} element = {<GraduateProgram></GraduateProgram>} ></Route>
      <Route path={'companycollabration'} element = {<CompanyCollabration></CompanyCollabration>} ></Route>
      <Route path={'contact'} element = {<Contact></Contact>} ></Route>
      <Route path={'interneesportal'} element={<InterneesPortal></InterneesPortal>}></Route>
      <Route path={"jobportal"} element={<JobPortal></JobPortal>}></Route>
    </Routes>
    <Footer></Footer>
    </>
  );
}


export default App;
