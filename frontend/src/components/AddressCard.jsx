import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';
import ReviewModal from './ReviewModal';
import Backdrop from '../components/Backdrop';

const AddressCard = ({ hostel }) => {
    const [showReviewModal, setShowReviewModal] = useState(false);

    const openOnGoogleMap = () => {
        const latitude = hostel.latitude;
        const longitude = hostel.longitude;
        const googleMapsUrl = `http://maps.google.com/maps?q=${latitude},${longitude}`;
        window.location.href = googleMapsUrl;
    }

    const openReviewModal = () => {
        setShowReviewModal(true);
    }

    return (
        <>
            <MDBCard>
                <MDBCardBody>
                    <div style={{ textAlign: 'left' }}>
                        <MDBCardTitle>Address</MDBCardTitle>
                        <MDBCardText>
                            {hostel ? hostel.address : "Address Not Available"}
                        </MDBCardText>
                        <MDBBtn onClick={openOnGoogleMap}>Get Directions</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>

            <MDBCard style={{ marginTop: "10px" }}>
                <MDBCardBody>
                    <div style={{ textAlign: 'left' }}>
                        <MDBCardTitle>Phone Number</MDBCardTitle>
                        <MDBCardText>
                            {hostel ? hostel.phone : "Phone Number Not Available"}
                        </MDBCardText>
                    </div>
                </MDBCardBody>
            </MDBCard>

            <MDBCard style={{ marginTop: "10px" }}>
                <MDBCardBody>
                    <div style={{ textAlign: 'left' }}>
                        <MDBCardTitle>Want to add your review?</MDBCardTitle>
                        <MDBBtn onClick={openReviewModal}>Write Review</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>

            <Backdrop show={showReviewModal} />

            <ReviewModal isOpen={showReviewModal} setOpen={setShowReviewModal} hostel={hostel}/>
        </>
    )
}

export default AddressCard;
