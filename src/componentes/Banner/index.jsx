import styled from "styled-components"

const BannerEstilizado = styled.div`
  position: relative;
  background: url('./banner.png') no-repeat center;
  border-radius: 20px;
  width: 1156px;
  height: 328px;
  @media (max-width: 744px) {
    width: 426px;
  }

`
const TituloBannerEstilizado = styled.h1`
  position: absolute;
  color: aliceblue;
  font-size: 40px;
  top: 60px;
  left: 50px;

  width: 300px;

  
  @media (max-width: 744px) {
    width: 266px;
    left: 35px;
    font-size: 32px;
  }
`
const Banner = () => {
  return (
    <BannerEstilizado>
      <TituloBannerEstilizado>A galeria mais completa de fotos do espaço!</TituloBannerEstilizado>
    </BannerEstilizado>
  )
}

export default Banner