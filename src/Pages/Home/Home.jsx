import { useLoaderData } from "react-router-dom";
import DonationCards from "../../Components/DonationCards/DonationCards";
import Banner from "../../Components/Header/Banner/Banner";

const Home = () => {
  const donationData = useLoaderData();

  return (
    <div>
      <Banner donationData={donationData}></Banner>
      <DonationCards donationData={donationData}></DonationCards>
    </div>
  );
};

export default Home;
