import React from 'react'
import PaymentCard from './PaymentCard'
// import { DirectionsRunIcon, ThreeDRotation } from '@material-ui/icons';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';

import { Icon } from '@iconify/react';
import bitcoinIcon from '@iconify/icons-mdi/bitcoin';


const Home = () => {
  return (
    <article className="page__inside">
      <section className="section__main hideon-s">
        <h2>How CoinFish works</h2>
        <section>
          <div className="payment__works__container">
            <div className="payment__works__icon__holder">
              <span>USD</span>
              <LocalAtmIcon className="payment__works__icon__holder__icon" />
              <DirectionsRunIcon className="payment__works__icon__holder__icon" />
            </div>
            <ReceiptOutlinedIcon className="payment__works__centericon"/>
            <div className="payment__works__icon__holder">
              <span>BTC</span>
              {/* <bitcoinIcon className="payment__works__icon__holder__icon"/> */}
              <Icon icon={bitcoinIcon} className="payment__works__icon__holder__icon"/>
              <DirectionsRunIcon className="payment__works__icon__holder__icon flipx" />
            </div>
          </div>
        </section>
      </section>
      <div className="page__divider">&nbsp;</div>
      <section className="section__main">
        <h2>Payments made simple</h2>
        <section className="payments__container">
          {/* <div className="payments__top">
            <PaymentCard title="Secure" />
            <PaymentCard title="Reliable" />
            <PaymentCard title="Easy" />
          </div>
          <div className="payments__bottom">
            <PaymentCard title="Instant" />
            <PaymentCard title="Low Fee" />
            <PaymentCard title="Blog" />
          </div> */}
            <PaymentCard title="Secure" />
            <PaymentCard title="Reliable" />
            <PaymentCard title="Easy" />
            <PaymentCard title="Instant" />
            <PaymentCard title="Low Fee" />
            <PaymentCard title="Blog" />
        </section>
      </section>
    </article>
  )
}

export default Home;
