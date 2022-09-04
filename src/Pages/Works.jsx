import works from "../works";
import Title from "../Components/Title";
const Works = () => {
  return (
    <section className="works" id="works_four">
       <Title className="own-title">Наші роботи</Title>
      <div className="container">
        <div className="work__arrow">
          <div className="our__works">
            {works.map((work) => (
              <img
                key={work.id}
                className="image__work"
                src={work.image}
                alt="beauty"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Works;
