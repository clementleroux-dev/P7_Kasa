import Banner from "../banner/banner.component";
import Accommodation from "../accommodation/accommodation.component";
import data from "../../logements.json";

const Home = () => {
  const info = {
    type: "banner-home",
    text: "Chez vous, partout et ailleurs",
  };

  return (
    <main>
      <Banner info={info} />
      <Accommodation data={data} />
    </main>
  );
};
export default Home;
