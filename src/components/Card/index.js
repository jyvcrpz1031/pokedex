import "./style.css";

const Card = ({ name, sprites }) => (
  <div className="card-container">
    {<img src={sprites.front_default} alt={name} />}
    <h1 className="poke-text" key={name}>
      {name.toUpperCase()}
    </h1>
  </div>
);

export default Card;
