import React from 'react';
import { MDBIcon, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';

export default function HelpCustomer() {
    return (
        <MDBListGroup style={{ minWidth: '22rem' }} light>
            <MDBListGroupItem noBorders color='primary' className='px-3 mb-2 rounded-3 fs-4'>
                <MDBIcon fas icon="briefcase" size='1x' className='p-2' />
                I am a Business Owner
                <span ><MDBIcon fas icon="greater-than" size='1x' /></span>
            </MDBListGroupItem>
            <MDBListGroupItem noBorders color='primary' className='px-3 mb-2 rounded-3 fs-4'>
                <MDBIcon fas icon="user-alt" size='1x' className='p-2' />
                I am a User
                <span><MDBIcon fas icon="greater-than" size='1x'/></span>
            </MDBListGroupItem>
        </MDBListGroup>
    );
}