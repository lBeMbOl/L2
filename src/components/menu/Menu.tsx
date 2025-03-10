// @flow
import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { font, size } from "../../styles/Common";
type HeaderProps = {
  setStartOn: (startOn: boolean) => void;
};
export const Menu = (props: HeaderProps) => {
  return (
    <StyledMenu>
      <ul>
        <li>
          <a href="" onClick={() => props.setStartOn(true)}>
            Главная
          </a>
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
    gap: ${size({ Fmax: 40, Fmin: 5 })};
  }
  li {
    list-style-type: none;
  }
  a {
    color: ${theme.colors.fontPrimary};
    font-size: ${font({ weight: 400, Fmax: 22, Fmin: 12 })};
    text-decoration: none;
    font-weight: bold;
    display: inline-block;

    &:hover {
      color: ${theme.colors.iconsSecondary}; /* Цвет текста при наведении */
      animation: scaleAnimation 1s infinite; /* Повторяем анимацию каждые 1 секунду */
    }
  }

  @keyframes scaleAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.3);
    }
    100% {
      transform: scale(1);
    }
  }
`;
