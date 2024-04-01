import React, { useState } from 'react';
import {
 MDBBtn,
 MDBModal,
 MDBModalDialog,
 MDBModalContent,
 MDBModalHeader,
 MDBModalTitle,
 MDBModalBody,
 MDBModalFooter,
 MDBCard,
 MDBCardBody,
 MDBContainer
} from 'mdb-react-ui-kit';
import Rating from './Rating';
import UserInput from './UserInput';
import UserProfile from './UserProfile';

export default function ReviewModal() {
 const [basicModal, setBasicModal] = useState(false);

 const toggleOpen = () => setBasicModal(!basicModal);

 return (
    <>
      <MDBBtn onClick={toggleOpen} color='primary'>LAUNCH DEMO MODAL</MDBBtn>
      <MDBModal open={basicModal} setOpen={setBasicModal} tabIndex='-1'>
        <MDBModalDialog centered size='lg'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle className='text-center'>Hostel Name</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleOpen}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBContainer className='d-flex flex-column align-items-center' style={{ height: '200px' }}>
                <UserProfile/>
                <Rating />
                <UserInput styles={{ width: '100%', marginTop: '20px' }}/>
              </MDBContainer>
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color='secondary' onClick={toggleOpen}>Submit Review</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
 );
}
