// @flow

import styled from "styled-components";

import { Icon } from "../icon/Icon";
import { theme } from "../../styles/Theme";
import { size } from "../../styles/Common";

export const Server = () => {
  return (
    <Wrapper>
      <h2>Сервера Рома Продакшен</h2>
      <ServerInfo>
        <Icon id="play" viewBox="0 0 35 35" width="35" height="35" />
        <ServerName>
          Server <Rait>[x100]</Rait>
          <ServerName2>Классический</ServerName2>
        </ServerName>
      </ServerInfo>

      <Startgame>
        {" "}
        <ServerLink href="">Играть</ServerLink>{" "}
        <ServerLink href="">О сервере</ServerLink>{" "}
      </Startgame>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const ServerName = styled.div`
  font-weight: bold;
  color: ${theme.colors.fontPrimary};
  font-size: 1.5rem;
`;

const ServerName2 = styled.div`
  font-weight: bold;
  color: ${theme.colors.fontSecondary};
  font-size: 1.2rem;
  display: flex;
`;

const ServerInfo = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  background-color: ${theme.colors.BCGScondary};
  justify-content: flex-start;
  min-height: 100px;
  min-width: 200px;
  padding-left: 20px;
  gap: 10px;
  position: relative;
  &::after {
    content: "";
    width: ${size({ Fmax: 20, Fmin: 10 })}; /* Размер кружка */
    height: ${size({ Fmax: 20, Fmin: 10 })}; /* Размер кружка */
    background-color: red; /* Цвет кружка */
    border-radius: 50%; /* Делаем круглым */
    position: absolute; /* Абсолютное позиционирование */
    top: 15px; /* Отступ сверху */
    right: 15px; /* Отступ справа */
  }
`;

const Startgame = styled.div`
  background-color: ${theme.colors.buttonBg};
  max-width: 400px;
  max-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative; /* Добавляем относительное позиционирование */
  padding-top: 5px;
  padding-bottom: 5px;

  /* Псевдоэлемент для красного ромба */
  &::before {
    content: "";
    width: 10px; /* Ширина ромба */
    height: 10px; /* Высота ромба */
    border: 2px solid #f6ebebc0; /* Красная граница */
    position: absolute; /* Абсолютное позиционирование */
    top: 50%; /* Центрирование по вертикали */
    left: 46%; /* Центрирование по горизонтали */
    transform: translate(-50%, -50%) rotate(45deg); /* Смещение и поворот для создания ромба */
  }
`;

const ServerLink = styled.a`
  text-decoration: none;
  color: ${theme.colors.TextColor};
  font-size: 1.3rem;
  display: inline-block;

  &:hover {
    color: ${theme.colors.iconsPrimary}; /* Цвет текста при наведении */
    animation: scaleAnimation 1s infinite; /* Повторяем анимацию каждые 1 секунду */
  }

  @keyframes scaleAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
`;

const Rait = styled.span`
  color: ${theme.colors.iconsSecondary};
`;
