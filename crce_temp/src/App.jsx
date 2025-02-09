// App.js
import React from 'react';
import StreamlitEmbed from './streamlit';
import RazorpayPayment from './component/Fund';
import Layout from './Layout';
import IndexPage from './IndexPage';
import SignUp from './SignUp';
import Login from './Login';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/page2" element={<Page2/>}/>
          <Route path="/page3" element={<Page3/>}/>
           <Route path="/login" element={<Login/>} />
           <Route path="/signup" element={<SignUp/>} />
          <Route path="/streamlit" element={<StreamlitEmbed />} />
          <Route path="/pay" element={<RazorpayPayment />} />
        </Route>
    </Routes>





  );
}

export default App;
