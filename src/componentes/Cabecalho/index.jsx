import styled from "styled-components";
import CampoTexto from "../CampoTexto";

const HeaderEstilizado = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    
  }
`

const Header = () => {
  return (
    <HeaderEstilizado>
      <img src="./logo.png" alt="Imagem logo do space app" />
      <CampoTexto />
    </HeaderEstilizado>
  )
}

export default Header;