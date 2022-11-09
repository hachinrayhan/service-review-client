import React from 'react';
import { FaFacebook, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-dark p-4 text-white'>

            <p>
                Follow me on: <br />
                <button type="button" class="btn btn-outline-primary"><FaFacebook /></button>{' '}
                <button type="button" class="btn btn-outline-danger"><FaYoutube /></button>{' '}
                <button type="button" class="btn btn-outline-info"><FaTwitter /></button>
            </p>
            <p>©2023 Copyright: HR's Window</p>
        </div>
    );
};

export default Footer;