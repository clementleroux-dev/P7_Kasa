import "./banner.styles.scss";

const Banner = ({ info }) => {
  const { type, text } = info;

  return (
    <section
      className="banner"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/${type}.png')`,
      }}
    >
      <h1 className="banner__title">{text}</h1>
    </section>
  );
};

export default Banner;
