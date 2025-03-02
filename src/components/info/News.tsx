// @flow

import { styled } from "styled-components";
import { Annonce } from "./Annonce";

export const News = () => {
  return (
    <div>
      <Title>Новости и Акции</Title>
      <Annonce
        title="Новость 1"
        text="Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1 Текст Новости 1"
      />
      <Annonce title="Новость 2" text="Текст Новости 2" />
      <Annonce title="Новость 3" text="Текст Новости 3" />
      <Annonce title="Новость 4" text="Текст Новости 4" />
    </div>
  );
};

const Title = styled.h2`
  margin-left: 20px;
`;
