import CarouselComp from "../components/Carousel";
import HomeCard from "../components/HomeCard";
import NavBar from "../components/NavBar";

const HomePage = () => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };

  const halfWidthStyle = {
    width: '50%',
  }

  return (
    <>
      <NavBar />
      <div style={containerStyle}>
        <div style={halfWidthStyle}>
          <CarouselComp />
        </div>
        <div style={halfWidthStyle}>
          <HomeCard />
        </div>
      </div>
    </>
  );
};

export default HomePage;
