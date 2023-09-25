import { useEffect, useState } from "react";
import { getStoredDonationData } from "../../Utilities/localstorage";
import DonationCard from "./DonationCard";

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
  console.log(showMore);

  return (
    <div className='container mx-auto py-10'>
      {noData ? (
        <p>{noData}</p>
      ) : (
        <div>
          {showMore ? (
            <div className='grid grid-cols-2 gap-5'>
              {donation.map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              ))}
            </div>
          ) : (
            <div className='grid grid-cols-2 gap-5'>
              {donation.slice(0, 4).map((data) => (
                <DonationCard key={data.id} data={data}></DonationCard>
              ))}
            </div>
          )}
        </div>
      )}
      <div className='text-center py-4'>
        {donation.length >= 4 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className={`btn capitalize btn-primary ${showMore ? "hidden" : ""}`}
          >
            See all
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
