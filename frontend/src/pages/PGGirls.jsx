import Card from "../components/Card";
import NavBarServices from "../components/NavBarServices";

const PGGirls = () => {
  return (
    <>
      <NavBarServices />
      {/* Later on, this data will come from database */}
      <Card name="PG's Name" amenities="PG's Amentities" address="PG's Location" phoneNumber="PG's Phone" />
      <Card name="PG's Name" amenities="PG's Amentities" address="PG's Location" phoneNumber="PG's Phone" />
      <Card name="PG's Name" amenities="PG's Amentities" address="PG's Location" phoneNumber="PG's Phone" />
    </>
  )
};

export default PGGirls;
