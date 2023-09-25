const getStoredDonationData = () => {
  const storedDonationData = localStorage.getItem("donation_data");
  if (storedDonationData) {
    const donationData = JSON.parse(storedDonationData);
    return donationData;
  }
  return [];
};

const setDonationDataToStore = (donationDetails) => {
  const storedDonationData = getStoredDonationData();

  const exist = storedDonationData.find(
    (donationData) => donationData.id === donationDetails.id
  );

  if (!exist) {
    storedDonationData.push(donationDetails);
    localStorage.setItem("donation_data", JSON.stringify(storedDonationData));
  }
};

export { setDonationDataToStore, getStoredDonationData };
