import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";

const Formulario = () => {

  const cargos = [
    "Diretor Geral",
    "Gerente de Qualidade",
    "Gerente de Logística",
    "Gerente de Vendas e Marketing",
    "Engenheiro de Alimentos",
    "Técnico em Laticínios",
    "Supervisor de Produção",
    "Analista de Marketing",
    "Operador de Produção",
    "Representante Comercial",
  ];
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para a plataforma</h2>
        <CampoTexto label="Name" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Telefone" placeholder="Digite seu telefone" />
        <CampoTexto label="Endereço" placeholder="Digite seu endereço" />
        <ListaSuspensa label="Selecione o cargo"itens={cargos}/>
        <Botao>
          Criar Card
          </Botao> 
      </form>
    </section>
  );
};
export default Formulario;
