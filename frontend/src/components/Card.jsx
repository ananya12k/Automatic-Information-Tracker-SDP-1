import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

export default function Card(props) {
    return (
        <center>
            <MDBCard style={{ maxWidth: '75vw' , marginTop: '20px'}}>
                <MDBRow className='g-0'>
                    <MDBCol md='4'>
                        <MDBCardImage src='https://cdn.pixabay.com/photo/2013/05/02/00/01/hostel-108500_640.jpg' alt='...' fluid />
                    </MDBCol>
                    <MDBCol md='8'>
                        <MDBCardBody>
                            <MDBCardTitle className='text-start fs-2'>{props.name}</MDBCardTitle>
                            <MDBCardText className='text-start fs-4'>
                                Amentites : {props.amenities}
                            </MDBCardText>
                            <MDBCardText className='text-start fs-4'>
                                Address : {props.address}
                            </MDBCardText>
                            <MDBCardText className='text-start fs-4'>
                                Phone Number : {props.phoneNumber}
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCol>
                </MDBRow>
            </MDBCard>
        </center>
    );
}
