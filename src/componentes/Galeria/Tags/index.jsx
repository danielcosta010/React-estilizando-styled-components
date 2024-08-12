import { useState } from "react";
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
  font-size: 24px;
  padding: 12px;
  background-color: #bccebc43;
  color: #d9d9d9;
  padding: 8px 10px;
  border-radius: 10px;
  border: 2px solid ${props => (props.$ativo ? "#C98CF1" : "#bccebc43")};
  cursor: pointer;

  /* Estilos adicionais para o botão ativo */
  ${(props) =>
    props.$ativo 
  //  &&
  //   `
  //   background-image: linear-gradient(180.61deg, #50515492 7.16%, #57595b84),
  //                     radial-gradient(circle at top left, #C98CF1, #7B78E5);
  //   background-origin: border-box;
  //   background-clip: padding-box, border-box;
  // `
  }
`;

const ContainerBotao = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Tags = () => {
  const [ativoId, setAtivoId] = useState(null); // Estado para rastrear o botão ativo

  return (
    <TagsContainer>
      <TagParagrafo>Busque por tags:</TagParagrafo>
      <ContainerBotao>
        {tags.map((tag) => (
          <Botao
            key={tag.id}
            $ativo={tag.id === ativoId}
            onClick={() => setAtivoId(tag.id)} // Atualiza o estado ativoId ao clicar
          >
            {tag.titulo}
          </Botao>
        ))}
      </ContainerBotao>
    </TagsContainer>
  );
};

export default Tags;
