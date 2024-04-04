import React, { useState, useEffect } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import CardTiffin from "../components/CardTiffin";
import NavBar from "../components/NavBar";

const TiffinSer = () => {
  const [tiffins, setTiffins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2] = await Promise.all([
          fetch("http://127.0.0.1:8000/data/tiffins/"),
          fetch("http://127.0.0.1:8000/service/tiffins/"),
        ]);

        if (!response1.ok || !response2.ok) {
          throw new Error("Network response was not ok");
        }

        const [data1, data2] = await Promise.all([
          response1.json(),
          response2.json(),
        ]);
        return [...data1, ...data2];
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        throw error;
      }
    };

    fetchData()
      .then((data) => {
        setTiffins(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
      });
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
        tiffins.map((tiffin, index) => (
          <CardTiffin
            key={index} // or use any other unique identifier from your data
            name={tiffin.Name}
            rating={tiffin.Rating}
            phone={tiffin.Phone}
            thumbnail={tiffin.Thumbnail}
            latitude={tiffin.Latitude}
            longitude={tiffin.Longitude}
            detailURL={`tiffins/${tiffin.id}/`} // Construct detail URL
          />
        ))
      )}
    </>
  );
};

export default TiffinSer;
