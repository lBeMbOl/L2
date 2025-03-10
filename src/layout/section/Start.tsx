import { styled } from "styled-components";
import { theme } from "../../styles/Theme";
import { FlexWrapper } from "../../components/FlexWrapper";
import Button from "@mui/material/Button/Button";
import { size } from "../../styles/Common";

export const Start = () => {
  return (
    <FlexWrapper justify="center" direction="column" align="center">
      <Title>1. Создать аккаунт</Title>
      <Registration>
        {" "}
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
          Регистрация
        </Button>
      </Registration>
      <Title>2. Загрузить клиент</Title>
      <Registration>
        <Text>
          Загрузите и установить игровой клиент удобным для вас способом
        </Text>
        <ButtonContainer>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.buttonBg,
              color: "white",
              fontWeight: 700, // Альтернативная запись жирного
              fontSize: "1.1rem", // Размер шрифта
              width: size({ Fmax: 250, Fmin: 100 }), // Ширина в пикселях
              height: size({ Fmax: 50, Fmin: 30 }), // Высота в пикселях
              textTransform: "none",
              "&:hover": {
                bgcolor: theme.colors.buttonHover,
              },
            }}
          >
            Торрент
          </Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.buttonBg,
              color: "white",
              fontWeight: 700, // Альтернативная запись жирного
              fontSize: "1.1rem", // Размер шрифта
              width: size({ Fmax: 250, Fmin: 100 }), // Ширина в пикселях
              height: size({ Fmax: 50, Fmin: 30 }), // Высота в пикселях
              textTransform: "none",
              "&:hover": {
                bgcolor: theme.colors.buttonHover,
              },
            }}
          >
            Хуёрент
          </Button>
        </ButtonContainer>
      </Registration>
      <Title>3. Обновить и играть</Title>

      <Registration>
        <Text>
          Совсем скоро вы отправитесь покорять идеальный мир, осталось только
          обновить клиент до последней версии
        </Text>
        <Button
          variant="contained"
          sx={{
            bgcolor: theme.colors.buttonBg,
            color: "white",
            fontWeight: 700, // Альтернативная запись жирного
            fontSize: "1.1rem", // Размер шрифта
            width: size({ Fmax: 300, Fmin: 200 }), // Ширина в пикселях
            height: size({ Fmax: 50, Fmin: 30 }), // Высота в пикселях
            textTransform: "none",
            "&:hover": {
              bgcolor: theme.colors.buttonHover,
            },
          }}
        >
          Посетить форум
        </Button>
      </Registration>
    </FlexWrapper>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  margin: 10px;
  text-align: left;
  margin-left: 0;
  padding-left: 0;
  max-width: 470px;
  color: ${theme.colors.fontPrimary};
`;

const Text = styled.div`
  font-weight: bold;
  color: ${theme.colors.fontSecondary};
  font-size: 1.2rem;
  display: flex;
`;

const Registration = styled.div`
  gap: 20px;
  flex-direction: column;
  margin: 20px;
  display: flex;
  align-items: center;

  background-color: ${theme.colors.BCGScondary};
  justify-content: center;
  min-height: 150px;
  min-width: 200px;
  max-width: 1500px;
  width: 80%;
`;
