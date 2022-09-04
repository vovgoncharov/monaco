import services from "../service";
import Title from "../Components/Title";

const Service = () => {
  return (
    <section className="service" id="service_two">
      <Title className="own-title">Наші послуги</Title>
      <div className="container">
        <div className="our__service">
          <div className="our__service-top">
            {services.map((service) => (
              <div key={service.id} className="haircut">
                <img src={service.image} alt="haircut" />
                <span>{service.name}</span>
                <p>{service.position}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Service;
