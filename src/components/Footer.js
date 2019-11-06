import React from 'react'
import CopyrightIcon from '@material-ui/icons/Copyright';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const Footer = () => {
  return (
    <footer>
      <CopyrightIcon className="cr"/><span>CoinFish 2013</span><FiberManualRecordIcon className="dot"/>
    </footer>
  )
}

export default Footer;
