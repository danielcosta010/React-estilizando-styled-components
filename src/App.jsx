import styled from "styled-components"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Header from "./componentes/Cabecalho"
import BarraLateral from "./componentes/BarraLateral"
import Banner from "./componentes/Banner"

const FundoGradiente = styled.div`
  background: linear-gradient(
  174.61deg,
  #041833 4.16%,
  #04244f 48%,
  #154580 96.76%);
  width: 100%;
  min-height: 100vw;
`
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`

function App() {
  

  return (
    <FundoGradiente>
      <EstilosGlobais />   
      <Header /> 
      <Container>
        <BarraLateral />  
        <Banner />
      </Container>
    </FundoGradiente>
  )
}

export default App
