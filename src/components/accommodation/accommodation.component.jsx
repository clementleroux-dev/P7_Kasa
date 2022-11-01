import { Link } from "react-router-dom";
import "./accommodation.styles.scss";

const Accommodation = ({ data }) => {
  return (
    <section className="home-cards__container">
      {data.map((el) => {
        return (
          <Link
            className="home-cards__card"
            to={`/accommodation/${el.id}`}
            key={el.id}
          >
            <img src={el.cover} alt={el.title} />
            <p className="home-cards__title">{el.title}</p>
          </Link>
        );
      })}
    </section>
  );
};

export default Accommodation;
