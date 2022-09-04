import Title from "../Components/Title";
import masters from "../masters";
const Cuits = () => {
  return (
    <section className="master" id="master_three">
      <Title className="own-title">Наші майстри</Title>
      <div className="container">
        <div className="team">
          <div className="team__slider">
            {masters.map((master) => (
              <div key={master.id} className="item">
                <figure>
                  <img src={master.image} alt="Team member" />
                  <div className="figure_figcaption">
                    <a href="#" class="twit" target="_blanc">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" class="face" target="_blanc">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </figure>
                <div className="data">
                  <h4>{master.name}</h4>
                  <span className="position">
                    {master.position}
                    <br />
                    <br />
                    {master.phone}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Cuits;
