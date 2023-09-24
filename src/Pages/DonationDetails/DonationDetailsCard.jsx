const DonationDetailsCard = ({ donationDetails }) => {
  const { image, title, description, price, text_btnBg } =
    donationDetails || {};
  return (
    <div className='container mx-auto py-10 md:px-4 lg:px-0'>
      <div className='relative'>
        <img className='w-full h-[70vh] rounded' src={image} />
        <div className='bg-black bg-opacity-60 h-20 flex items-center absolute bottom-0 w-full'>
          <button
            style={{ backgroundColor: text_btnBg }}
            className='btn border-none text-white capitalize ml-6'
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h2 className='text-3xl font-bold py-4'>{title}</h2>
      <p className='text-gray-400'>{description}</p>
    </div>
  );
};

export default DonationDetailsCard;
