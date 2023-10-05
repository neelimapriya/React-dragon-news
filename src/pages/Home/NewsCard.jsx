import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { _id,title, total_view, rating, author,image_url, img, details } =
    news;
  return (
    <div className="card card-compact  bg-base-100 shadow-xl mb-16 ">
      <figure>
        <img src={image_url} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>
          {details.length > 200 ? (
            <p>
              {details.slice(0, 200)}{" "}
              <Link to={`/news/${_id}`} className="text-yellow-500 font-semibold">
                Read more...
              </Link>
            </p>
          ) : (
            <p>{details}</p>
          )}
        </p>
      </div>
    </div>
  );
};

export default NewsCard;
