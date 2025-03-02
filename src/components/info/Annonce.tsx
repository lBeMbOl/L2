// @flow
import { theme } from "../../styles/Theme";
import { Icon } from "../icon/Icon";
import { styled } from "styled-components";
type Props = {
  title: string;
  text: string;
};
export const Annonce = (props: Props) => {
  return (
    <AnnonceStyle>
      <div>
        <Icon id="play" viewBox="0 0 35 35" width="35" height="35" />
      </div>
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
  background-color: ${theme.colors.BCGScondary};
  padding: 20px;

  min-width: 320px;
  max-width: 900px;
  margin: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  color: ${theme.colors.fontPrimary};
  font-size: 1.5rem;
`;

const TextNews = styled.div`
  font-weight: bold;
  color: ${theme.colors.fontSecondary};
  font-size: 1.2rem;
  display: flex;
`;
