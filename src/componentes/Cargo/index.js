import "./Cargo.css";

const Cargo = (props) => {
  return (
    <section className="cargo" style={{ backgroundColor: props.corSecundaria }}>
      <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
    </section>
  );
};

export default Cargo;
