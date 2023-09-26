import { useEffect, useState } from "react";
import { getStoredDonationData } from "../../Utilities/localstorage";
import DonationCard from "./DonationCard";
import NotFound from "../../Components/NotFound/NotFound";

const Donation = () => {
  const [donation, setDonation] = useState([]);
  const [noData, setNoData] = useState("");
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    const storedData = getStoredDonationData();
    if (storedData.length > 0) {
      setDonation(storedData);
    } else {
      setNoData("No Donation Found");
    }
  }, []);

  return (
    <div className='container mx-auto py-10 px-5 md:px-0'>
      {noData ? (
        <div className='mt-40'>
          <NotFound msg={noData}></NotFound>
        </div>
      ) : (
        <div>
          {showMore ? (
            <div className='grid md:grid-cols-2 gap-5 '>
              {donation.map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              ))}
            </div>
          ) : (
            <div className='grid md:grid-cols-2 gap-5 '>
              {donation.slice(0, 4).map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              ))}
            </div>
          )}
        </div>
      )}
      <div className='text-center py-4'>
        {donation.length > 4 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`btn btn-success border-none text-white capitalize bg-[#009444] ${
              showMore ? "hidden" : ""
            }`}
          >
            See all
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
