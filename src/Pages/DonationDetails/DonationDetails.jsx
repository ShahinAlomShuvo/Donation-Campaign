import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationDetailsCard from "./DonationDetailsCard";

const DonationDetails = () => {
  const donationData = useLoaderData();
  const { id } = useParams();
  const [donationDetails, setDonationDetails] = useState([]);
  useEffect(() => {
    const findDonation = donationData.find((data) => data.id == id);
    setDonationDetails(findDonation);
  }, [donationData, id]);

  return (
    <div>
      {
        <DonationDetailsCard
          donationDetails={donationDetails}
        ></DonationDetailsCard>
      }
    </div>
  );
};

export default DonationDetails;
