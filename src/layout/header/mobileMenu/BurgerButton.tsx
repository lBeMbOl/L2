// @flow

import { css, styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { useState } from "react";

import { MenuMobile } from "../../../components/menu/MenuMobile";

export const BurgerButton = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Burger
        isOpen={isOpen}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <span></span>
      </Burger>
      <Popup isOpen={isOpen}>
        <MenuMobile />
      </Popup>
    </div>
  );
};

const Burger = styled.button<{ isOpen: boolean }>`
  position: fixed;
  width: 200px;
  height: 200px;
  top: -100px;
  right: -100px;
  z-index: 99999;
  background-color: rgba(255, 255, 255, 0);
  border: none;
  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.iconsSecondary};
    position: absolute;
    left: 40px;
    bottom: 50px;

    ${(props) =>
      props.isOpen &&
      css<{ isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.iconsSecondary};
      position: absolute;
      transform: translateY(-10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(-45deg) translateY(0px);
        `}
    }
    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.iconsSecondary};
      position: absolute;
      transform: translateY(10px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: rotate(45deg) translateY(0px);
          width: 36px;
        `}
    }
  }

  @media screen and (min-width: 681px) {
    display: none;
  }
`;

const Popup = styled.div<{ isOpen: boolean }>`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99998;
  display: none;
  background-color: #f6f6f8eb;
  ${(props) =>
    props.isOpen &&
    css<{ isOpen: boolean }>`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  @media
    screen
    and
    (min-width: 681px) {
    display: none;
  }
`;
