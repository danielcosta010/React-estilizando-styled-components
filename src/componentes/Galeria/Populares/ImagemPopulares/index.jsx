const ImagemPopulares = ({ fotos }) => {
  return (
    <>
      {fotos.map(foto => 
        <figure id={`foto-${foto.id}`} key={foto.id}>
          <img src={foto.path} alt={`Imagem da ${foto.titulo}`} />
        </figure>
      )}
    </>
  );
};

export default ImagemPopulares;
