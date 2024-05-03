import "./styles.css";

const Subtitulo = (props: any) => {
  return (
    <div className="div-subtitulo">
      <h2 className="subtitulo">{props.content}</h2>
    </div>
  );
};
export default Subtitulo;
