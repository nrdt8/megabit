import "./NewsBlock.css";
import { useState } from "react";

const NewsBlock = ({ date, title, img }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="news-block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img
        className={`news-block_img ${hover ? "visible" : ""}`}
        src={img}
        alt=""
      />
      <div className="news-block_date">{date}</div>
      <div className="news-block_title">{title}</div>
    </div>
  );
};

export default NewsBlock;
