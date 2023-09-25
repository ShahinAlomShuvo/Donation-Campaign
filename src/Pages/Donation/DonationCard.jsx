import { Link } from "react-router-dom";
const DonationCard = ({ data }) => {
  const {
    id,
    image,
    title,
    price,
    text_btnBg,
    category,
    category_bg,
    card_bg,
  } = data || {};
  return (
    <div className='md:px-4 lg:px-0'>
      <div
        style={{ backgroundColor: card_bg }}
        className='relative flex w-full max-w-[48rem] flex-row rounded-xl  bg-clip-border text-gray-700 shadow-md md:h-64 lg:h-auto'
      >
        <div className='relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none  bg-clip-border text-gray-700'>
          <img src={image} alt='image' className='h-full w-full object-cover' />
        </div>
        <div className='p-6'>
          <h6
            style={{ backgroundColor: category_bg, color: text_btnBg }}
            className='mb-4 block font-sans text-base font-semibold capitalize leading-relaxed tracking-normal  antialiased w-28 py-2 rounded-md text-center'
          >
            {category}
          </h6>
          <h4 className='mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased'>
            {title}
          </h4>
          <p
            style={{ color: text_btnBg }}
            className='mb-4 font-semibold block font-sans text-xl leading-relaxed  antialiased '
          >
            ${price}
          </p>

          <Link to={`/donationDetails/${id}`}>
            <button
              style={{ backgroundColor: text_btnBg }}
              className=' flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle text-white font-sans text-xs font-bold capitalize  transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none'
              type='button'
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
