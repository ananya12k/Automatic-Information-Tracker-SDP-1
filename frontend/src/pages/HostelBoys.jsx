import Card from "../components/Card";
// import NavBarServices from "../components/NavBarServices";

const HostelBoys = () => {
  return (
    <>
      {/* <NavBarServices /> */}
      {/* Later on, this data will come from database */}
      <Card
        name="Hostel's Name"
        amenities="Hostel's Amentities"
        address="Hostel's Location"
        phoneNumber="Hostel's Phone"
      />
      <Card
        name="Hostel's Name"
        amenities="Hostel's Amentities"
        address="Hostel's Location"
        phoneNumber="Hostel's Phone"
      />
      <Card
        name="Hostel's Name"
        amenities="Hostel's Amentities"
        address="Hostel's Location"
        phoneNumber="Hostel's Phone"
      />
    </>
  );
};

export default HostelBoys;
