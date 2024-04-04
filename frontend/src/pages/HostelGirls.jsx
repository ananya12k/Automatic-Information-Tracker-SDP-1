import React, { useState, useEffect } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

const HostelGirls = () => {
  const [hostels, setHostels] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:8000/data/girls-hostels/"),
      fetch("http://127.0.0.1:8000/service/girls-hostels/"),
    ])
      .then(([response1, response2]) =>
        Promise.all([response1.json(), response2.json()])
      )
      .then(([data1, data2]) => {
        const combinedData = [...data1, ...data2];
        setHostels(combinedData);
        setIsLoading(false);
      })
      .catch((error) => console.error("Fetch error:", error));
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
            amentities={hostel.Amentities}
            detailURL={`girls-hostels/${hostel.id}/`} // Add detail URL
          />
        ))
      )}
    </>
  );
};

export default HostelGirls;
