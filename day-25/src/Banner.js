import React from 'react'
import './Banner.css';
import {Button} from 'react-bootstrap';


function Banner() {

    return (
        <div className='banner'>
            <div className='banner__info'>
                <h3>Get out and stretch your imagination</h3>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>
                <Button variant='outlined'>Explore Nearby</Button>
            </div>
        </div>
    )
}

export default Banner
