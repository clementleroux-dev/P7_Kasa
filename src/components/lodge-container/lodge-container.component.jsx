import LodgeCard from "../lodge-card/lodge-card.component";
import "./lodge-container.styles.scss";

const LodgeContainer = ({ lodgings }) => {
  return (
    <div className="lodge-container">
      {lodgings.map((lodge) => (
        <LodgeCard key={lodge.id} lodge={lodge} />
      ))}
    </div>
  );
};
export default LodgeContainer;
