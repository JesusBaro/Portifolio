import React from "react";
import Header from "./Components/Header/Header.js";
import Main from "./Components/Main/Main.js";
import Footer from "./Components/Footer/Footer.js";

// import { createGlobalStyle } from 'styled-components';
// export const GlobalStyle = createGlobalStyle`
// *{
//   margin:0;
//   padding:0;
//   box-sizing:border-box;
// }
// `

export default function App() {
  return (
    <div>
<Header/>
<Main/>
<Footer/>
{/* <S.GlobalStyle/> */}
    </div>
  );
}


