const Footer = () => {
  return (
    <footer class="footer" id="footer_five">
      <div class="footer_contact">
        <div class="top">
          <h2>Контакти</h2>
          <p class="title">Місто Житомир</p>
          <a
            href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%92%D0%B8%D1%82%D1%80%D1%83%D0%BA%D0%B0,+9,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0,+10001/data=!4m2!3m1!1s0x472c635bc8077a9f:0x611439976084ea14?sa=X&ved=2ahUKEwi627_8s7zlAhXqzVkKHfUSAn8Q8gEwAHoECAoQAQ"
            target="_blanc"
          >
            <i class="fas fa-map-marker-alt"></i> &nbsp;вулиця Вітрука 9-В
          </a>
          <p class="phone">моб№ (096)99-78-078</p>
        </div>
        <nav class="menu_footer">
          <ul>
            <li>
              <a
                href="https://www.instagram.com/monaco.beauty_studio/"
                target="_blanc"
                class="inst"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blanc" class="face">
                <i class="fab fa-facebook-f"></i>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};
export default Footer;
