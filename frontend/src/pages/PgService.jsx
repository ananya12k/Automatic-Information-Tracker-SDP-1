import React, { useState, useEffect } from "react";
import { MDBSpinner } from "mdb-react-ui-kit";
import Card from "../components/Card";
import NavBar from "../components/NavBar";

const PgService = () => {
  const [pg, setPg] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("http://127.0.0.1:8000/data/pgs/"),
      fetch("http://127.0.0.1:8000/service/girls-pgs/"),
      fetch("http://127.0.0.1:8000/service/boys-pgs/"),
    ])
      .then(([response1, response2, response3]) =>
        Promise.all([response1.json(), response2.json(), response3.json()])
      )
      .then(([data1, data2, data3]) => {
        const combinedData = [...data1, ...data2, ...data3];
        setPg(combinedData);
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
        pg.map((x, idx) => (
          <Card
            key={idx}
            name={x.Name}
            rating={x.Rating}
            address={x.Address}
            phone={x.Phone}
            thumbnail={x.Thumbnail}
            type={x.Type}
            latitude={x.Latitude}
            longitude={x.Longitude}
            amentities={x.Amentities}
            detailURL={x.DetailURL} // Add detail URL
          />
        ))
      )}
    </>
  );
};

export default PgService;
