import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

export default function CarouselComp() {
  const imageStyle = {
    width: '100%',
    height: '550px',
    objectFit: 'cover',
  };

  const containerStyle = {
    height: '600px',
  };

  return (
    <MDBCarousel showControls interval={2000} style={{ margin: "40px" }}>
      <MDBCarouselItem itemId={1}>
        <div style={containerStyle}>
          <img
            src="https://krishnagirlshostelnadiad.com/wp-content/uploads/2017/04/DSC_1263.jpg"
            className="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <div style={containerStyle}>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipPgetPMy3xeZkSpWAMCzOA00L3nCr2xjMdbiTo6=s1360-w1360-h1020"
            className="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <div style={containerStyle}>
          <img
            src="https://lh3.googleusercontent.com/p/AF1QipMKqov4kgt4Jn0cWy1JCunD3TDvmNgbMpfou-ps=s1360-w1360-h1020"
            className="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}
