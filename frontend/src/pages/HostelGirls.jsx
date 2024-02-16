import Card from "../components/Card";

const HostelGirls = () => {
  return (
    <>
      {/* Later on, this data will come from database */}
      <Card name="Hostel's Name" amenities="Hostel's Amentities" address="Hostels's location" phoneNumber="Hostel's phone" />
      <Card name="Hostel's Name" amenities="Hostel's Amentities" address="Hostels's location" phoneNumber="Hostel's phone" />
      <Card name="Hostel's Name" amenities="Hostel's Amentities" address="Hostels's location" phoneNumber="Hostel's phone" />
    </>
  );
};

export default HostelGirls;
