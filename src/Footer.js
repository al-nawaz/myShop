import React from 'react';
import './Footer.css'

const Footer = ({token}) => {
  return (
    <div className='myFoot'>
        <p>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        Visitor : {token}
        </p>
    </div>
  )
}

export default Footer