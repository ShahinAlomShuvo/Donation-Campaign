import { useEffect, useState } from "react";
import bannerBg from "../../../assets/Images/bannerbg.jpeg";
import DonationCard from "../../DonationCards/DonationCard";
const Banner = ({ donationData }) => {
  const [value, setValue] = useState("");
  const [categoryData, setCategoryData] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    const searchValue = e.target.category.value;
    setValue(searchValue);
  };

  useEffect(() => {
    const foundCategories = donationData.filter((data) =>
      data.category.includes(value)
    );
    setCategoryData(foundCategories);
  }, [donationData, value]);

  return (
    <div>
      <div
        className='hero h-[65vh]'
        style={{
          backgroundImage: ` url(${bannerBg})`,
        }}
      >
        <div className='hero-overlay bg-white bg-opacity-90'></div>
        <div className='hero-content text-center text-neutral-content'>
          <div className='max-w-xl'>
            <h1 className='mb-5 text-4xl text-black font-bold'>
              I Grow By Helping People In Need
            </h1>
            <div>
              <form onSubmit={formHandler}>
                <input
                  name='category'
                  type='text'
                  placeholder='Search here'
                  className='input input-bordered text-black rounded-e-none md:w-full md:max-w-sm'
                />
                <input
                  type='submit'
                  value='Search'
                  className='bg-red-500 hover:bg-red-600 rounded-s-none text-white font-bold py-3 px-4 rounded-md'
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      n
    </div>
  );
};

export default Banner;
