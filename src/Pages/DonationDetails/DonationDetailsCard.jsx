import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setDonationDataToStore } from "../../Utilities/localstorage";

const DonationDetailsCard = ({ donationDetails }) => {
  const { image, title, description, price, text_btnBg } =
    donationDetails || {};

  const donateHandler = () => {
    toast.success("Your Donation Is Successful", {
      position: "top-center",
      autoClose: 3000,
    });

    setDonationDataToStore(donationDetails);
  };

  return (
    <div className='container mx-auto py-10 px-5 lg:px-0'>
      <div className='relative'>
        <img className='w-full h-[50vh] md:h-[70vh] rounded' src={image} />
        <div className='bg-black bg-opacity-60 h-20 flex items-center absolute bottom-0 w-full'>
          <button
            onClick={donateHandler}
            style={{ backgroundColor: text_btnBg }}
            className='btn border-none text-white capitalize ml-6'
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <h2 className='text-3xl font-bold py-4'>{title}</h2>
      <p className='text-gray-400'>{description}</p>
      <ToastContainer position='center top' />
    </div>
  );
};

export default DonationDetailsCard;
