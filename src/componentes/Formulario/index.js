import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";
import { useState } from "react";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.colaboradorCadastrado({ nome, cargo, telefone, email, endereco });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para a plataforma</h2>

        <CampoTexto
          obrigatorio={true}
          label="Nome"
          placeholder="Digite seu nome"
          valor={nome}
          aoAlterado={(valor) => setNome(valor)}
        />

        <CampoTexto
          obrigatorio={true}
          label="Função"
          placeholder="Digite sua função na empresa"
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <CampoTexto
          label="Telefone"
          placeholder="Digite seu telefone"
          valor={telefone}
          aoAlterado={(valor) => setTelefone(valor)}
        />

        <CampoTexto
          label="Email"
          placeholder="Digite seu email"
          valor={email}
          aoAlterado={(valor) => setEmail(valor)}
        />

        <CampoTexto
          label="Endereço"
          placeholder="Digite seu endereço, cidade e estado"
          valor={endereco}
          aoAlterado={(valor) => setEndereco(valor)}
        />

        <ListaSuspensa
          obrigatorio={true}
          label="Selecione seu Cargo"
          itens={props.cargo}
          valor={cargo}
          aoAlterado={(valor) => setCargo(valor)}
        />

        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
