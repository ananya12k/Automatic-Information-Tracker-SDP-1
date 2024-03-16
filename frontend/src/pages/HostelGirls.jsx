import React, { useState, useEffect } from 'react';
import Card from "../components/Card";
// import NavBarServices from "../components/NavBarServices";

const HostelGirls = () => {
 const [hostels, setHostels] = useState([]);

 useEffect(() => {
    fetch('http://127.0.0.1:8000/service/girls-hostels/') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // Get the raw response text
      })
      .then(text => {
        const cleanedText = text.replace(/NaN/g, 'null');
        return JSON.parse(cleanedText); 
      })
      .then(data => {
        setHostels(data);
      })
      .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
      });
 }, []);

 return (
    <>
      <NavBarServices />
      {hostels.map((hostel, index) => (
        <Card
          key={index} 
          name={hostel.Name}
          address={hostel.Address}
          rating={hostel.Rating}
          phone={hostel.Phone}
          thumbnail={hostel.Thumbnail}
        />
      ))}
    </>
 );
};

export default HostelGirls;
