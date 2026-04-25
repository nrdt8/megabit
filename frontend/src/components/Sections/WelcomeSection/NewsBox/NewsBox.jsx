import { useSite } from "../../../../context/SiteContext";
import NewsBlock from "./NewsBlock/NewsBlock";
import "./NewsBox.css";

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
          img={elem.img}
        />
      ))}
    </div>
  );
};

export default NewsBox;
