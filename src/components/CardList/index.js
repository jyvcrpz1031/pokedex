import "./style.css";
import Card from "../Card";

const CardList = ({ pokemons }) => (
  <div className="card-list">
    {pokemons &&
      pokemons.map((item, idx) => {
        return <Card key={idx} name={item.name} sprites={item.sprites} />;
      })}
  </div>
);

export default CardList;
