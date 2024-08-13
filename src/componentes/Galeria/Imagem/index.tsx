import { styled } from "styled-components"
import BotaoIcone from "../../BotaoIcone"
import React from "react"

const Figure = styled.figure`
    width: ${props => props.$expandida ? '100%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: ${props => props.$border ? '20px 20px 0 0' : '0'};
    }
    figcaption {
        background-color: #001634;
        border-radius: ${props => props.$border ? '0 0 20px 20px' : '0'};
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
            font-size: 16px;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado, border = true}) => {
    return (
    <Figure id={`foto-${foto.id}`} $expandida={expandida}  $border={border} >
        <img src={foto.path} alt={foto.alt} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Rodape>
                <h4>{foto.fonte}</h4>
                <BotaoIcone>
                    <img src="/icones/favorito.png" alt="Icone de favorito"/>
                </BotaoIcone>
                {!expandida && <BotaoIcone aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}>
                    <img src="/icones/expandir.png" alt="Icone de expandir" />
                </BotaoIcone>}
            </Rodape>
        </figcaption>
    </Figure>)
}

export default Imagem