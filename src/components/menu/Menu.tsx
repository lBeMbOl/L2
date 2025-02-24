// @flow
import { styled } from "styled-components";
type Props = {};
export const Menu = (props: Props) => {
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
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  ul {
    display: flex;
    gap: 40px;
  }
  li {
    list-style-type: none;
  }
  a {
    color: #000027;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;
    &:hover {
      color: #01d9fa; /* Цвет текста при наведении */
    }
  }
`;
