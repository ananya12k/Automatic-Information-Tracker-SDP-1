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
                                <MDBIcon icon='star' className='me-2' />Rating: {props.rating}
                            </MDBCardText>
                            <MDBCardText className='text-start fs-4'>
                                <MDBIcon icon='phone' className='me-2' />Phone Number: {props.phone}
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
