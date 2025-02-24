// @flow
import Button from "@mui/material/Button/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import imge from "./../../../assets/images/img.jpeg";
import { styled } from "styled-components";

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
              bgcolor: "#000027",
              color: "white",
              fontWeight: 700, // Альтернативная запись жирного
              fontSize: "1.1rem", // Размер шрифта
              width: 250, // Ширина в пикселях
              height: 50, // Высота в пикселях
              textTransform: "none",
              "&:hover": {
                bgcolor: "#01d9fa",
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
  min-height: 100vh;
  padding: 200px;
  background-image: url(${imge});
  background-size: cover; /* Масштабирует изображение для заполнения блока */
  background-position: center; /* Центрирует изображение */
  background-repeat: no-repeat; /* Отключает повторение */
`;

const MainTitle = styled.h3`
  text-align: left;
  margin-left: 0;
  padding-left: 0;
  max-width: 470px;
  color: #01d9fa;
`;

const Title = styled.h1`
  text-align: left;
  margin-left: 0;
  padding-left: 0;
  max-width: 470px;
  color: white;
`;

const ServerName = styled.span`
  color: #01d9fa;
`;
