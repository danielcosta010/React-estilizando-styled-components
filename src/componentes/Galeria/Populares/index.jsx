import styled from "styled-components";
import Titulo from "../../Titulo";
import arrayFotos from "../../../fotosPopulares.json";
import { useState } from "react";
import ImagemPopulares from "./ImagemPopulares";

const PopularesEstilizadas = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & img {
    border-radius: 20px;
  }
`;
const BotaoEstilizado = styled.button`
  width: 70%;
  border-radius: 10px;
  padding: 20px 0;
  color: #fff;
  cursor: pointer;
  font-size: 20px;
  border: 2px solid transparent;
  background-image: linear-gradient(180.61deg, #162E65 , #0A2B59),
    radial-gradient(circle at top left, #C98CF1, #7B78E5);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`

const Populares = () => {
  const [fotosPopulares, setFotosPopulares] = useState(arrayFotos);
  return (
    <PopularesEstilizadas>
      <Titulo>Populares</Titulo>
      <ImagemPopulares fotos={fotosPopulares} />
      <BotaoEstilizado>Ver mais</BotaoEstilizado>
    </PopularesEstilizadas>
  );
};

export default Populares;
