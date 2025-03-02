// @flow
import { styled } from "styled-components";

import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";

export const MenuMobile = () => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="">Главная</a>
        </li>
        <li>
          <a href="">Форум</a>
        </li>
        <li>
          <a href="">Подключение</a>
        </li>
        <li>
          <a href="">Концепция</a>
        </li>
      </ul>
      <Iconwrapper>
        <Icon id="telegram" viewBox="0 -1 25 25" width="70" height="70" />
        <Icon id="discord" viewBox="0 0 256 256" width="70" height="70" />
      </Iconwrapper>
      <Iconwrapper></Iconwrapper>
    </StyledMenu>
  );
};

const Iconwrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 40px;
  gap: 20px;
`;

const StyledMenu = styled.nav`
  z-index: 99999;
  ul {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  li {
    list-style-type: none;
  }
  a {
    color: ${theme.colors.fontPrimary};
    font-size: 2rem;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
  }
`;
