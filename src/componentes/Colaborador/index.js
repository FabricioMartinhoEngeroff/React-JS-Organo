import "./Colaborador.css";
import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Colaborador = ({ colaborador, corDeFundo, aoDeletar, aoFavoritar }) => {
  
  const favoritar = () => aoFavoritar(colaborador.id);

  const propsFavoritar = {
    size: 25,
    onClick: favoritar,
    title: colaborador.favorito ? "Desfavoritar" : "Favoritar", 
  };

  return (
    <div className="colaborador">
      <AiFillCloseCircle
        size={25}
        className="deletar"
        onClick={() => aoDeletar(colaborador.id)}
        title="Deletar colaborador" 
      />
      <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={colaborador.imagem} alt={`Foto de ${colaborador.nome}`} />
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favorito">
          {colaborador.favorito ? (
            <AiFillHeart {...propsFavoritar} color="#ff0000" />
          ) : (
            <AiOutlineHeart {...propsFavoritar} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
