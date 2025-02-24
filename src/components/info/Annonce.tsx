// @flow
import * as React from "react";
import { Icon } from "../icon/Icon";
import { styled } from "styled-components";
type Props = {
  title: string;
  text: string;
};
export const Annonce = (props: Props) => {
  return (
    <AnnonceStyle>
      <Icon id="play" viewBox="0 0 35 35" width="35" height="35" />
      <Title>
        {props.title}
        <TextNews>{props.text}</TextNews>
      </Title>
    </AnnonceStyle>
  );
};

const AnnonceStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #f6ebebc0;

  min-height: 150px;
  padding-left: 20px;
  min-width: 500px;
  margin-bottom: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  color: #000027;
  font-size: 1.5rem;
`;

const TextNews = styled.div`
  font-weight: bold;
  color: #969696;
  font-size: 1.2rem;
  display: flex;
`;
