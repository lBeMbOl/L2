// @flow
import Button from "@mui/material/Button/Button";
import { styled } from "styled-components";
import { PlayerPVP } from "./PlayerPVP";
import { theme } from "../../styles/Theme";
import { size } from "../../styles/Common";
import { useState } from "react";

const Players = [
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
  ["Имя персонажа", 0],
];

export const Playerstop = () => {
  const [PVPorPK, setPVPorPK] = useState(true);

  let PVPcolor = PVPorPK ? theme.colors.buttonBg : theme.colors.iconsSecondary;
  let PKcolor = PVPorPK ? theme.colors.iconsSecondary : theme.colors.buttonBg;
  return (
    <Wrapper>
      <h2>Топ игроков</h2>
      <Header>
        <Servername>Server</Servername>

        <Button
          onClick={() => setPVPorPK(!PVPorPK)}
          variant="contained"
          sx={{
            bgcolor: PVPcolor,
            color: "white",
            fontWeight: 700, // Альтернативная запись жирного
            fontSize: "1.1rem", // Размер шрифта
            width: size({ Fmax: 100, Fmin: 20 }), // Ширина в пикселях
            height: size({ Fmax: 40, Fmin: 30 }), // Высота в пикселях
            textTransform: "none",
            "&:hover": {
              bgcolor: theme.colors.buttonHover,
            },
          }}
        >
          PVP
        </Button>
        <Button
          onClick={() => setPVPorPK(!PVPorPK)}
          variant="contained"
          sx={{
            bgcolor: PKcolor,
            color: "white",
            fontWeight: 700, // Альтернативная запись жирного
            fontSize: "1.1rem", // Размер шрифта
            width: size({ Fmax: 100, Fmin: 20 }), // Ширина в пикселях
            height: size({ Fmax: 40, Fmin: 30 }), // Высота в пикселях
            textTransform: "none",
            "&:hover": {
              bgcolor: theme.colors.buttonHover,
            },
          }}
        >
          PK
        </Button>
      </Header>
      <List>
        {Players.map((player, index) => (
          <PlayerPVP
            key={index}
            id={index}
            name={player[0]}
            count={player[1]}
          />
        ))}
      </List>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  min-width: 280px;
`;

const Servername = styled.div`
  font-weight: bold;
  color: ${theme.colors.buttonBg};
  font-size: 1.5rem;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: ${theme.colors.BCGScondary};
  width: 100%;
  max-height: 80px;
  padding: 20px;
  max-width: 500px;
  gap: 20px;
  margin-top: 20px;
`;

const List = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: ${theme.colors.BCGScondary};
  flex-direction: column;
  width: 100%;
  font-weight: bold;
  color: ${theme.colors.fontPrimary};
  font-size: 1.3rem;
`;
