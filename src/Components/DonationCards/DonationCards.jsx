import DonationCard from "./DonationCard";

const DonationCards = ({ donationData, searchValue }) => {
  const lowercaseSearchValue = searchValue.toLowerCase();

  return (
    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4 container mx-auto py-20 px-4 lg:px-0'>
      {donationData?.map((data) => {
        if (!searchValue || lowercaseSearchValue === "") {
          return <DonationCard key={data.id} donationData={data} />;
        }

        const lowercaseCategory = data.category.toLowerCase();

        if (lowercaseSearchValue === lowercaseCategory) {
          return <DonationCard key={data.id} donationData={data} />;
        }
        return null;
      })}
    </div>
  );
};

export default DonationCards;
