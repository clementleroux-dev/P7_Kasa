import LodgeContainer from "./components/lodge-container/lodge-container.component";
import lodgings from "./data/logements.json";

const App = () => {
  return <LodgeContainer lodgings={lodgings} />;
};

export default App;
