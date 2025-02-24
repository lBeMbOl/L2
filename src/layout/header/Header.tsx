// @flow

import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import Button from "@mui/material/Button/Button";
import { Lk } from "../../components/logo/Lk";
import { Icon } from "../../components/icon/Icon";

export const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <Icon id="telegram" viewBox="-10 -15 50 50" width="70" height="70" />
      <Icon id="discord" viewBox="0 0 256 256" width="35" height="35" />

      <MenuContainer>
        <Menu />
      </MenuContainer>
      <Button
        variant="contained"
        startIcon={<Lk />}
        sx={{
          bgcolor: "#000027",
          color: "white",
          fontWeight: 700, // Альтернативная запись жирного
          fontSize: "1.1rem", // Размер шрифта
          width: 300, // Ширина в пикселях
          height: 50, // Высота в пикселях
          textTransform: "capitalize",
          "&:hover": {
            bgcolor: "#01d9fa",
          },
        }}
      >
        Личный кабинет
      </Button>
    </StyledHeader>
  );
};
const StyledHeader = styled.header`
  background-size: cover; /* Масштабирует изображение для заполнения блока */
  background-position: center; /* Центрирует изображение */
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, #ffffff, #01d9fa);
  border-radius: 50px;
  margin: 0 50px;
  padding-right: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  z-index: 1000;
`;

const MenuContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
`;
