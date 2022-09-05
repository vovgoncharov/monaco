import salon from "../assets/img/salon.jpg";
import Title from "../Components/Title";
const About = () => {
  return (
    <section className="about" id="about_one">
      <div className="container">
        <div className="about__wrap">
          <div className="about__left">
            <Title className="own-title">Про нас</Title>
            <p>
              Салон краси <span>«Monaco»</span> раді відкрити свої двері перед
              поціновувачами прекрасного! Ми працюємо для того, щоб робити світ
              гарнішим, а вас, наші дорогі відвідувачі, ще і щасливішими.
            </p>
            <p class="mision">
              Наша місія - створення природнього елегантного образу, який максимально
              розкриває індивідуальність кажного клієнта.
            </p>
          </div>
          <img src={salon} alt="makeup" className="icon" />
          <div className="about_right">
            <h3 className="title-about">
              Для вашого комфорту
              <br />
              ми працюємо тільки по запису
            </h3>
            <p>(096)99-78-078</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
