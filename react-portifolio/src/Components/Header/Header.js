import React from "react";
import { Link } from "react-router-dom";
import * as S from "./StyledHeader.js";

import iconInstagram from "../Header/ImgHeader/iconInstagram.png";
import iconGithub from "../Header/ImgHeader/iconGithub.png";
// import PortifolioHome from "./Portifolio/PortifolioHome.js";
// import LogoTeste from "../Header/ImgHeader/LogoTeste.jpg";

export default function Header() {
  return (
    <S.Header>
      <nav>
        <S.PortifolioLInk>
          {/* <Link to= "/PortifolioHome"></Link> */}
        </S.PortifolioLInk>

        <S.SobreLInk>
          <h2> Sobre</h2>
        </S.SobreLInk>

        <S.Icons>
          <S.IconNav src={iconInstagram} alt="icone insta" />
          <S.IconNav src={iconGithub} alt=" icone github" />
        </S.Icons>
      </nav>
    </S.Header>
  );
}


