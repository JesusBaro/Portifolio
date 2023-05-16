import React from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";
import PortifolioHome from "./Components/Portifolio/PortifolioHome.js";
import styled from "styled-components";
import {BrowserRouter, Routes, Route} from "react-router-dom";



import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
`
const SectionApp = styled.section`
display:flex;
    justify-content:space-between;
    flex-direction:column;
    height:100vh;  

`
export default function App() {
  return (
    <>
<BrowserRouter>

<SectionApp>
<Header/>
<Main/>
<Footer/>
<GlobalStyle/>
</SectionApp>

{/* <PortifolioHome/> */}
<Routes>
<Route path="/PortifolioHome" element={<PortifolioHome/>}/>

</Routes> 
 </BrowserRouter>
 </>
  );

}


