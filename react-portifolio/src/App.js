import React from "react";
import Home from "./Components/Home/Home.js";
import PortifolioHome from "./Components/Portifolio/PortifolioHome.js";
import Rotas from "./Components/Rotas.js";
import styled from "styled-components";

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
      <SectionApp>
       <Home/>
      </SectionApp>
      <Rotas/>
      <GlobalStyle/>
      <PortifolioHome/>
    </>
  );

}


