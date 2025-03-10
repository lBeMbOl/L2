// @flow

import { styled } from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { Menu } from "../../components/menu/Menu";
import Button from "@mui/material/Button/Button";
import { Lk } from "../../components/logo/Lk";
import { Icon } from "../../components/icon/Icon";
import { theme } from "../../styles/Theme";
import { font, size } from "../../styles/Common";
import { BurgerButton } from "./mobileMenu/BurgerButton";
type HeaderProps = {
  setStartOn: (startOn: boolean) => void;
};
export const Header = (props: HeaderProps) => {
  return (
    <div>
      <BurgerButton />
      <StyledHeader>
        <Logo />
        <SocialLink href={"https://vk.com"} target={"_blank"}>
          <Icon id="telegram" viewBox="0 -15 25 50" width="70" height="70" />
        </SocialLink>
        <SocialLink target={"_blank"} href={"https://vk.com"}>
          <Icon id="discord" viewBox="0 0 256 256" width="35" height="35" />
        </SocialLink>
        <MenuContainer>
          <Menu setStartOn={props.setStartOn} />
        </MenuContainer>{" "}
        <Button
          variant="contained"
          startIcon={<Lk />}
          sx={{
            bgcolor: theme.colors.buttonBg,
            fontSize: font({ weight: 700, Fmax: 18, Fmin: 12 }), // Размер шрифта
            color: "white",
            width: 300, // Ширина в пикселях
            height: size({ Fmax: 50, Fmin: 40 }), // Высота в пикселях
            textTransform: "capitalize",
            "&:hover": {
              bgcolor: theme.colors.buttonHover,
            },
          }}
        >
          Личный кабинет
        </Button>
      </StyledHeader>
    </div>
  );
};
const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to right, ${theme.colors.TextColor}, #01d9fa);
  border-radius: 50px;
  margin: 0 50px;
  padding-right: 50px;
  position: fixed;
  top: 0;
  left: 0;
  width: 90%;
  max-height: ${size({ Fmax: 100, Fmin: 60 })};
  z-index: 1000;

  @media ${theme.media.mobile} {
    display: none;
  }
`;

const MenuContainer = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  margin-right: 10px;
`;

const SocialLink = styled.a`
  padding: 5px;
  background-color: ${theme.colors.iconsPrimary};
  border-radius: 50%;
  width: ${size({ Fmax: 50, Fmin: 20 })};
  height: ${size({ Fmax: 50, Fmin: 20 })};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.colors.iconsPrimary};
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-4px);
  }
`;
