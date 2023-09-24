import { Link } from "react-router-dom";

const DonationCard = ({ donationData }) => {
  const { id, image, title, card_bg, category, category_bg, text_btnBg } =
    donationData || {};

  return (
    <div>
      <Link to={`/donationDetails/${id}`}>
        <div style={{ backgroundColor: card_bg }} className='card h-80'>
          <figure>
            <img className='w-full' src={image} />
          </figure>

          <div className='card-body'>
            <p
              style={{ backgroundColor: category_bg, color: text_btnBg }}
              className='w-24 text-center py-2 rounded-md font-semibold flex-grow-0'
            >
              {category}
            </p>
            <h2 style={{ color: text_btnBg }} className='card-title '>
              {title}
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DonationCard;
