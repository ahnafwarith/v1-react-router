import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = () => {
    return (
        <div>
            <h1>React Router Site</h1>
            <CustomLink to='/'>Home</CustomLink>
            <CustomLink to='/friends'>Friends</CustomLink>
            <CustomLink to='/about'>About</CustomLink>
        </div>
    );
};

export default Navbar;