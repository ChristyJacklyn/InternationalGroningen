import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black-100 text-black p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <Link to='/credit'><div className=''> Credit</div></Link>
      </div>
    </footer>
  );
};

export default Footer;
