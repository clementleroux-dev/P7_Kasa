import "./lodge-card.styles.scss";

const LodgeCard = ({ lodge }) => {
  const { cover, title } = lodge;
  return (
    <button className="lodge-card">
      <div
        className="lodge-card__img"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%),url(${cover})`,
        }}
      />
      <div className="lodge-card__title">
        <h2>{title}</h2>
      </div>
    </button>
  );
};

export default LodgeCard;
