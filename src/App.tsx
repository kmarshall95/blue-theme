import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
      import Home from './component/pages/Home';
      import About from './component/pages/About';
      import Services from './component/pages/Services';
      import Portfolio from './component/pages/Portfolio';
      import Contact from './component/pages/Contact';
      import Layout from './component/pages/Layout';
      import NoPage from './component/pages/NoPage';
      

const App = () => {
    return (
      
      
      
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="About" element={<About/>}/>
                <Route path="Portfolio" element={<Portfolio/>}/>
                <Route path="Services" element={<Services/>}/>
                <Route path="Contact" element={<Contact/>}/>
                <Route path="*" element={<NoPage/>}/>
              </Route>
            </Routes>
          </BrowserRouter>
      
    );
  };

export default App;