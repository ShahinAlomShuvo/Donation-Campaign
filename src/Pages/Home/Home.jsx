import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";
import { useState } from "react";

const Home = () => {
  const donationData = useLoaderData();

  const [searchValue, setSearchValue] = useState("");
  const handleGetItem = (value) => {
    setSearchValue(value);
  };

  return (
    <div>
      <Banner handleGetItem={handleGetItem}></Banner>
      <DonationCards
        searchValue={searchValue}
        donationData={donationData}
      ></DonationCards>
    </div>
  );
};

export default Home;
