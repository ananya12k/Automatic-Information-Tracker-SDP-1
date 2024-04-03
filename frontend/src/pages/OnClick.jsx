import React, { useState, useEffect, useRef } from 'react';
import NavBar from "../components/NavBar";
import { MDBCardText, MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import CardDesign from '../components/CardDesign';
import UserComment from '../components/UserComment';
import Horizontal from '../components/Horizontal';
import { useLocation } from 'react-router-dom';
import HomeCard from '../components/HomeCard';
import DetailsCardOne from '../components/DetailsCardOne';
import DetailsCardTwo from '../components/DetailsCardTwo';

const images = [
 'https://mdbootstrap.com/img/new/slides/041.jpg',
 'https://mdbootstrap.com/img/new/slides/042.jpg',
 'https://mdbootstrap.com/img/new/slides/043.jpg',
];

export default function OnClick(props) {
 const [imageList, setImageList] = useState(images);
 const carouselRef = useRef(null);

 const location = useLocation();
 const hostel = location.state?.hostel;
 console.log(hostel)

 useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollCarousel = () => {
      const scrollAmount = carousel.offsetWidth; 
      carousel.scrollLeft += scrollAmount;
  
      if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
        carousel.scrollLeft = 0; 
      }
    };

    const intervalId = setInterval(scrollCarousel, 1000);

    return () => clearInterval(intervalId); 
 }, []);

 return (
    <>
      <NavBar />
      <MDBCardText className="text-center fs-2 display-5" style={{ padding: "30px", fontFamily: "Arial, sans-serif", color: "#333" }}>
        {hostel ? hostel.name : 'not received'}
      </MDBCardText>
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
          />
        ))}
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
        <UserComment hostel={hostel} />
        <UserComment hostel={hostel} />
        <UserComment hostel={hostel} />
      </div>
    </>
 );
}
