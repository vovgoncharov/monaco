import { useState } from "react";
import data from "../data";
const Home = () => {
  const [images, setImages] = useState(data);
  return (
    <div className="top__slider">
      <div className="slider__track">
        {images.map((image) => (
          <figure key={image.id}>
            <img src={image.image} alt="girl" class="slide" />
            <div class="figcaption">
              <div class="info">
                <span>{image.text}</span>
                <h1>{image.title}</h1>
              </div>
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
};
export default Home;
