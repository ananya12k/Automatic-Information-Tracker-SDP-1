import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function CardTiffin(props) {
  // Function to generate star icons based on the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<MDBIcon key={i} icon='star' className='text-warning' style={{ fontSize: '1.5rem' }} />);
      } else {
        stars.push(<MDBIcon key={i} icon='star' className='text-muted' style={{ fontSize: '1.5rem' }} />);
      }
    }
    return stars;
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <MDBCard style={{ width: '50vw', borderRadius: '15px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', overflow: 'hidden' }}>
        <MDBRow className='g-0'>
          <MDBCol md='4'>
            <MDBCardImage src={props.thumbnail} alt='Tiffin Thumbnail' className='card-image' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBCardTitle className='text-start fs-2'>{props.name}</MDBCardTitle>
              <MDBCardText className='text-start fs-4'>
                <div className="d-flex align-items-center">
                  <span className="me-2" style={{ fontSize: '1.2rem', color: '#6c757d' }}>Stars:</span>
                  {renderStars(props.rating)}
                </div>
              </MDBCardText>
              <MDBCardText className='text-start fs-4'>
                <MDBIcon icon='phone' className='me-2' />{props.phone}
              </MDBCardText>
              <MDBBtn color='primary' className='mt-3' href={`tel:${props.phone}`}>
                Call Now
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
        <div className="card-footer text-end">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </MDBCard>
    </div>
  );
}
