import styled from "styled-components";
import icones from "./rodape.json";

const RodapeEstilizado = styled.footer`
  background-color: #04244f;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 20px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 60px;
  p {
    color: #fff;
    font-weight: 500;
  }
`;
const IconesRodape = styled.div`
  display: flex;
  align-items: center;
  column-gap: 40px;
`;

const Rodape = () => {
  return (
    <RodapeEstilizado>
      <IconesRodape>
        {icones.map((icone, index) => (
          <a href={icone.link} target="_blank" key={icone.link}>
            <img key={index} src={icone.path} alt={icone.alt} />
          </a>
        ))}
      </IconesRodape>
      <p>Desenvolvido por Alura.</p>
    </RodapeEstilizado>
  );
};

export default Rodape;
