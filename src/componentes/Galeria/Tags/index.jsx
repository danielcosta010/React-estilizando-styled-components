import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.div`
  display: flex;
  gap: 52px;
  margin-top: 20px;
`;
const TagParagrafo = styled.p`
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  color: #d9d9d9;
`;

const Botao = styled.button`
  background-color: #bccebc43;
  color: #d9d9d9;
  padding: 8px 10px;
  border-radius: 10px;
  border: 2px solid ${props => props.$ativo ? '#C98CF1' : '#bccebc43'};
  /* background-image: ${ props => props.$ativo ? `linear-gradient(180.61deg, #041839 7.16%, #04243F),
    radial-gradient(circle at top left, #C98CF1, #7B78E5);
  background-origin: border-box;
  background-clip: padding-box, border-box;` : '#D9D9D9'}; */
  /* background-image: linear-gradient(180.61deg, #041839 7.16%, #04243F),
    radial-gradient(circle at top left, #C98CF1, #7B78E5);
  background-origin: border-box;
  background-clip: padding-box, border-box; */
  cursor: pointer;
`;
const ContainerBotao = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

const Tags = (ativo = true) => {
  return (
    <TagsContainer>
      <TagParagrafo>Busque por tags:</TagParagrafo>
      <ContainerBotao>
        {tags.map((tag) => (
          <Botao key={tag.id} $ativo={tag.id === 0 ? ativo : ''}>{tag.titulo}</Botao>
        ))}
      </ContainerBotao>
    </TagsContainer>
  );
};

export default Tags;
