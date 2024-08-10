import styled from "styled-components"

const BannerEstilizado = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  background: ${props => `url(${props.$backgroundImage})`} no-repeat center;
  background-size: cover;
  border-radius: 20px;
  min-height: 328px;
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
const Banner = ({ texto, backgroundImage}) => {
  return (
    <BannerEstilizado $backgroundImage={backgroundImage}>
      <TituloBannerEstilizado>{texto}</TituloBannerEstilizado>
    </BannerEstilizado>
  )
}

export default Banner