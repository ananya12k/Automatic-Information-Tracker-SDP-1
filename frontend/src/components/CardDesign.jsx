
import React, { useEffect, useRef, useState } from 'react';

const CardDesign = ({ hosteldetails }) => {
 const scrollContainerRef = useRef(null);
 const [currentCardIndex, setCurrentCardIndex] = useState(0);


 const detailsArray = Array.isArray(hosteldetails) ? hosteldetails : [];

 useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const cardWidth = 500; // Width of each card
    const totalCards = detailsArray.length;

    const intervalDuration = 2000; // Adjust based on your needs

    const scrollInterval = setInterval(() => {
      // Calculate the new scroll position
      const newScrollLeft = currentCardIndex * cardWidth;

      // Update the scroll position
      scrollContainer.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth',
      });

      // Update the current card index
      setCurrentCardIndex((currentCardIndex + 1) % totalCards);
    }, intervalDuration);

    return () => {
      clearInterval(scrollInterval);
    };
 }, [currentCardIndex, detailsArray]); // Depend on detailsArray to recalculate when data changes

 return (
    <div
      ref={scrollContainerRef}
      style={{
        display: 'flex',
        overflowX: 'scroll',
        scrollbarWidth: 'none', // Hide scrollbar for Firefox
        msOverflowStyle: 'none', // Hide scrollbar for Internet Explorer
        '&::-webkit-scrollbar': {
          display: 'none', // Hide scrollbar for Chrome, Safari, and Opera
        },
      }}
    >
      <div style={{ display: 'flex' }}>
        {detailsArray.map((card, index) => {
          // Split the images string into an array of URLs
          const imagesArray = card.images.split('\n');

          return (
            <div key={index} style={{ width: '500px', height: '300px', marginRight: '10px' }}>
              {imagesArray.map((imageUrl, imageIndex) => (
                <img key={imageIndex} src={imageUrl} alt={`Card ${index + 1} Image ${imageIndex + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ))}
            </div>
          );
        })}
      </div>
    </div>
 );
};

export default CardDesign;
