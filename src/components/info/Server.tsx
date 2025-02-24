// @flow
import * as React from "react";
import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Icon } from "../icon/Icon";
type Props = {};
export const Server = (props: Props) => {
  return (
    <div>
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
    </div>
  );
};

const ServerName = styled.div`
  font-weight: bold;
  color: #000027;
  font-size: 1.5rem;
`;

const ServerName2 = styled.div`
  font-weight: bold;
  color: #969696;
  font-size: 1.2rem;
  display: flex;
`;

const ServerInfo = styled.div`
  display: flex;
  align-items: center;

  background-color: #f6ebebc0;
  justify-content: flex-start;
  min-height: 100px;
  padding-left: 20px;
  gap: 10px;
  position: relative;
  &::after {
    content: "";
    width: 20px; /* Размер кружка */
    height: 20px; /* Размер кружка */
    background-color: red; /* Цвет кружка */
    border-radius: 50%; /* Делаем круглым */
    position: absolute; /* Абсолютное позиционирование */
    top: 15px; /* Отступ сверху */
    right: 15px; /* Отступ справа */
  }
`;

const Startgame = styled.div`
  background-color: #000027;
  min-width: 400px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  position: relative; /* Добавляем относительное позиционирование */

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
  color: white;
  font-size: 1.3rem;
  &:hover {
    color: #01d9fa; /* Цвет текста при наведении */
  }
`;

const Rait = styled.span`
  color: #01d9fa;
`;
