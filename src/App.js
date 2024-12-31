import { useState } from "react";
import Formulario from "./componentes/Formulario";
import Time from "./componentes/Time";
import Rodape from "./componentes/Rodape";
import { v4 as uuidv4 } from "uuid";
import Banner from "./componentes/Banner";


function App() {
  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: "Programação",
      cor: "#57C278",
    },
    {
      id: uuidv4(),
      nome: "Front-End",
      cor: "#82CFFA",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#A6D157",
    },
    {
      id: uuidv4(),
      nome: "Devops",
      cor: "#E06B69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#DB6EBF",
    },
    {
      id: uuidv4(),
      nome: "Mobile",
      cor: "#FFBA05",
    },
    {
      id: uuidv4(),
      nome: "Inovação e Gestão",
      cor: "#FF8A29",
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: "Ana Clara",
      cargo: "Desenvolvedora Full-Stack",
      imagem: "https://randomuser.me/api/portraits/women/68.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Carlos Eduardo",
      cargo: "Engenheiro de Software",
      imagem: "https://randomuser.me/api/portraits/men/45.jpg",
      time: times[0].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Mariana Silva",
      cargo: "Especialista em Python e Data Science",
      imagem: "https://randomuser.me/api/portraits/women/25.jpg",
      time: times[2].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Lucas Ferreira",
      cargo: "Engenheiro de DevOps",
      imagem: "https://randomuser.me/api/portraits/men/33.jpg",
      time: times[3].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Bruna Costa",
      cargo: "Designer UX/UI",
      imagem: "https://randomuser.me/api/portraits/women/21.jpg",
      time: times[4].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Gabriel Souza",
      cargo: "Desenvolvedor Mobile",
      imagem: "https://randomuser.me/api/portraits/men/52.jpg",
      time: times[5].nome,
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: "Fernanda Oliveira",
      cargo: "Gerente de Projetos",
      imagem: "https://randomuser.me/api/portraits/women/44.jpg",
      time: times[6].nome,
    },
  ];

  const [colaboradores, setColaboradores] = useState(inicial);

  function deletarColaborador(id) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  function mudarCorDoTime(cor, id) {
    setTimes(times.map((time) => (time.id === id ? { ...time, cor } : time)));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }]);
  }

  function resolverFavorito(id) {
    setColaboradores(
      colaboradores.map((colaborador) =>
        colaborador.id === id
          ? { ...colaborador, favorito: !colaborador.favorito }
          : colaborador
      )
    );
  }

  return (
    <div className="App">
     <Banner enderecoImagem='/imagens/banner.png'/>
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) =>
          setColaboradores([...colaboradores, colaborador])
        }
      />

      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time) => (
          <Time
            mudarCor={mudarCorDoTime}
            key={time.id}
            time={time}
            colaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
            aoDeletar={deletarColaborador}
            aoFavoritar={resolverFavorito}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
