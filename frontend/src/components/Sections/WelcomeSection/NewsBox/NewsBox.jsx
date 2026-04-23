import { useSite } from "../../../../context/SiteContext";
import NewsBlock from "./NewsBlock/NewsBlock";
import "./NewsBox.css";

const API_IMG_URL = import.meta.env.VITE_IMG_API_URL;

const NewsBox = () => {
  const { news } = useSite();
  if (!news) return null;

  return (
    <div className="news-box">
      {news.map((elem) => (
        <NewsBlock
          key={elem.id}
          date={elem.date}
          title={elem.title}
          img={`${API_IMG_URL}${elem.img}`}
        />
      ))}
    </div>
  );
};

export default NewsBox;
