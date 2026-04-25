import { useSite } from "/src/context/SiteContext";
import "./ReviewsSection.css";

const ReviewsSection = () => {
  const { reviews } = useSite();
  if (!reviews) return null;

  return (
    <section className="reviews section">
      <div className="reviews_container">
        <div className="reviews_content">
          <div className="reviews_title">О нашей работе</div>
          <div className="reviews_description">
            Отзывы от заказчиков с которыми мы сотрудничаем
          </div>
          <ol>
            {reviews.map((elem, index) => {
              return (
                <li key={index}>
                  <span>{index + 1}. </span>
                  {elem.title}
                </li>
              );
            })}
          </ol>
        </div>
        <div className="reviews_gallery">
          {reviews.map((elem, index) => {
            return (
              <div className="reviews__card" key={index}>
                <img src={elem.img} alt="Документ" className="reviews__image" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
