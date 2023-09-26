import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const donationData = useLoaderData();

  const [searchValue, setSearchValue] = useState("");
  const getSearchValue = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Banner getSearchValue={getSearchValue}></Banner>
      <DonationCards
        searchValue={searchValue}
        donationData={donationData}
      ></DonationCards>
    </div>
  );
};

export default Home;
