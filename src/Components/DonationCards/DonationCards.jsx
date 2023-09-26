import NotFound from "../NotFound/NotFound";
import DonationCard from "./DonationCard";

const DonationCards = ({ donationData, searchValue }) => {
  const lowercaseSearchValue = searchValue.toLowerCase();

  const filteredData = donationData.filter((data) => {
    if (!searchValue) {
      return true;
    }

    return lowercaseSearchValue === data.category.toLowerCase();
  });

  return (
    <div className='container mx-auto py-20 px-4 lg:px-0'>
      {filteredData.length === 0 ? (
        <NotFound msg={"No Match Found"}></NotFound>
      ) : (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
          {filteredData.map((data) => (
            <DonationCard key={data.id} donationData={data} />
          ))}
        </div>
      )}
    </div>
  );
};

export default DonationCards;
