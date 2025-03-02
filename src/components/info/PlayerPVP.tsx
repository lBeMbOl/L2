// @flow

import { styled } from "styled-components";
import { size } from "../../styles/Common";
type Props = {
  id: number;
  name: any;
  count: any;
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

  min-height: ${size({ Fmax: 80, Fmin: 40 })};
  padding-left: 20px;
  padding-right: 20px;
  width: 100%;
`;
