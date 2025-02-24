// @flow

import { Annonce } from "./Annonce";

export const News = () => {
  return (
    <div>
      <h2>Новости и Акции</h2>
      <Annonce title="Новость 1" text="Текст Новости 1" />
      <Annonce title="Новость 2" text="Текст Новости 2" />
      <Annonce title="Новость 3" text="Текст Новости 3" />
      <Annonce title="Новость 4" text="Текст Новости 4" />
    </div>
  );
};
