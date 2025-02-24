// @flow
import * as React from "react";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Server } from "../../../components/info/Server";
import { styled } from "styled-components";
import { News } from "../../../components/info/News";
import { Playerstop } from "../../../components/info/Playerstop";
import { Icon } from "../../../components/icon/Icon";
type Props = {};
export const Info = (props: Props) => {
  return (
    <Infostyled>
      <Server />

      <News />
      <Playerstop />
    </Infostyled>
  );
};

const Infostyled = styled.div`
  min-height: 50vh;
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: flex-start;
`;
