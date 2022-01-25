import React from "react";
import { HeaderBlock, HeaderLogo, HeaderUser } from "./styles";
import netflixLogo from "../../assets/images/Netflix_2015_logo.svg";
import netflixUserLogo from "../../assets/images/Netflix-avatar.png";

const Header = ({ blackHeader }) => {
  return (
    <HeaderBlock background={blackHeader ? '#141414' : 'transparent'}>
      <HeaderLogo>
        <a href="/">
          <img src={netflixLogo} alt="Netflix" />
        </a>
      </HeaderLogo>
      <HeaderUser>
        <a href="/">
          <img src={netflixUserLogo} alt="Usuário" />
        </a>
      </HeaderUser>
    </HeaderBlock>
  );
};

export default Header;
