import styled from "styled-components";
import search from "./search.png";

const ContainerEstilizado = styled.div`
  position: relative;
  display: inline-block;
`;
const CampoTextoEstilizado = styled.input`
  width: 566px;
  border-radius: 10px;
  border: 2px solid transparent;
  background-image: linear-gradient(180.61deg, #041839 7.16%, #04243F),
    radial-gradient(circle at top left, #C98CF1, #7B78E5);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  padding: 12px 16px;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: #e0d7ca;

  @media (max-width: 744px) {
    width: 392px;
  }
`;

const IconeLupa = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

const CampoTexto = () => {
  return (
    <ContainerEstilizado>
      <CampoTextoEstilizado type="text" placeholder="O que você procura?" />
      <IconeLupa src={search} alt="Icone lupa" />
    </ContainerEstilizado>
  );
};

export default CampoTexto;
