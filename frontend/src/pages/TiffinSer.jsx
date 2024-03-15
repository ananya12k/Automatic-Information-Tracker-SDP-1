import CardTiffin from "../components/CardTiffin";
// import NavBarServices from "../components/NavBarServices";

const TiffinSer = () => {
  return (
    <>
      {/* <NavBarServices /> */}
      {/* Later on, this data will come from database */}
      <CardTiffin
        name="Tiffin's Name"
        rating="Tiffin's Rating"
        charges="Tiffin's Charge"
        phoneNumber="Tiffin's Phone"
      />
      <CardTiffin
        name="Tiffin's Name"
        rating="Tiffin's Rating"
        charges="Tiffin's Charge"
        phoneNumber="Tiffin's Phone"
      />
      <CardTiffin
        name="Tiffin's Name"
        rating="Tiffin's Rating"
        charges="Tiffin's Charge"
        phoneNumber="Tiffin's Phone"
      />
    </>
  );
};

export default TiffinSer;
