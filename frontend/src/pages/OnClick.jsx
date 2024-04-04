import React, { useState, useRef } from 'react';
import { MDBCardText } from 'mdb-react-ui-kit';
import UserComment from '../components/UserComment';
import { useLocation } from 'react-router-dom';
import DetailsCardOne from '../components/DetailsCardOne';
import DetailsCardTwo from '../components/DetailsCardTwo';

const images = [
  'https://mdbootstrap.com/img/new/slides/041.jpg',
  'https://mdbootstrap.com/img/new/slides/042.jpg',
  'https://mdbootstrap.com/img/new/slides/043.jpg',
  'https://mdbootstrap.com/img/new/slides/044.jpg',
  'https://mdbootstrap.com/img/new/slides/045.jpg',
  'https://mdbootstrap.com/img/new/slides/046.jpg',
];

export default function OnClick(props) {
  const [imageList, setImageList] = useState(images);
  const carouselRef = useRef(null);
  console.log(props);
  const location = useLocation();
  const hostel = location.state?.hostel;

  const resetCarousel = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft = 0;
    }
  };

  const scrollLeft = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft -= carousel.offsetWidth;
    }
  };

  const scrollRight = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollLeft += carousel.offsetWidth;
    }
  };

  return (
    <>
      <MDBCardText className="text-center fs-2 display-5" style={{ padding: "30px", fontFamily: "Arial, sans-serif", color: "#333" }}>
        {hostel ? hostel.name : 'not received'}
      </MDBCardText>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div onClick={scrollLeft} style={{ cursor: 'pointer', marginRight: '10px' }}>
          {/* Left Arrow */}
          <div style={{
            width: '0',
            height: '0',
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderRight: '10px solid black',
          }} />
        </div>
        <div
          ref={carouselRef}
          style={{
            display: 'flex',
            overflowX: 'scroll',
            scrollSnapType: 'x mandatory',
            scrollPadding: '100px',
            height: '300px',
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            transition: 'scroll 0.5s ease-in-out',
          }}
        >
          {imageList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Slide ${index + 1}`}
              style={{
                scrollSnapAlign: 'start',
                width: '500px',
                height: '300px',
                marginRight: '10px',
                objectFit: 'cover',
                borderRadius: '8px',
              }}
              onClick={index === 2 ? resetCarousel : undefined}
            />
          ))}
        </div>
        <div onClick={scrollRight} style={{ cursor: 'pointer', marginLeft: '10px' }}>
          {/* Right Arrow */}
          <div style={{
            width: '0',
            height: '0',
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderLeft: '10px solid black',
          }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px', padding: '20px' }}>
        <div style={{ width: '70vw' }}>
          <DetailsCardOne hostel={hostel} />
        </div>
        <div style={{ width: '30vw' }}>
          <DetailsCardTwo hostel={hostel} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <UserComment hostel={hostel} />
      </div>
    </>
  );
}
