import React, { useState, useEffect, useRef } from 'react';
import NavBarServices from "../components/NavBarServices";
import { MDBCardText } from 'mdb-react-ui-kit';
import CardDesign from '../components/CardDesign';
import UserComment from '../components/UserComment';
import Horizontal from '../components/Horizontal';

import { useLocation } from 'react-router-dom';


const images = [
 'https://mdbootstrap.com/img/new/slides/041.jpg',
 'https://mdbootstrap.com/img/new/slides/042.jpg',
 'https://mdbootstrap.com/img/new/slides/043.jpg',
 // Add more images here if needed
];

export default function OnClick(props) {
 const [imageList, setImageList] = useState(images);
 const scrollContainerRef = useRef(null);
 const scrollDirection = useRef(1); // 1 for forward, -1 for backward
 const isAutoScrolling = useRef(true); // Flag to control automatic scrolling

 const location = useLocation();
 const hostel = location.state?.hostel; 
 console.log(hostel)

 useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const screenWidth = window.innerWidth;
    const scrollAmount = screenWidth > 1200 ? scrollContainer.offsetWidth * 2 : scrollContainer.offsetWidth;
    const intervalDuration = screenWidth > 1200 ? 3000 : 2000;

    const scrollInterval = setInterval(() => {
      if (!isAutoScrolling.current) return;
      const newScrollLeft = scrollContainer.scrollLeft + scrollAmount * scrollDirection.current;
      if (newScrollLeft >= scrollContainer.scrollWidth) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
        scrollDirection.current = 1;
      } else if (newScrollLeft <= 0) {
        scrollDirection.current *= -1;
      } else {
        scrollContainer.scrollTo({
          left: newScrollLeft,
          behavior: 'smooth',
        });
      }
    }, intervalDuration);

    const handleScroll = () => {
      isAutoScrolling.current = false;
    };
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
 }, []);

 const handleScrollEnd = (e) => {
    const { scrollLeft, scrollWidth, clientWidth } = e.target;
    if (scrollLeft + clientWidth >= scrollWidth) {
      setImageList([...imageList, ...images]);
    }
    isAutoScrolling.current = true;
 };

 return (
    <>
      {/* <NavBarServices /> */}
      <MDBCardText className="text-center fs-2 display-5" style={{ padding: "30px", fontFamily: "Arial, sans-serif", color: "#333" }}>
 {hostel ? hostel.name : 'not received'}
</MDBCardText> {/* <div
        ref={scrollContainerRef}
        onScroll={handleScrollEnd}
        style={{
          display: 'flex',
          overflowX: 'scroll',
          scrollSnapType: 'x mandatory',
          scrollPadding: '100px',
          height: '300px',
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
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
              objectFit: 'cover', // Ensure images cover the area without stretching
              borderRadius: '8px', // Add rounded corners for a modern look
            }}
          />
        ))}
      </div> */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', padding: '20px' }}>
        <CardDesign hosteldetails= {hostel}/>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '20px' }}>
        <UserComment/>
        <UserComment/>
        <UserComment/>
        <UserComment/>
      </div>
    </>
 );
}
