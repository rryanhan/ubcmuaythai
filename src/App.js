import React from 'react'
import { AboutUs, Navbar, Header, Footer, Team} from './components';
import Faq from './pages/faq/Faq'
import './App.css';

const App = () => (
    <div className="App">
        <Navbar />
        <Header/>
        <AboutUs/>
      <Team/>
      <Faq/>
      <Footer/>
      
    </div>
  );
export default App