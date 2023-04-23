import React from "react";
import * as S from "./StyledHeader.js";

import iconInstagram from "../Header/ImgHeader/iconInstagram.png";

import iconGithub from "../Header/ImgHeader/iconGithub.png";
import LogoTeste from "../Header/ImgHeader/LogoTeste.jpg";



export default function Header() {
  return (
    <S.Header>
    
            <S.LogoHeader src={LogoTeste} alt="logo"/>
      
<nav>
    <ul>
        <S.ListNav>Portifólio</S.ListNav>
        <S.ListNav>Sobre</S.ListNav>
        <S.ListNav>Contato</S.ListNav>
    </ul>
    <div> 
    <S.IconNav src={iconInstagram} alt="icone insta"/>
    <S.IconNav src={iconGithub} alt=" icone github"/>
    </div>
</nav>

    </S.Header>
  );
}


