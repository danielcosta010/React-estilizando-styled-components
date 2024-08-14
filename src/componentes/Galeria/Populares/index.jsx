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

const Populares = () => {
  const [fotosPopulares, setFotosPopulares] = useState(arrayFotos);
  return (
    <PopularesEstilizadas>
      <Titulo>Populares</Titulo>
      <ImagemPopulares fotos={fotosPopulares} />
    </PopularesEstilizadas>
  );
};

export default Populares;
