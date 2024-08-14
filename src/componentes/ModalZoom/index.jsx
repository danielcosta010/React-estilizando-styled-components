import styled from "styled-components";
import Imagem from "../Galeria/Imagem";

const Overlay = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const DialogEstilizada = styled.dialog`
  position: absolute;
  top: 294px;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 60%;
  height: 60%;
`;
const FormularioEstilizado = styled.form`
  background-color: #d3b5b524;
  padding: 0;
  & button {
    color: #ececec;
    cursor: pointer;
    font-size: 24px;
    position: absolute;
    top: 20px;
    right: 40px;
    background-color: transparent;
    font-weight: 900;
    border: none;
  }
`;

const ModalZoom = ({ foto, aoFechar }) => {
  
  return (
    <>
      {foto && (
        <>
          <Overlay
            onClick={aoFechar}
          />
          <DialogEstilizada open={!!foto}>
            <Imagem foto={foto} expandida={true} border={false} />
            <FormularioEstilizado method="dialog">
              <button onClick={aoFechar}>&#215;</button>
            </FormularioEstilizado>
          </DialogEstilizada>
        </>
      )}
    </>
  );
};

export default ModalZoom;
