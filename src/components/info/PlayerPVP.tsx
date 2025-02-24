// @flow
import * as React from "react";
import { styled } from "styled-components";
type Props = {
  id: number;
  name: string;
  count: number;
};
export const PlayerPVP = (props: Props) => {
  const color = props.id % 2 == 0 ? "#d8cecec0" : "#fbf5f5fb";
  return (
    <Player style={{ backgroundColor: `${color}` }}>
      {" "}
      <div>{props.id + 1}.</div> <div>{props.name}</div>
      <div>{props.count}</div>{" "}
    </Player>
  );
};

const Player = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  min-height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  min-width: 480px;
  max-width: 100vh;
`;
