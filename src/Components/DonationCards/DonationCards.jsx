import DonationCard from "./DonationCard";

const DonationCards = ({ donationData }) => {
  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-20 px-4 lg:px-0'>
      {donationData?.map((data) => (
        <DonationCard key={data.id} donationData={data}></DonationCard>
      ))}
    </div>
  );
};

export default DonationCards;
