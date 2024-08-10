import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Header from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import backgroundImage from "./assets/banner.png";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vw;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;
const MainContainer = styled.div`
  display: flex;
  gap: 50px;
`;

function App() {
  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Header />
        <MainContainer>
          <BarraLateral />
          <Banner
            texto="A galeria mais completa de fotos do espaço!"
            backgroundImage={backgroundImage}
          />
        </MainContainer>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
