// @flow
import Button from "@mui/material/Button/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imge from "./../../../assets/images/img.jpeg";
import { styled } from "styled-components";
import { theme } from "../../../styles/Theme";
import { size } from "../../../styles/Common";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper>
        {" "}
        <div>
          <Title>
            Открытие <ServerName>GamingNagibator</ServerName> уже 1 сентября!
          </Title>

          <MainTitle>
            Уникальный проект на просторох Адена, который не оставит вас без
            фана!
          </MainTitle>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.buttonBg,
              color: "white",
              fontWeight: 700, // Альтернативная запись жирного
              fontSize: "1.1rem", // Размер шрифта
              width: size({ Fmax: 250, Fmin: 150 }), // Ширина в пикселях
              height: size({ Fmax: 50, Fmin: 30 }), // Высота в пикселях
              textTransform: "none",
              "&:hover": {
                bgcolor: theme.colors.buttonHover,
              },
            }}
          >
            Начать играть
          </Button>
        </div>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  padding: ${size({ Fmax: 200, Fmin: 20 })};
  padding-top: 200px;
  background-image: url(${imge});
  background-size: cover; /* Масштабирует изображение для заполнения блока */
  background-position: center bottom; /* Центрирует изображение */
  background-repeat: no-repeat; /* Отключает повторение */
  margin-bottom: 50px;
`;

const MainTitle = styled.h3`
  font-size: 1rem;
  margin: 10px;
  text-align: left;
  margin-left: 0;
  padding-left: 0;
  max-width: 470px;
  color: ${theme.colors.iconsPrimary};
`;

const Title = styled.h1`
  font-size: 1.3rem;
  margin: 10px;
  text-align: left;
  margin-left: 0;
  padding-left: 0;
  max-width: 470px;
  color: ${theme.colors.TextColor};
`;

const ServerName = styled.span`
  color: ${theme.colors.iconsPrimary};
`;
