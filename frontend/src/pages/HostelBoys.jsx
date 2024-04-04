import React, { useState, useEffect } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

const HostelBoys = () => {
  const [hostels, setHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch("http://127.0.0.1:8000/data/boys-hostels/"),
          fetch("http://127.0.0.1:8000/service/boys-hostels/"),
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error("Network response was not ok");
        }

        const [data1, data2] = await Promise.all([
          response1.json(),
          response2.json(),
        ]);
        const combinedData = [...data1, ...data2];
        setHostels(combinedData);
        setIsLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <NavBar />
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <MDBSpinner role="status">
            <span className="visually-hidden">Loading...</span>
          </MDBSpinner>
        </div>
      ) : (
        hostels.map((hostel, index) => (
          <Card
            key={index}
            name={hostel.Name}
            address={hostel.Address}
            rating={hostel.Rating}
            phone={hostel.Phone}
            thumbnail={hostel.Thumbnail}
            type={hostel.Type}
            latitude={hostel.Latitude}
            longitude={hostel.Longitude}
            amenities={hostel.Amenities} // Fixed typo
            detailURL={`boys-hostels/${hostel.id}/`} // Add detail URL
          />
        ))
      )}
    </>
  );
};

export default HostelBoys;
