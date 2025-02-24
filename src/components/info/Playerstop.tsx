// @flow
import Button from "@mui/material/Button/Button";
import { styled } from "styled-components";
import { PlayerPVP } from "./PlayerPVP";

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
  return (
    <div>
      <h2>Топ игроков</h2>
      <Header>
        <Servername>Server</Servername>

        <Button
          variant="contained"
          sx={{
            bgcolor: "#0909e2",
            color: "white",
            fontWeight: 700, // Альтернативная запись жирного
            fontSize: "1.1rem", // Размер шрифта
            width: 100, // Ширина в пикселях
            height: 40, // Высота в пикселях
            textTransform: "none",
            "&:hover": {
              bgcolor: "#01d9fa",
            },
          }}
        >
          PVP
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#000027",
            color: "white",
            fontWeight: 700, // Альтернативная запись жирного
            fontSize: "1.1rem", // Размер шрифта
            width: 100, // Ширина в пикселях
            height: 40, // Высота в пикселях
            textTransform: "none",
            "&:hover": {
              bgcolor: "#01d9fa",
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
    </div>
  );
};

const Servername = styled.div`
  font-weight: bold;
  color: #000027;
  font-size: 1.5rem;
  margin-right: 150px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6ebebc0;

  min-height: 80px;
  padding-left: 20px;
  min-width: 500px;
  gap: 20px;
`;

const List = styled.div`
  display: flex;
  align-items: flex-start;
  background-color: #f6ebebc0;
  flex-direction: column;
  min-height: 70vh;
  min-width: 500px;
  font-weight: bold;
  color: #000027;
  font-size: 1.5rem;
`;
