import "./Carousel.css";
import { useEffect, useState, Children, cloneElement } from "react";
const Carousel = ({ children }) => {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    setPages(
      Children.map(children, (child) => {
        return cloneElement(child, {
          style: {
            height: "100%",
            minwidth: "100%",
            maxwidth: "100%",
          },
        });
      })
    );
  }, []);
  return (
    <div className="main-container">
      <div className="window">
        <div className="all-pages">{children}</div>
      </div>
    </div>
  );
};
export default Carousel;
